import { ArrowUpRight } from 'lucide-react';
import type { FC, PropsWithChildren } from 'react';

import ActiveLink from '@/components/Common/ActiveLink';
import { cn } from '@/util/cn';

import styles from './index.module.css';

type NavItemType = 'nav' | 'footer';

type NavItemProps = {
  href: string;
  type?: NavItemType;
  className?: string;
};

const NavItem: FC<PropsWithChildren<NavItemProps>> = ({
  href = '',
  type = 'nav',
  children,
  className,
}) => (
  <ActiveLink
    href={href}
    className={cn(styles.navItem, styles[type], className)}
    activeClassName={styles.active}
    allowSubPath={href.startsWith('/')}
  >
    <span className={styles.label}>{children}</span>

    {type === 'nav' && href.startsWith('http') && (
      <ArrowUpRight className={styles.icon} />
    )}
  </ActiveLink>
);

export default NavItem;
