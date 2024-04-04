import type { FC } from 'react';

import Sidebar from '@/components/Containers/Sidebar';
import type { NavigationKeys } from '@/types';

type WithSidebarProps = {
  navKeys: NavigationKeys[];
};

const WithSidebar: FC<WithSidebarProps> = ({ navKeys, context }) => {
  return <Sidebar groups={[]} />;
};

export default WithSidebar;
