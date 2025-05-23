// components/ThemeProviders.jsx
"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

export default function ThemeProviders({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme={false}    // ← turn off <html style="color-scheme:...">
    >
      {children}
    </ThemeProvider>
  );
}
