import { Button } from "@/components/ui/button";
import { KanbanBoard } from "@/components/tasks/kanban-board";
import { PlusCircle } from "lucide-react";
import { TaskActions } from "@/components/tasks/task-actions";

export default function TasksPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-headline">Task Manager</h1>
          <p className="text-muted-foreground">Organize, assign, and track your team's work.</p>
        </div>
        <TaskActions />
      </div>

      <KanbanBoard />
    </div>
  )
}
