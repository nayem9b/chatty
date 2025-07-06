'use client';

import { useThemeStore } from '@/store/useThemeStore';

export const THEMES = [
  'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
  'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden',
  'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black',
  'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade',
  'night', 'coffee', 'winter', 'dim', 'nord', 'sunset'
] as const;

export function ThemeSelector() {
  const { theme, setTheme } = useThemeStore();
  
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
        <span className="hidden md:inline">Theme</span>
        <svg width="12px" height="12px" className="h-3 w-3 fill-current opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
        {THEMES.map((t) => (
          <li key={t}>
            <button
              onClick={() => setTheme(t)}
              className={`text-sm ${theme === t ? 'active' : ''}`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
