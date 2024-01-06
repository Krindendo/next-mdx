import { MainNavItem, SidebarNavItem } from "@/types";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNavDocs: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [{ title: "Documentation", href: "/docs" }],
  sidebarNavDocs: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
      ],
    },
  ],
};
