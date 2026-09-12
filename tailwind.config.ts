import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f766e', // Teal 600 - Trust / Navigation
          light: '#14b8a6', // Teal 500
          dark: '#0f52ba', // Deep blue
        },
        positive: {
          DEFAULT: '#16a34a', // Green 600 - Available/Positive states
        },
        warning: {
          DEFAULT: '#d97706', // Amber 600
        },
        urgent: {
          DEFAULT: '#dc2626', // Red 600 - Emergency states
        },
        surface: {
          DEFAULT: '#ffffff',
          alt: '#f3f4f6', // Gray 100 - Neutral backgrounds
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
