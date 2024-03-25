import type { FC, PropsWithChildren } from 'react';

import DefaultLayout from '@/layouts/Default';
import HomeLayout from '@/layouts/Home';
import SearchLayout from '@/layouts/Search';
import type { Layouts } from '@/types';

const layouts = {
  home: HomeLayout,
  page: DefaultLayout,
  search: SearchLayout,
} satisfies Record<Layouts, FC>;

type WithLayoutProps<L = Layouts> = PropsWithChildren<{ layout: L }>;

const WithLayout: FC<WithLayoutProps<Layouts>> = ({ layout, children }) => {
  const LayoutComponent = layouts[layout] ?? DefaultLayout;

  return <LayoutComponent>{children}</LayoutComponent>;
};

export default WithLayout;