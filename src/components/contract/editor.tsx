import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import type { Dispatch, SetStateAction } from 'react';

interface EditorProps {
  content: string;
  onContentChange: Dispatch<SetStateAction<string>>;
}

export default function Editor({ content, onContentChange }: EditorProps) {
  return (
    <Card className="flex-1 flex flex-col overflow-hidden shadow-lg">
      <CardContent className="p-8 flex-1 flex">
        <Textarea
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          className="flex-1 resize-none border-0 shadow-none focus-visible:ring-0 p-0 text-base leading-relaxed font-mono"
          placeholder="Start writing your contract..."
        />
      </CardContent>
    </Card>
  );
}
