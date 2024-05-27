import type { FC, PropsWithChildren } from 'react';

import DocsPageHeader from '@/components/Common/DocsPageHeader/DocsPageHeader';
import { useClientContext } from '@/hooks/react-server';

import DefaultLayout from './Default';

const DocsLayout: FC<PropsWithChildren> = ({ children }) => {
  const { frontmatter } = useClientContext();
  return (
    <DefaultLayout>
      <div className="relative lg:gap-10 xl:grid xl:grid-cols-[1fr_300px]">
        <div className="mx-auto w-full min-w-0">
          <DocsPageHeader
            heading={frontmatter.title ?? ''}
            text={frontmatter.description}
          />
          <div className="pb-12 pt-8">{children}</div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default DocsLayout;
