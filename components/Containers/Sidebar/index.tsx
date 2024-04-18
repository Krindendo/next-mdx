import type { ComponentProps, FC } from 'react';

import SidebarGroup from '@/components/Containers/Sidebar/SidebarGroup';
import WithRouterSelect from '@/components/withRouterSelect';
import { useClientContext } from '@/hooks/react-server';

import styles from './index.module.css';

interface SidebarProps {
  groups: ComponentProps<typeof SidebarGroup>[];
}

const SideBar: FC<SidebarProps> = ({ groups }) => {
  const { pathname } = useClientContext();

  const selectItems = groups.map(({ items, groupName }) => ({
    label: groupName,
    items: items.map(({ label, link }) => ({ value: link, label })),
  }));

  const currentItem = selectItems
    .map(item => item.items)
    .flat()
    .find(item => pathname === item.value);

  return (
    <aside className={styles.wrapper}>
      {selectItems.length > 0 && (
        <WithRouterSelect
          label="Title"
          values={selectItems}
          defaultValue={currentItem?.value}
        />
      )}

      {groups.map(({ groupName, items }) => (
        <SidebarGroup
          key={groupName.toString()}
          groupName={groupName}
          items={items}
        />
      ))}
    </aside>
  );
};

export default SideBar;

interface SiteSidebarProps {
  className?: string;
}

export function SiteSidebar({ className, ...props }: SiteSidebarProps) {
  const segment = useSelectedLayoutSegment();
  const [toggleDocs, setToggleDocs] = React.useState(false);
  const pathname = usePathname();

  const handleToggleDocs = () => {
    setToggleDocs(prev => !prev);
  };

  React.useEffect(() => {
    if (pathname.includes('algorithms')) {
      setToggleDocs(true);
    }
    if (pathname.includes('docs')) {
      setToggleDocs(false);
    }
  }, [pathname]);

  return (
    <nav className={cn('mb-5', className)} {...props}>
      <SiteSidebarToggle
        toggleDocs={toggleDocs}
        handleToggleDocs={handleToggleDocs}
      />
      <ul role="list">
        {docsConfig.mainNav?.map((item, index) => (
          <li key={index} className="md:hidden">
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'text-sm leading-5 transition hover:text-foreground/80',
                item.href.startsWith(`/${segment}`)
                  ? 'text-foreground'
                  : 'text-foreground/60',
                item.disabled && 'cursor-not-allowed opacity-80'
              )}
            >
              {item.title}
            </Link>
          </li>
        ))}
        {toggleDocs ? (
          <>
            {docsConfig.sidebarNavAlgorithms.map((group, groupIndex) => (
              <NavigationGroup
                key={group.title}
                group={group}
                className={groupIndex === 0 ? 'md:mt-0' : undefined}
              />
            ))}
          </>
        ) : (
          <>
            {docsConfig.sidebarNavDocs.map((group, groupIndex) => (
              <NavigationGroup
                key={group.title}
                group={group}
                className={groupIndex === 0 ? 'md:mt-0' : undefined}
              />
            ))}
          </>
        )}
      </ul>
    </nav>
  );
}
