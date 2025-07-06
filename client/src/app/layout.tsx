"use client"
import "./globals.css";
import { ReactNode, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useThemeStore } from "../store/useThemeStore";
import  Navbar  from "../app/components/Navbar";

// Disable SSR for theme provider to avoid hydration mismatch
const ThemeProviderWrapper = dynamic<{ children: ReactNode }>(
  () => import("@/components/theme-provider-wrapper"),
  { 
    ssr: false,
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    )
  }
);

// Set initial theme on client side
function ThemeInitializer({ children }: { children: ReactNode }) {
  const { theme } = useThemeStore();
  
  useEffect(() => {
    // Ensure the theme is applied to the html element
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
  }, [theme]);
  
  return <>{children}</>;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="min-h-screen bg-base-100 text-base-content flex flex-col">
        <ThemeInitializer>
          <ThemeProviderWrapper>
          <Navbar/>
            <main className="flex-1 container mx-auto px-4 py-6">
              {children}
            </main>
          </ThemeProviderWrapper>
        </ThemeInitializer>
      </body>
    </html>
  );
}
