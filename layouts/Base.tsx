'use client';

import type { FC, PropsWithChildren } from 'react';

import SitePattern from '@/components/Containers/SitePattern/SitePattern';

const BaseLayout: FC<PropsWithChildren> = ({ children }) => (
  <div>
    <SitePattern />
    {children}
  </div>
);

export default BaseLayout;
