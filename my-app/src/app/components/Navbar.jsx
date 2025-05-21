'use client';

import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  return (
    <NavigationMenu.Root className="w-full bg-[#f8f9fa] text-gray-900 shadow-sm">
      <div className="w-full px-6 py-4 flex justify-between items-center">
        {/* Logo with Tailwind blue classes */}
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-blue-600 hover:text-blue-700 transition"
        >
          kylebeck.dev
        </a>

        {/* Social links with matching colors */}
        <NavigationMenu.List className="flex gap-6 items-center">
          <NavigationMenu.Item>
            <NavigationMenu.Link
              href="https://github.com/kbeck473"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              <FaGithub size={20} />
              <span className="text-sm">GitHub</span>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link
              href="https://www.linkedin.com/in/kyle-beck-b09074334"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              <FaLinkedin size={20} />
              <span className="text-sm">LinkedIn</span>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </div>
    </NavigationMenu.Root>
  );
}
