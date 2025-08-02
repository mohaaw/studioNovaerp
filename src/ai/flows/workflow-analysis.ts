// Workflow Analysis flow
'use server';
/**
 * @fileOverview An AI agent that analyzes employee conversations and suggests improvements for workflows.
 *
 * - aiWorkflowAnalysis - A function that analyzes employee conversations and suggests improvements.
 * - AiWorkflowAnalysisInput - The input type for the aiWorkflowAnalysis function.
 * - AiWorkflowAnalysisOutput - The return type for the aiWorkflowAnalysis function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiWorkflowAnalysisInputSchema = z.object({
  conversationText: z
    .string()
    .describe('The conversation text to analyze.'),
});
export type AiWorkflowAnalysisInput = z.infer<typeof AiWorkflowAnalysisInputSchema>;

const AiWorkflowAnalysisOutputSchema = z.object({
  suggestedImprovements: z.string().describe('The suggested improvements for workflows, handoffs, or information transfers.'),
});
export type AiWorkflowAnalysisOutput = z.infer<typeof AiWorkflowAnalysisOutputSchema>;

export async function aiWorkflowAnalysis(input: AiWorkflowAnalysisInput): Promise<AiWorkflowAnalysisOutput> {
  return aiWorkflowAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiWorkflowAnalysisPrompt',
  input: {schema: AiWorkflowAnalysisInputSchema},
  output: {schema: AiWorkflowAnalysisOutputSchema},
  prompt: `You are an AI assistant that analyzes employee conversations and suggests improvements for workflows, handoffs, or information transfers.

  Analyze the following conversation text and suggest improvements for workflows, handoffs, or information transfers.

  Conversation Text: {{{conversationText}}}

  Suggested Improvements:`,
});

const aiWorkflowAnalysisFlow = ai.defineFlow(
  {
    name: 'aiWorkflowAnalysisFlow',
    inputSchema: AiWorkflowAnalysisInputSchema,
    outputSchema: AiWorkflowAnalysisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
