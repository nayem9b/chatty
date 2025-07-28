import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // allow toggling
  theme: {
    extend: {
      colors: {
        // optional: custom brand colors if needed
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        modernlight: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#2563eb",   // rich blue
          "secondary": "#6b7280", // neutral gray
          "accent": "#f97316",    // modern orange
          "neutral": "#f3f4f6",   // clean gray backgrounds
          "base-100": "#ffffff",  // white base
          "info": "#0ea5e9",
          "success": "#22c55e",
          "warning": "#facc15",
          "error": "#ef4444",
        },
      },
      {
        moderndark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "primary": "#60a5fa",
          "secondary": "#94a3b8",
          "accent": "#f97316",
          "neutral": "#1e293b",
          "base-100": "#0f172a",
          "info": "#38bdf8",
          "success": "#4ade80",
          "warning": "#facc15",
          "error": "#f87171",
        },
      },
    ],
    darkTheme: "moderndark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
  },
};
