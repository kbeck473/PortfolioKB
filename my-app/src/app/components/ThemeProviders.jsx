// components/ThemeProviders.jsx
"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

export default function ThemeProviders({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
