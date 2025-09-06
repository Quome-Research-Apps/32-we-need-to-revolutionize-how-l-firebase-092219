import { History, MessageSquare, Sparkles } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AiSuggestions from './ai-suggestions';
import VersionHistory from './version-history';
import Chat from './chat';

interface RightPanelProps {
  documentContent: string;
}

export default function RightPanel({ documentContent }: RightPanelProps) {
  return (
    <div className="w-[380px] shrink-0">
      <Tabs defaultValue="ai" className="h-full flex flex-col">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="ai">
            <Sparkles className="mr-2 size-4" />
            AI
          </TabsTrigger>
          <TabsTrigger value="history">
            <History className="mr-2 size-4" />
            History
          </TabsTrigger>
          <TabsTrigger value="chat">
            <MessageSquare className="mr-2 size-4" />
            Chat
          </TabsTrigger>
        </TabsList>
        <TabsContent value="ai" className="flex-1 overflow-auto mt-4">
          <AiSuggestions documentContent={documentContent} />
        </TabsContent>
        <TabsContent value="history" className="flex-1 overflow-auto mt-4">
          <VersionHistory />
        </TabsContent>
        <TabsContent value="chat" className="flex-1 overflow-auto mt-4">
          <Chat />
        </TabsContent>
      </Tabs>
    </div>
  );
}
