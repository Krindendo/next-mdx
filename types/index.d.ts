import { Icons } from "@/components/icons";
import { Items } from "@/components/site-provider";

export type NavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavItem[];
    }
);

export interface MainNavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export type SidebarNavItem = NavItem & {};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
  };
};

export interface TableOfContents extends Items {}
