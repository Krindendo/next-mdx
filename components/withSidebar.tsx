import type { FC } from 'react';

import Sidebar from '@/components/Containers/Sidebar';
import { useClientContext, useSiteNavigation } from '@/hooks/server';
import type { NavigationKeys } from '@/types';

interface WithSidebarProps {
  navKeys: NavigationKeys[];
  context?: Record<string, string>;
}

const WithSidebar: FC<WithSidebarProps> = ({ navKeys, context }) => {
  const { getSideNavigation } = useSiteNavigation();
  const { headings } = useClientContext();

  const mappedSidebarItems = getSideNavigation(navKeys, context).map(
    ([, { label, items }]) => ({
      groupName: label,
      items: items.map(([, item]) => item),
    })
  );

  return <Sidebar groups={mappedSidebarItems} />;
};

export default WithSidebar;
