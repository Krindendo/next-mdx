import type { FC } from 'react';

import NavBar from '@/components/Containers/NavBar';

const WithNavBar: FC = () => {
  //const { navigationItems } = useNavigation();

  return (
    <div className="w-full">
      <NavBar navItems={[]} />
    </div>
  );
};

export default WithNavBar;

/*
navigationItems.map(([, { label, link, target }]) => ({
          link,
          text: label,
          target,
        }))

*/
