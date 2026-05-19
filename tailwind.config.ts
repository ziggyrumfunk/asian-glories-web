import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette ported from the original CSS variables.
        green: {
          DEFAULT: '#114032', // --g
          dark: '#0b2d23',    // --gd
          mid: '#1a5a45',     // --gm
        },
        gold: {
          DEFAULT: '#fced88', // --gold
          deep: '#e8d565',    // --gold2
        },
        cream: {
          DEFAULT: '#f5f0e8', // --cr
          dark: '#ece5d8',    // --crd
        },
        ink: {
          DEFAULT: '#1c1c1c',  // --tx
          mid: '#4a4a4a',      // --txm
          light: '#9a9a9a',    // --txl
        },
      },
      fontFamily: {
        // Wired up in layout.tsx via next/font. These names match CSS vars defined there.
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-gi)', 'var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        ease: 'cubic-bezier(0.16,1,0.3,1)',
      },
      maxWidth: {
        site: '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
