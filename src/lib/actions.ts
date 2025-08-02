"use server"

import { aiWorkflowAnalysis } from "@/ai/flows/workflow-analysis"
import { z } from "zod"

const workflowAnalysisSchema = z.object({
  conversationText: z.string().min(10, { message: "Please enter a more detailed conversation or workflow description." }),
})

export async function getWorkflowSuggestions(prevState: any, formData: FormData) {
  const validatedFields = workflowAnalysisSchema.safeParse({
    conversationText: formData.get('conversationText'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      suggestion: null,
    }
  }

  try {
    const result = await aiWorkflowAnalysis({ conversationText: validatedFields.data.conversationText })
    return {
      errors: null,
      suggestion: result.suggestedImprovements
    }
  } catch (error) {
    return {
        errors: { _server: ["An error occurred while analyzing the workflow. Please try again."] },
        suggestion: null
    }
  }
}
