import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import type { ComponentProps, FC, PropsWithChildren } from 'react';

import styles from './index.module.css';
import Tabs from '@/components/Common/Tabs';

type CodeTabsProps = Pick<
  ComponentProps<typeof Tabs>,
  'tabs' | 'defaultValue'
> & {
  linkUrl?: string;
  linkText?: string;
};

const CodeTabs: FC<PropsWithChildren<CodeTabsProps>> = ({
  children,
  linkUrl,
  linkText,
  ...props
}) => (
  <Tabs
    {...props}
    className={styles.root}
    addons={
      linkUrl &&
      linkText && (
        <Link className={styles.link} href={linkUrl}>
          {linkText}
          <ArrowUpRightIcon className={styles.icon} />
        </Link>
      )
    }
  >
    {children}
  </Tabs>
);

export default CodeTabs;
