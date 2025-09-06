import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageSquare, Send } from 'lucide-react';

const messages = [
  {
    user: { name: 'Alex Cohen', avatar: 'https://i.pravatar.cc/150?u=a' },
    text: 'In section 3, can we clarify the payment schedule? Monthly is fine, but on which day?',
    time: '10:32 AM',
  },
  {
    user: { name: 'You', avatar: 'https://i.pravatar.cc/150?u=me' },
    text: 'Good point. How about "payable on the first business day of each month"?',
    time: '10:35 AM',
  },
];

export default function Chat() {
  return (
    <Card className="h-full flex flex-col border-0 shadow-none">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="text-primary" />
          Discussion
        </CardTitle>
        <CardDescription>
          Chat with collaborators about this contract in real-time.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className="flex items-start gap-3">
            <Avatar>
              <AvatarImage src={msg.user.avatar} alt={msg.user.name} />
              <AvatarFallback>{msg.user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-baseline gap-2">
                <p className="text-sm font-medium">{msg.user.name}</p>
                <p className="text-xs text-muted-foreground">{msg.time}</p>
              </div>
              <div className="mt-1 rounded-lg bg-secondary/50 p-3 text-sm">
                {msg.text}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="pt-4">
        <form className="flex w-full items-center gap-2">
          <Input placeholder="Type a message..." />
          <Button type="submit" size="icon" aria-label="Send message">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
