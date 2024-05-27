import type { FC, PropsWithChildren } from 'react';

import DefaultLayout from '@/layouts/Default';
import DocsLayout from '@/layouts/Docs';
import SearchLayout from '@/layouts/Search';
import type { Layouts } from '@/types';

const layouts = {
  page: DefaultLayout,
  search: SearchLayout,
  docs: DocsLayout,
} satisfies Record<Layouts, FC>;

type WithLayoutProps<L = Layouts> = PropsWithChildren<{ layout: L }>;

const WithLayout: FC<WithLayoutProps<Layouts>> = ({ layout, children }) => {
  const LayoutComponent = layouts[layout] ?? DefaultLayout;

  return <LayoutComponent>{children}</LayoutComponent>;
};

export default WithLayout;
