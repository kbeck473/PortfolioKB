'use client';

import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Text } from '@radix-ui/themes';

export default function Navbar() {
  return (
    <NavigationMenu.Root className="w-full bg-base-100 shadow-sm">
      <div className="w-full px-6 py-4 flex justify-between items-center">
        <a
          href="/"
          className="text-xl font-bold tracking-tight hover:opacity-80 transition"
        >
          kylebeck.dev
        </a>

        <NavigationMenu.List className="flex gap-6 items-center">
          <NavigationMenu.Item>
            <NavigationMenu.Link
              href="https://github.com/kbeck473"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors duration-200 hover:[color:var(--accent-9)]"
            >
              <FaGithub size={20} />
              <Text size="3">GitHub</Text>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link
              href="https://www.linkedin.com/in/kyle-beck-b09074334"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors duration-200 hover:[color:var(--accent-9)]"
            >
              <FaLinkedin size={20} />
              <Text size="3">LinkedIn</Text>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </div>
    </NavigationMenu.Root>
  );
}
