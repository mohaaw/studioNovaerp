import { ChatForm } from "@/components/assistant/chat-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, MessageSquare, Workflow } from "lucide-react";

export default function AssistantPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">AI Assistant</h1>
        <p className="text-muted-foreground">Get AI-powered suggestions to optimize your team's workflows.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
            <ChatForm />
        </div>
        <Card className="sticky top-24">
            <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2"><Bot className="h-5 w-5" /> How it works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
                <div className="flex gap-4">
                    <MessageSquare className="h-5 w-5 flex-shrink-0 mt-1" />
                    <p>Paste a conversation or description of a workflow from your team into the text area.</p>
                </div>
                 <div className="flex gap-4">
                    <Workflow className="h-5 w-5 flex-shrink-0 mt-1" />
                    <p>The AI will analyze the text to identify potential bottlenecks, inefficiencies, or areas for improvement in handoffs and information transfer.</p>
                </div>
                 <div className="flex gap-4">
                    <Sparkles className="h-5 w-5 flex-shrink-0 mt-1" />
                    <p>Receive actionable suggestions that you can implement to make your team more productive.</p>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
