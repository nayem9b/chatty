"use client";

import { useThemeStore } from "../../store/useThemeStore";
import { ReactNode, useEffect } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  const { theme } = useThemeStore();
  
  useEffect(() => {
    // Ensure the theme is applied to the html element
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="min-h-screen bg-base-100 text-base-content flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
