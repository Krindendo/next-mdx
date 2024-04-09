import type { FC } from 'react';

import NavBar from '@/components/Containers/NavBar';
import { sideNavigation } from "navigation.json"

const WithNavBar: FC = () => {
  return (
    <div className="w-full">
      <NavBar
        navItems={sideNavigation}
      />
    </div>
  );
};

export default WithNavBar;
