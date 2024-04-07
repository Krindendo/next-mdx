import type { FC } from 'react';

import ActiveLink from '@/components/Common/ActiveLink';

import styles from './index.module.css';

type SidebarItemProps = {
  label: string;
  link: string;
};

const SidebarItem: FC<SidebarItemProps> = ({ label, link }) => (
  <li className={styles.sideBarItem}>
    <ActiveLink
      href={link}
      activeClassName="rounded bg-green-600 text-white dark:text-white"
    >
      {label}
    </ActiveLink>
  </li>
);

export default SidebarItem;
