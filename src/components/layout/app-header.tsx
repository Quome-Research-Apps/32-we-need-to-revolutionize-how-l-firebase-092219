import {
  Bell,
  ChevronDown,
  FileText,
  Plus,
  Search,
  Users,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';

export default function AppHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-4 border-b bg-card px-6">
      <div className="flex-1">
        <h1 className="font-headline text-xl font-semibold tracking-tight">
          Services Agreement - Q3
        </h1>
        <p className="text-sm text-muted-foreground flex items-center gap-2">
          <FileText className="size-4" />
          <span>Last saved 3 minutes ago</span>
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex -space-x-2">
          <Avatar className="border-2 border-card">
            <AvatarImage src="https://i.pravatar.cc/150?u=a" alt="User A" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-card">
            <AvatarImage src="https://i.pravatar.cc/150?u=b" alt="User B" />
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-card">
            <AvatarFallback>+2</AvatarFallback>
          </Avatar>
        </div>
        <Button>
          <Users className="mr-2" />
          Share
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/150?u=me" alt="My Avatar" />
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
