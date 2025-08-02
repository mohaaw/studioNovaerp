"use client"

import { useFormState, useFormStatus } from "react-dom"
import { getWorkflowSuggestions } from "@/lib/actions"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Sparkles } from "lucide-react"
import { useEffect } from "react"
import { useToast } from "@/hooks/use-toast"

const initialState = {
  errors: null,
  suggestion: null,
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Analyzing...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Get Suggestions
        </>
      )}
    </Button>
  )
}

export function ChatForm() {
  const [state, formAction] = useFormState(getWorkflowSuggestions, initialState)
  const { toast } = useToast()

  useEffect(() => {
    if (state.errors?._server) {
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: state.errors._server[0],
      })
    }
  }, [state.errors, toast])

  return (
    <form action={formAction}>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Workflow Analysis</CardTitle>
          <CardDescription>
            Paste a conversation or describe a workflow below. The AI will provide suggestions for improvement.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Textarea
            name="conversationText"
            placeholder="e.g., 'Alice: Hey Bob, can you send me the latest report? I can't find it on the drive. Bob: Sure, which one? The Q3 summary or the weekly update?'"
            className="min-h-[150px] lg:min-h-[200px]"
            required
          />
          {state.errors?.conversationText &&
            <p className="text-sm font-medium text-destructive">{state.errors.conversationText[0]}</p>
          }
        </CardContent>
        <CardFooter className="flex justify-between items-center">
            <p className="text-xs text-muted-foreground">Your data is processed securely.</p>
            <SubmitButton />
        </CardFooter>
      </Card>

      {state.suggestion && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2"><Sparkles className="h-5 w-5 text-primary" /> AI Suggestions</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap">
            {state.suggestion}
          </CardContent>
        </Card>
      )}
    </form>
  )
}
