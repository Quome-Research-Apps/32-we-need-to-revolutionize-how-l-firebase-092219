import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { History } from 'lucide-react';

const historyItems = [
  {
    user: { name: 'You', avatar: 'https://i.pravatar.cc/150?u=me' },
    action: 'Edited compensation clause',
    time: '3 minutes ago',
  },
  {
    user: { name: 'Alex Cohen', avatar: 'https://i.pravatar.cc/150?u=a' },
    action: 'Suggested changes to term length',
    time: '1 hour ago',
  },
  {
    user: { name: 'You', avatar: 'https://i.pravatar.cc/150?u=me' },
    action: 'Initial draft created',
    time: '4 hours ago',
  },
  {
    user: { name: 'Brenda Smith', avatar: 'https://i.pravatar.cc/150?u=b' },
    action: 'Viewed the document',
    time: '1 day ago',
  },
];

export default function VersionHistory() {
  return (
    <Card className="h-full flex flex-col border-0 shadow-none">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <History className="text-primary" />
          Version History
        </CardTitle>
        <CardDescription>
          Review and restore previous versions of this contract.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto space-y-4">
        <div className="text-sm font-medium">Today</div>
        <ul className="space-y-4">
          {historyItems.map((item, index) => (
            <li key={index} className="flex items-start gap-3 group">
              <Avatar className="mt-1">
                <AvatarImage src={item.user.avatar} alt={item.user.name} />
                <AvatarFallback>
                  {item.user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium">{item.user.name}</span>{' '}
                  {item.action}
                </p>
                <p className="text-xs text-muted-foreground">{item.time}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Restore
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
