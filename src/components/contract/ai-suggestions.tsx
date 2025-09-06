'use client';

import { getAiSuggestions } from '@/app/actions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { ClipboardCopy, Lightbulb, Sparkles, Terminal } from 'lucide-react';
import { useState, useTransition } from 'react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

interface AiSuggestionsProps {
  documentContent: string;
}

export default function AiSuggestions({ documentContent }: AiSuggestionsProps) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = () => {
    startTransition(async () => {
      setError(null);
      setSuggestions([]);
      const result = await getAiSuggestions({ documentContext });
      if (result.success) {
        setSuggestions(result.suggestions);
      } else {
        setError(result.error);
      }
    });
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      description: 'Clause copied to clipboard.',
    });
  };

  return (
    <Card className="h-full flex flex-col border-0 shadow-none">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="text-primary" />
          Clause Suggestions
        </CardTitle>
        <CardDescription>
          Generate AI-powered clause suggestions based on the current document
          context.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-4 overflow-y-auto">
        {isPending && (
          <div className="space-y-3">
            <Skeleton className="h-[100px] w-full" />
            <Skeleton className="h-[100px] w-full" />
            <Skeleton className="h-[100px] w-full" />
          </div>
        )}
        {error && (
            <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}
        {!isPending && suggestions.length > 0 && (
          <div className="space-y-3">
            {suggestions.map((suggestion, index) => (
              <Card key={index} className="bg-secondary/50">
                <CardContent className="p-4 relative">
                  <p className="text-sm text-muted-foreground pr-8">
                    {suggestion}
                  </p>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() => handleCopy(suggestion)}
                  >
                    <ClipboardCopy className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
         {!isPending && suggestions.length === 0 && !error && (
          <div className="text-center text-sm text-muted-foreground p-8 border-2 border-dashed rounded-lg">
            Click "Generate" to see AI suggestions here.
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleGenerate}
          disabled={isPending}
          className="w-full"
        >
          <Sparkles className="mr-2 h-4 w-4" />
          {isPending ? 'Generating...' : 'Generate Suggestions'}
        </Button>
      </CardFooter>
    </Card>
  );
}
