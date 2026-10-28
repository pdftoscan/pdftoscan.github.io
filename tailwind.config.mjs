/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pine: {
          DEFAULT: '#15370D',
          surface: '#1E4615',
          dark: '#0E2608',
        },
        sage: {
          DEFAULT: '#728E6D',
          light: '#8FA88A',
          dark: '#577053',
        },
        gold: {
          DEFAULT: '#E5CD82',
          bright: '#F0DC9B',
          deep: '#CBB05E',
        },
        parchment: {
          DEFAULT: '#FFF2B4',
          alabaster: '#FFFDF5',
          soft: '#FFF8D6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      keyframes: {
        scannerBeam: {
          '0%': { top: '0%', opacity: '0.95' },
          '50%': { top: '96%', opacity: '1' },
          '100%': { top: '0%', opacity: '0.95' },
        },
        scannerSweepOnce: {
          '0%': { top: '-4%', opacity: '1' },
          '100%': { top: '102%', opacity: '0.85' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.06)', opacity: '0.88' },
        },
      },
      animation: {
        'scanner-beam': 'scannerBeam 3.2s cubic-bezier(0.22, 1, 0.36, 1) infinite',
        'scanner-sweep': 'scannerSweepOnce 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'breathe': 'breathe 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
