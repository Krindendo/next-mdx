import type { FC, PropsWithChildren } from 'react';

import SitePattern from '@/components/Containers/SitePattern/SitePattern';
import CenteredLayout from '@/layouts/Centered';

const HomeLayout: FC<PropsWithChildren> = ({ children }) => (
  <CenteredLayout>
    <SitePattern />

    <main className="">{children}</main>
  </CenteredLayout>
);

export default HomeLayout;
