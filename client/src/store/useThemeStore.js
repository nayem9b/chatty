import { create } from 'zustand';

// Helper function to safely access localStorage
const getStoredTheme = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('chat-theme') || 'coffee';
  }
  return 'coffee'; // Default theme for SSR
};

export const useThemeStore = create((set) => ({
  theme: getStoredTheme(),
  setTheme: (theme) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('chat-theme', theme);
    }
    set({ theme });
  },
}));
