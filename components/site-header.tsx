"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import {
  SiteSidebarMobile,
  useIsInsideMobileNavigation,
  useMobileNavigationStore,
} from "@/components/site-sidebar-mobile";
import { Logo } from "./logo";

interface SiteHeaderProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const SiteHeader = React.forwardRef<HTMLDivElement, SiteHeaderProps>(
  ({ className, ...props }, ref) => {
    const segment = useSelectedLayoutSegment();
    const { isOpen: mobileNavIsOpen } = useMobileNavigationStore();
    const isInsideMobileNavigation = useIsInsideMobileNavigation();

    return (
      <div
        ref={ref}
        className={cn(
          className,
          "fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80",
          !isInsideMobileNavigation &&
            "backdrop-blur-sm dark:backdrop-blur lg:left-72 xl:left-80",
          isInsideMobileNavigation
            ? "bg-white dark:bg-zinc-900"
            : "bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]"
        )}
      >
        <div
          className={cn(
            "absolute inset-x-0 top-full h-px transition",
            (isInsideMobileNavigation || !mobileNavIsOpen) &&
              "bg-zinc-900/10 dark:bg-white/10"
          )}
        />
        <div className="flex items-center gap-5 lg:hidden">
          <SiteSidebarMobile />
          <Logo />
        </div>
        <div className="ml-auto flex items-center gap-5">
          <nav className="hidden md:block">
            <ul role="list" className="flex items-center gap-8">
              {docsConfig.mainNav?.map((item, index) => (
                <li key={index}>
                  <Link
                    key={index}
                    href={item.disabled ? "#" : item.href}
                    className={cn(
                      "text-sm leading-5 transition hover:text-foreground/80",
                      item.href.startsWith(`/${segment}`)
                        ? "text-foreground"
                        : "text-foreground/60",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden h-5 w-px bg-zinc-900/10 dark:bg-white/10 md:block" />
          <div className="flex gap-4">
            <ModeToggle />
          </div>
        </div>
      </div>
    );
  }
);
SiteHeader.displayName = "SiteHeader";
