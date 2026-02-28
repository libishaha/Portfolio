/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        mono: ['"Share Tech Mono"', 'monospace'],
      },
      colors: {
        'pixel-black': '#000000',
        'pixel-white': '#ffffff',
        'pixel-gray': '#888888',
        'pixel-light': '#f0f0f0',
      },
      boxShadow: {
        'pixel': '4px 4px 0px #000000',
        'pixel-lg': '6px 6px 0px #000000',
        'pixel-inset': 'inset 2px 2px 0px #ffffff, inset -2px -2px 0px #888888',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}
