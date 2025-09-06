'use server';

import {
  aiSuggestedClauses,
  type AiSuggestedClausesInput,
} from '@/ai/flows/ai-suggested-clauses';
import { z } from 'zod';

const inputSchema = z.object({
  documentContext: z.string().min(1, 'Document context cannot be empty.'),
});

export async function getAiSuggestions(
  input: AiSuggestedClausesInput
): Promise<{ success: true; suggestions: string[] } | { success: false; error: string }> {
  try {
    const validatedInput = inputSchema.parse(input);
    const result = await aiSuggestedClauses(validatedInput);
    if (result.suggestedClauses && result.suggestedClauses.length > 0) {
      return { success: true, suggestions: result.suggestedClauses };
    } else {
      return { success: false, error: 'No suggestions were generated. Try adding more content to the document.' };
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message };
    }
    console.error('Error getting AI suggestions:', error);
    return { success: false, error: 'An unexpected error occurred while fetching AI suggestions.' };
  }
}
