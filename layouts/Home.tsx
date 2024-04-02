import type { FC, PropsWithChildren } from 'react';

import CenteredLayout from '@/layouts/Centered';

const HomeLayout: FC<PropsWithChildren> = ({ children }) => (
  <CenteredLayout>
    <div className="glowingBackdrop" />

    <main className="">{children}</main>
  </CenteredLayout>
);

export default HomeLayout;
