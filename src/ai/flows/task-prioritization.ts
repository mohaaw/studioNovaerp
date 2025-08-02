'use server';

/**
 * @fileOverview Task prioritization AI agent.
 *
 * - prioritizeTasks - A function that prioritizes tasks based on urgency, importance, and resource availability.
 * - PrioritizeTasksInput - The input type for the prioritizeTasks function.
 * - PrioritizeTasksOutput - The return type for the prioritizeTasks function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PrioritizeTasksInputSchema = z.object({
  tasks: z
    .array(
      z.object({
        taskId: z.string().describe('Unique identifier for the task.'),
        description: z.string().describe('Detailed description of the task.'),
        dueDate: z.string().describe('The due date of the task (ISO format).'),
        importance: z
          .enum(['High', 'Medium', 'Low'])
          .describe('Importance level of the task.'),
        resourceRequirements: z
          .string()
          .describe('Resources required to complete the task.'),
      })
    )
    .describe('List of tasks to prioritize.'),
  availableResources: z
    .string()
    .describe('A description of the available resources.'),
});
export type PrioritizeTasksInput = z.infer<typeof PrioritizeTasksInputSchema>;

const PrioritizeTasksOutputSchema = z.object({
  prioritizedTasks: z
    .array(
      z.object({
        taskId: z.string().describe('Unique identifier for the task.'),
        priority: z
          .number()
          .describe('Priority score (higher number means higher priority).'),
        reason: z
          .string()
          .describe('Explanation for the assigned priority score.'),
      })
    )
    .describe('Prioritized list of tasks with explanations.'),
});
export type PrioritizeTasksOutput = z.infer<typeof PrioritizeTasksOutputSchema>;

export async function prioritizeTasks(
  input: PrioritizeTasksInput
): Promise<PrioritizeTasksOutput> {
  return prioritizeTasksFlow(input);
}

const prompt = ai.definePrompt({
  name: 'prioritizeTasksPrompt',
  input: {schema: PrioritizeTasksInputSchema},
  output: {schema: PrioritizeTasksOutputSchema},
  prompt: `You are an AI project management assistant tasked with prioritizing a list of tasks based on urgency, importance, and resource availability.

  Given the following list of tasks:
  {{#each tasks}}
  - Task ID: {{taskId}}
    Description: {{description}}
    Due Date: {{dueDate}}
    Importance: {{importance}}
    Resource Requirements: {{resourceRequirements}}
  {{/each}}

  And the following available resources: {{{availableResources}}}

  Prioritize the tasks, assigning a priority score to each task and explaining the reasoning behind the score.  Higher score means higher priority.

  Return the prioritized tasks in the following JSON format:
  {{outputSchema}}
  `,
});

const prioritizeTasksFlow = ai.defineFlow(
  {
    name: 'prioritizeTasksFlow',
    inputSchema: PrioritizeTasksInputSchema,
    outputSchema: PrioritizeTasksOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
