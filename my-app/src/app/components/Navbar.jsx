// components/Navbar.jsx
"use client";

import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <NavigationMenu.Root
      className="
        w-full shadow-sm transition-colors duration-200
        bg-[var(--color-panel-solid)]
      "
    >
      <div className="w-full px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="
            text-lg font-bold tracking-tight
            text-[var(--accent-9)]          /* solid accent base */
            hover:text-[var(--accent-7)]     /* lighter on hover */
            transition-colors duration-200
          "
        >
          kylebeck.dev
        </a>

        {/* Social links */}
        <NavigationMenu.List className="flex gap-6 items-center">
          {[
            {
              href: "https://github.com/kbeck473",
              icon: FaGithub,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/kyle-beck-b09074334",
              icon: FaLinkedin,
              label: "LinkedIn",
            },
          ].map(({ href, icon: Icon, label }) => (
            <NavigationMenu.Item key={label}>
              <NavigationMenu.Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-3
                  text-[var(--accent-9)]
                  hover:text-[var(--accent-7)]
                  transition-colors duration-200
                "
              >
                <Icon size={24} />
                <span className="text-lg">{label}</span>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
      </div>
    </NavigationMenu.Root>
  );
}
