import {
  FileText,
  Home,
  LayoutDashboard,
  Settings,
  Users,
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

const LexCollaborateLogo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-primary"
  >
    <path
      d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.1"
    />
    <path
      d="M14 2V8H20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 13H8"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 17H8"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function AppSidebar() {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: FileText, label: 'All Contracts', active: true },
    { icon: Users, label: 'Parties' },
  ];

  const bottomItems = [{ icon: Settings, label: 'Settings' }];

  return (
    <aside className="flex h-full w-16 flex-col items-center border-r bg-card py-4">
      <TooltipProvider>
        <div className="mb-6">
          <LexCollaborateLogo />
        </div>
        <nav className="flex flex-1 flex-col items-center gap-2">
          {navItems.map((item) => (
            <Tooltip key={item.label}>
              <TooltipTrigger asChild>
                <Button
                  variant={item.active ? 'secondary' : 'ghost'}
                  size="icon"
                  aria-label={item.label}
                  className="rounded-lg"
                >
                  <item.icon className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>
        <div className="flex flex-col items-center gap-2">
          {bottomItems.map((item) => (
            <Tooltip key={item.label}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={item.label}
                  className="rounded-lg"
                >
                  <item.icon className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </aside>
  );
}
