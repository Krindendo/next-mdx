import { AnimatePresence, motion } from 'framer-motion';
import type { ComponentProps, FC } from 'react';

import SidebarItem from '@/components/Containers/Sidebar/SidebarItem';

import ActivePageMarker from '@/components/Containers/Sidebar/ActivePageMarker';
import NavLink from '@/components/Containers/Sidebar/NavLink';
import VisibleSectionHighlight from '@/components/Containers/Sidebar/VisibleSectionHighlight';

type SidebarGroupProps = {
  groupName: string;
  items: ComponentProps<typeof SidebarItem>[];
  className?: string;
};

const SidebarGroup: FC<SidebarGroupProps> = ({
  groupName,
  items,
  className,
}) => {
  const store = useSectionStore();
  const pathname = usePathname();
  const sections = useStore(store, s => s.sections);

  const isActiveGroup =
    group.items?.findIndex(link => link.href === pathname) !== -1;

  <li className={cn('relative mt-6', className)}>
    <motion.h2
      layout="position"
      className="text-xs font-semibold text-zinc-900 dark:text-white"
    >
      {group.title}
    </motion.h2>
    <div className="relative mt-3 pl-2">
      <AnimatePresence initial={!isInsideMobileNavigation}>
        {isActiveGroup && (
          <VisibleSectionHighlight group={group} pathname={pathname} />
        )}
      </AnimatePresence>
      <motion.div
        layout
        className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"
      />
      <AnimatePresence initial={false}>
        {isActiveGroup && (
          <ActivePageMarker group={group} pathname={pathname} />
        )}
      </AnimatePresence>
      <ul role="list" className="border-l border-transparent">
        {group.items?.map(item => (
          <motion.li key={item.href} layout="position" className="relative">
            <NavLink href={item.href || '#'} active={item.href === pathname}>
              {item.title}
            </NavLink>
            <AnimatePresence mode="popLayout" initial={false}>
              {item.href === pathname && sections.items?.length ? (
                <Tree tree={sections} />
              ) : null}
            </AnimatePresence>
          </motion.li>
        ))}
      </ul>
    </div>
  </li>;
};

export default SidebarGroup;
