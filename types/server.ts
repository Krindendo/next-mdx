import type { Heading } from '@vcarl/remark-headings';

import type { LegacyFrontMatter } from './frontmatter';

export interface ClientSharedServerContext {
  frontmatter: LegacyFrontMatter;
  headings: Array<Heading>;
  pathname: string;
  filename: string;
}