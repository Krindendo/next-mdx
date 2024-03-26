import type { SiteConfig } from "@/types";

import { getAbsoluteUrl, getBaseUrl } from "@/lib/utils";

export const siteConfig: SiteConfig = {
  name: "Next MDX",
  description: "Tamplete for using MDX with Next.",
  url: getBaseUrl(),
  ogImage: getAbsoluteUrl("/og.jpg"),
  links: {
    github: "https://github.com/Krindendo/next-mdx",
  },
};
