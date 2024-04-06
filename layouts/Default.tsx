import type { FC, PropsWithChildren } from 'react';

import WithFooter from '@/components/withFooter';
import WithNavBar from '@/components/withNavBar';
import WithSidebar from '@/components/withSidebar';

const DefaultLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <div className="flex min-h-screen flex-row ">
      <div className="lg:w-72 xl:w-80">
        <WithSidebar navKeys={[]} />
      </div>
      <div className="flex w-full flex-col">
        <header className="contents lg:fixed lg:inset-0 lg:z-40 lg:flex">
          <WithNavBar />
        </header>

        <div className="relative flex-1 px-4 pt-14 sm:px-6 lg:px-8">
          <main className="flex flex-col py-16">{children}</main>
        </div>

        <WithFooter />
      </div>
    </div>
  </>
);

export default DefaultLayout;

/* <header className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
        <div className="scrollbar contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 lg:dark:border-white/10 xl:w-80">
          <WithNavBar />
          <WithSidebar navKeys={[]} />
        </div>
      </header> */
