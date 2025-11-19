/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neo-bg': '#F0F0F0',
        'neo-black': '#121212',
        'neo-lime': '#CCFF00',
        'neo-pink': '#FF00FF',
        'neo-cyan': '#00FFFF',
        'neo-orange': '#FF4D00',
        'neo-purple': '#9D00FF',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        'hard': '6px 6px 0px 0px #121212',
        'hard-lg': '12px 12px 0px 0px #121212',
        'hard-xl': '18px 18px 0px 0px #121212',
        'hard-reverse': '-6px 6px 0px 0px #121212',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marqueeReverse 25s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
