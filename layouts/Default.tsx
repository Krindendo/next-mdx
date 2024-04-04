import type { FC, PropsWithChildren } from 'react';

import SitePattern from '@/components/Containers/SitePattern/SitePattern';
import WithFooter from '@/components/withFooter';
import WithNavBar from '@/components/withNavBar';
import WithSidebar from '@/components/withSidebar';

const DefaultLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <SitePattern />
    <div className="flex min-h-screen flex-col lg:ml-72 xl:ml-80">
      <header className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
        <WithNavBar />
        <WithSidebar navKeys={[]} />
      </header>
      <div className="relative flex-1 px-4 pt-14 sm:px-6 lg:px-8">
        <main className="flex flex-col py-16">{children}</main>
      </div>
      <WithFooter />
    </div>
  </>
);

export default DefaultLayout;
