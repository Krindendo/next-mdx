import type { FC } from 'react';

import Sidebar from '@/components/Containers/Sidebar';
import { useSiteNavigation } from '@/hooks/server';
import type { NavigationKeys } from '@/types';

interface WithSidebarProps {
  navKeys: NavigationKeys[];
  context?: Record<string, string>;
}

const WithSidebar: FC<WithSidebarProps> = ({ navKeys, context }) => {
  const { getSideNavigation } = useSiteNavigation();

  const mappedSidebarItems = getSideNavigation(navKeys, context).map(
    ([, { label, items }]) => ({
      groupName: label,
      items: items.map(([, item]) => item),
    })
  );

  return <Sidebar groups={mappedSidebarItems} />;
};

export default WithSidebar;
