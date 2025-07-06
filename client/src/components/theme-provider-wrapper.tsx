'use client';

import { ThemeProvider } from '@/providers/theme-provider';
import { Providers } from '@/providers/session-provider';

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Providers>{children}</Providers>
    </ThemeProvider>
  );
}
