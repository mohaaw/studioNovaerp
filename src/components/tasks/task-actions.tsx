"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from "@/components/ui/sheet";
import { prioritizeTasks, type PrioritizeTasksInput } from "@/ai/flows/task-prioritization";
import { Loader2, PlusCircle, Sparkles } from "lucide-react";
import { mockTasks } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { Badge } from "../ui/badge";

export function TaskActions() {
  const [isPending, startTransition] = useTransition();
  const [prioritizedResult, setPrioritizedResult] = useState<any>(null);
  const { toast } = useToast();

  const handlePrioritize = () => {
    const input: PrioritizeTasksInput = {
      tasks: mockTasks.map(t => ({
        taskId: t.id,
        description: t.title,
        dueDate: new Date().toISOString(), 
        importance: t.priority,
        resourceRequirements: "Standard developer resources",
      })),
      availableResources: "Team of 5 developers available.",
    };

    startTransition(async () => {
      const result = await prioritizeTasks(input);
      if (result.prioritizedTasks) {
        setPrioritizedResult(result.prioritizedTasks);
      } else {
        toast({
          variant: "destructive",
          title: "Prioritization Failed",
          description: "The AI could not prioritize the tasks. Please try again.",
        });
      }
    });
  };

  return (
    <div className="flex items-center gap-2">
      <Button>
        <PlusCircle className="mr-2 h-4 w-4" />
        Add Task
      </Button>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" onClick={() => !prioritizedResult && handlePrioritize()}>
            <Sparkles className="mr-2 h-4 w-4" />
            Prioritize with AI
          </Button>
        </SheetTrigger>
        <SheetContent className="sm:max-w-lg">
          <SheetHeader>
            <SheetTitle className="font-headline">AI Task Prioritization</SheetTitle>
            <SheetDescription>
              The AI has analyzed your tasks based on importance, urgency, and resource availability.
            </SheetDescription>
          </SheetHeader>
          <ScrollArea className="h-[calc(100%-120px)] pr-4">
            <div className="py-4 space-y-4">
              {isPending && (
                <div className="flex items-center justify-center py-10">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              )}
              {prioritizedResult && prioritizedResult.map((task: any, index: number) => (
                <Card key={task.taskId} className="bg-background">
                  <CardHeader className="p-4">
                    <CardTitle className="text-base font-medium flex items-center justify-between">
                      {mockTasks.find(t => t.id === task.taskId)?.title}
                      <Badge variant={index < 3 ? "destructive" : "secondary"}>
                         Priority Score: {task.priority}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">{task.reason}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
           <SheetFooter>
              <Button onClick={handlePrioritize} disabled={isPending} className="w-full">
                {isPending ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Rerunning...</>
                ) : (
                    "Rerun Analysis"
                )}
              </Button>
           </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
