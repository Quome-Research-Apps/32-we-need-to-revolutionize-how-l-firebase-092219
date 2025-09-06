'use server';
/**
 * @fileOverview Provides AI-driven suggestions for relevant clauses based on the context of the contract.
 *
 * - aiSuggestedClauses - A function that suggests relevant contract clauses based on the context of the document.
 * - AiSuggestedClausesInput - The input type for the aiSuggestedClauses function.
 * - AiSuggestedClausesOutput - The return type for the aiSuggestedClauses function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiSuggestedClausesInputSchema = z.object({
  documentContext: z.string().describe('The current context of the contract document.'),
});
export type AiSuggestedClausesInput = z.infer<typeof AiSuggestedClausesInputSchema>;

const AiSuggestedClausesOutputSchema = z.object({
  suggestedClauses: z.array(z.string()).describe('An array of suggested contract clauses relevant to the document context.'),
});
export type AiSuggestedClausesOutput = z.infer<typeof AiSuggestedClausesOutputSchema>;

export async function aiSuggestedClauses(input: AiSuggestedClausesInput): Promise<AiSuggestedClausesOutput> {
  return aiSuggestedClausesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiSuggestedClausesPrompt',
  input: {schema: AiSuggestedClausesInputSchema},
  output: {schema: AiSuggestedClausesOutputSchema},
  prompt: `You are an AI assistant that provides suggestions for contract clauses based on the current context of the document.

  Based on the following context:
  {{documentContext}}

  Suggest relevant contract clauses that a lawyer might want to include in the document.
  Return an array of clauses.
  `,
});

const aiSuggestedClausesFlow = ai.defineFlow(
  {
    name: 'aiSuggestedClausesFlow',
    inputSchema: AiSuggestedClausesInputSchema,
    outputSchema: AiSuggestedClausesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
