'use client'

import { useEffect, useState } from 'react';
import { useThemeStore } from '@/store/useThemeStore';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useThemeStore();

  // Set the theme class on the html element
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove all theme classes
    root.removeAttribute('data-theme');
    root.removeAttribute('class');
    
    // Add the selected theme
    if (theme) {
      root.setAttribute('data-theme', theme);
    }
    
    // Add DaisyUI theme classes
    root.classList.add('bg-base-100', 'text-base-content');
  }, [theme]);

  // Only render children when mounted on client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <>{children}</>;
}
