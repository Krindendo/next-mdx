'use client';

import Hamburger from '@heroicons/react/24/solid/Bars3Icon';
import XMark from '@heroicons/react/24/solid/XMarkIcon';
import * as Label from '@radix-ui/react-label';
import { useState } from 'react';
import type { FC, HTMLAttributeAnchorTarget } from 'react';

import { SearchButton } from '@/components/Common/Search';
import ThemeToggle from '@/components/Common/ThemeToggle';
import NavItem from '@/components/Containers/NavBar/NavItem';
import Earth from '@/components/Icons/Maps/Earth';
import GitHub from '@/components/Icons/Social/GitHub';
import Link from '@/components/Link';

const navInteractionIcons = {
  show: <Hamburger className="size-6" />,
  close: <XMark className="size-6" />,
};

type NavbarProps = {
  navItems: {
    text: string;
    link: string;
    target?: HTMLAttributeAnchorTarget | undefined;
  }[];
};

const NavBar: FC<NavbarProps> = ({ navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-whitedark:border-neutral-900 border-neutral-200 dark:bg-neutral-950 md:flex md:h-16 md:flex-row md:items-center md:gap-8 md:border-b md:px-8">
      <div className="md:px-0; flex h-16 shrink-0 items-center border-b border-neutral-200 px-4 dark:border-neutral-900 md:flex md:h-full md:items-center md:border-0">
        <Link className="h-[30px] flex-1" href="/" aria-label="Home">
          <Earth className="h-6 w-20" />
        </Link>

        <Label.Root
          onClick={() => setIsMenuOpen(prev => !prev)}
          className="block cursor-pointer md:hidden"
          htmlFor="sidebarItemToggler"
        >
          {navInteractionIcons[isMenuOpen ? 'close' : 'show']}
        </Label.Root>
      </div>

      <input className="peer hidden" id="sidebarItemToggler" type="checkbox" />

      <div className="hidden flex-1 flex-col peer-checked:flex md:flex md:flex-row md:items-center">
        <SearchButton />
        <div className="flex flex-col gap-1 border-b border-neutral-200 p-4 dark:border-neutral-900 md:flex-1 md:flex-row md:border-0 md:p-0">
          {navItems.map(({ text, link, target }) => (
            <NavItem key={link} href={link} target={target}>
              {text}
            </NavItem>
          ))}
        </div>

        <div className="flex items-center gap-2 border-b border-neutral-200 p-4 dark:border-neutral-900 md:border-0 md:p-0">
          <ThemeToggle className="rounded-md hover:bg-neutral-100 hover:dark:bg-neutral-900" />

          <Link
            className="size-9 rounded-md p-2 hover:bg-neutral-100 hover:dark:bg-neutral-900"
            href="https://github.com/krindendo"
            aria-label="Krindendo Github"
          >
            <GitHub className="fill-neutral-700 dark:fill-neutral-300" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
