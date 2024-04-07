import type { ComponentProps, FC } from 'react';

import SidebarItem from '@/components/Containers/Sidebar/SidebarItem';

type SidebarGroupProps = {
  groupName: string;
  items: ComponentProps<typeof SidebarItem>[];
};

const SidebarGroup: FC<SidebarGroupProps> = ({ groupName, items }) => (
  <section className="flex w-full flex-col gap-2">
    <label className="px-2 text-xs font-semibold text-neutral-800 dark:text-neutral-200">
      {groupName}
    </label>
    <ul className="m-0 flex flex-col items-start gap-0.5 p-0">
      {items.map(({ label, link }) => (
        <SidebarItem key={link} label={label} link={link} />
      ))}
    </ul>
  </section>
);

export default SidebarGroup;
