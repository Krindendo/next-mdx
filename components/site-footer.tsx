import * as React from "react";

import { cn } from "@/lib/utils";
import { Logo } from "./logo";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer
      className={cn(
        "border-t border-zinc-900/5 dark:border-white/5",
        className
      )}
    >
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Logo />
        </div>
      </div>
    </footer>
  );
}
