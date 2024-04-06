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

import style from './index.module.css';

const navInteractionIcons = {
  show: <Hamburger className={style.navInteractionIcon} />,
  close: <XMark className={style.navInteractionIcon} />,
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
      <div className={style.nodeIconAndMobileItemsToggler}>
        <Link className={style.nodeIconWrapper} href="/" aria-label="Home">
          <Earth className={style.nodejsLogoDark} />
        </Link>

        <Label.Root
          onClick={() => setIsMenuOpen(prev => !prev)}
          className={style.sidebarItemTogglerLabel}
          htmlFor="sidebarItemToggler"
        >
          {navInteractionIcons[isMenuOpen ? 'close' : 'show']}
        </Label.Root>
      </div>

      <input className="peer hidden" id="sidebarItemToggler" type="checkbox" />

      <div className={`${style.main} peer-checked:flex`}>
        <div className={style.navItems}>
          {navItems.map(({ text, link, target }) => (
            <NavItem key={link} href={link} target={target}>
              {text}
            </NavItem>
          ))}
        </div>

        <div className={style.actionsWrapper}>
          <SearchButton />

          <ThemeToggle />

          <Link
            className={style.ghIconWrapper}
            href="https://github.com/krindendo"
            aria-label="Krindendo Github"
          >
            <GitHub />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
