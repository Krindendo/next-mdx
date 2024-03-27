'use client';

import { useTheme } from 'next-themes';
import type { FC } from 'react';

// import NavBar from '@/components/Containers/NavBar';
// import WithBanner from '@/components/withBanner';

const WithNavBar: FC = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleCurrentTheme = () =>
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

  return (
    <div>
      {/* <WithBanner section="index" /> */}

      {/* <NavBar
        onThemeTogglerClick={toggleCurrentTheme}
      /> */}
    </div>
  );
};

export default WithNavBar;
