'use client';

// import { Menu, X as XMark } from 'lucide-react';
// import { useState } from 'react';
import type { FC, HTMLAttributeAnchorTarget } from 'react';

import { SearchButton } from '@/components/Common/Search';
import ThemeToggle from '@/components/Common/ThemeToggle';
import NavItem from '@/components/Containers/NavBar/NavItem';
import GitHub from '@/components/Icons/Social/GitHub';
import Button from '@/components/ui/Button';

// const navInteractionIcons = {
//   show: <Menu />,
//   close: <XMark />,
// };

type NavbarProps = {
  navItems: {
    label: string;
    link: string;
    target?: HTMLAttributeAnchorTarget | undefined;
  }[];
};

const NavBar: FC<NavbarProps> = ({ navItems }) => {
  //const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-whitedark:border-neutral-900 border-neutral-200 dark:bg-neutral-950 md:flex md:h-16 md:flex-row md:items-center md:gap-8 md:border-b md:px-8">
      <input className="peer hidden" id="sidebarItemToggler" type="checkbox" />

      <div className="hidden flex-1 flex-col peer-checked:flex md:flex md:flex-row md:items-center">
        <div className="lg:block lg:max-w-sm lg:flex-auto">
          <SearchButton />
        </div>
        <div className="ml-auto flex items-center gap-5">
          <div className="flex flex-col gap-1 border-b border-neutral-200 p-4 dark:border-neutral-900 md:flex-1 md:flex-row md:border-0 md:p-0">
            {navItems.map(({ label, link, target }) => (
              <NavItem key={link} href={link} target={target}>
                {label}
              </NavItem>
            ))}
          </div>

          <div className="hidden h-5 w-px bg-zinc-900/10 dark:bg-white/10 md:block" />
          <div className="flex items-center gap-4">
            <ThemeToggle />

            <Button variant="ghost" className="w-9 px-0" asChild>
              <a
                href="https://github.com/Krindendo"
                target="_blank"
                rel="noreferrer"
              >
                <GitHub className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

/* <div className="md:px-0; flex h-16 shrink-0 items-center border-b border-neutral-200 px-4 dark:border-neutral-900 md:flex md:h-full md:items-center md:border-0">
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
      </div> */
