'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import classNames from 'classnames';

const Header = () => {
  return (
    <header className="w-full bg-white shadow dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-black dark:text-white">My Portfolio</h1>

        <NavigationMenu.Root className="relative z-10 flex justify-center">
          <NavigationMenu.List className="m-0 flex list-none gap-4 rounded bg-white p-1 shadow-md dark:bg-neutral-800">
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="group flex items-center gap-1 px-4 py-2 text-sm font-medium text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded">
                Learn
                <CaretDownIcon
                  className="transition-transform group-data-[state=open]:rotate-180"
                  aria-hidden
                />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute top-full left-0 mt-2 w-[300px] bg-white dark:bg-neutral-900 p-4 rounded shadow-md">
                <ul className="space-y-2">
                  <li>
                    <NavigationMenu.Link asChild>
                      <Link href="/docs" className="block text-sm text-black dark:text-white hover:underline">
                        Documentation
                      </Link>
                    </NavigationMenu.Link>
                  </li>
                  <li>
                    <NavigationMenu.Link asChild>
                      <Link href="/tutorials" className="block text-sm text-black dark:text-white hover:underline">
                        Tutorials
                      </Link>
                    </NavigationMenu.Link>
                  </li>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link
                  href="/projects"
                  className="block px-4 py-2 text-sm font-medium text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded"
                >
                  Projects
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link
                  href="/about"
                  className="block px-4 py-2 text-sm font-medium text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded"
                >
                  About
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Indicator className="top-full z-10 h-2.5" />
          </NavigationMenu.List>

          <div className="absolute left-0 top-full w-full flex justify-center">
            <NavigationMenu.Viewport className="relative mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-[var(--radix-navigation-menu-viewport-width)] overflow-hidden rounded bg-white dark:bg-neutral-900 shadow-md transition-all duration-300" />
          </div>
        </NavigationMenu.Root>
      </div>
    </header>
  );
};

export default Header;
