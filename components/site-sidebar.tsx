"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { SidebarNavItem, TableOfContents } from "@/types";
import { useStore } from "zustand";

import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import {
  useIsInsideMobileNavigation,
  useMobileNavigationStore,
} from "@/components/site-sidebar-mobile";
import { useSectionStore } from "./site-provider";

const SIDEBAR_DEEP_LEVEL = 2;

interface NavigationGroupProps {
  group: SidebarNavItem;
  className?: string;
}

function NavigationGroup({ group, className }: NavigationGroupProps) {
  const store = useSectionStore();
  const pathname = usePathname();
  const sections = useStore(store, (s) => s.sections);

  return (
    <li className={cn("relative mt-6", className)}>
      <h2 className="text-xs font-semibold text-zinc-900 dark:text-white">
        {group.title}
      </h2>
      <div className="relative mt-3 pl-2">
        <ul role="list" className="border-l border-transparent">
          {group.items?.map((item) => (
            <li key={item.href} className="relative">
              <NavLink href={item.href || "#"} active={item.href === pathname}>
                {item.title}
              </NavLink>
              <Tree tree={sections} />
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

interface NavLinkProps {
  href: string;
  active?: boolean;
  isAnchorLink?: boolean;
  children: React.ReactNode;
}

function NavLink({
  href,
  active,
  isAnchorLink = false,
  children,
}: NavLinkProps) {
  const { close } = useMobileNavigationStore();
  const isInsideMobileNavigation = useIsInsideMobileNavigation();

  function handleChangeRoute() {
    if (isInsideMobileNavigation) {
      close();
    }
  }

  return (
    <Link
      href={href}
      onClick={handleChangeRoute}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex justify-between gap-2 py-1 pr-3 text-sm transition",
        isAnchorLink ? "pl-7" : "pl-4",
        active
          ? "text-zinc-900 dark:text-white"
          : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      )}
    >
      <span className="truncate">{children}</span>
    </Link>
  );
}

interface TreeProps {
  tree: TableOfContents;
  level?: number;
}

const Tree = React.forwardRef<HTMLUListElement, TreeProps>(
  ({ tree, level = 1 }, ref) => {
    if (tree.items?.length === undefined || level > SIDEBAR_DEEP_LEVEL) {
      return null;
    }

    if (level === 1) {
      return (
        <ul ref={ref} role="list">
          {tree.items?.map((section) => (
            <li key={section.url}>
              <NavLink href={section.url} isAnchorLink>
                {section.title}
              </NavLink>
              {tree.items?.length ? (
                <Tree tree={section} level={level + 1} />
              ) : null}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <ul className={cn("", { "pl-4": level !== 1 })}>
        {tree.items?.map((section) => (
          <li key={section.url}>
            <NavLink href={section.url} isAnchorLink>
              {section.title}
            </NavLink>
            {tree.items?.length ? (
              <Tree tree={section} level={level + 1} />
            ) : null}
          </li>
        ))}
      </ul>
    );
  }
);

Tree.displayName = "Tree";

interface SiteSidebarProps {
  className?: string;
}

export function SiteSidebar({ className, ...props }: SiteSidebarProps) {
  const segment = useSelectedLayoutSegment();

  return (
    <nav className={cn("mb-5", className)} {...props}>
      <ul role="list">
        {docsConfig.mainNav?.map((item, index) => (
          <li key={index} className="md:hidden">
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
        {docsConfig.sidebarNavDocs.map((group, groupIndex) => (
          <NavigationGroup
            key={group.title}
            group={group}
            className={groupIndex === 0 ? "md:mt-0" : undefined}
          />
        ))}
      </ul>
    </nav>
  );
}
