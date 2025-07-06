import { create } from 'zustand';

type Theme = 'light' | 'dark' | 'cupcake' | 'bumblebee' | 'emerald' | 'corporate' |
  'synthwave' | 'retro' | 'cyberpunk' | 'valentine' | 'halloween' | 'garden' |
  'forest' | 'aqua' | 'lofi' | 'pastel' | 'fantasy' | 'wireframe' | 'black' |
  'luxury' | 'dracula' | 'cmyk' | 'autumn' | 'business' | 'acid' | 'lemonade' |
  'night' | 'coffee' | 'winter' | 'dim' | 'nord' | 'sunset';

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Default theme
const DEFAULT_THEME: Theme = 'coffee';

// Helper function to safely access localStorage
const getStoredTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return DEFAULT_THEME;
  }
  
  // Check if the stored theme is in our list of valid themes
  const storedTheme = localStorage.getItem('chat-theme');
  const validThemes: Theme[] = [
    'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
    'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden',
    'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black',
    'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade',
    'night', 'coffee', 'winter', 'dim', 'nord', 'sunset'
  ];

  return storedTheme && validThemes.includes(storedTheme as Theme) 
    ? storedTheme as Theme 
    : DEFAULT_THEME;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: getStoredTheme(),
  setTheme: (theme: Theme) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('chat-theme', theme);
    }
    set({ theme });
  },
}));
