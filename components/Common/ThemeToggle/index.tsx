import {
  MoonIcon,
  SunIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/16/solid';
import {
  MoonIcon as MoonIconBig,
  SunIcon as SunIconBig,
} from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import type { FC } from 'react';

import Button from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { cn } from '@/util/cn';

type ThemeToggleProps = {
  className: string;
};

const ThemeToggle: FC<ThemeToggleProps> = ({ className }) => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(className, 'h-8 w-8 px-0')}
        >
          <SunIconBig className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIconBig className="absolute rotate-90 scale-0 transition-all dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="text-muted-foreground hover:text-foreground"
          onClick={() => setTheme('light')}
        >
          <SunIcon className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-muted-foreground hover:text-foreground"
          onClick={() => setTheme('dark')}
        >
          <MoonIcon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-muted-foreground hover:text-foreground"
          onClick={() => setTheme('system')}
        >
          <ComputerDesktopIcon className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
