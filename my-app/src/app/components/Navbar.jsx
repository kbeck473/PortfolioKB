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
            text-[var(--accent-9)]
            hover:text-[var(--accent-7)]
            transition-colors duration-200
          "
        >
          kylebeck.dev
        </a>

        {/* Social links - card-style buttons, text color stays constant */}
        <NavigationMenu.List className="flex gap-4 items-center">
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
                  flex items-center gap-2 px-4 py-2
                  rounded-xl shadow-sm
                  bg-[var(--color-panel)]
                  text-[var(--accent-9)] font-semibold
                  hover:bg-[var(--accent-5)]
                  hover:scale-105
                  focus:outline-none focus:ring-2 focus:ring-[var(--accent-6)]
                  transition-all duration-200
                  active:scale-100
                  border border-transparent
                "
                style={{
                  boxShadow: "0 2px 8px 0 rgba(30,41,59,.07)",
                }}
              >
                <Icon size={22} />
                <span className="text-base">{label}</span>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
      </div>
    </NavigationMenu.Root>
  );
}
