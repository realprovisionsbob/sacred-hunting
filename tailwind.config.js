/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          dark: '#1a1a1a',
          charcoal: '#2d2d2d',
          brown: '#8B4513',
          green: '#2F4F2F',
          tan: '#D2B48C',
          stone: '#696969',
          light: '#eeeeee',
          section: '#ecf0f1',
          cta: '#e74c3c',
          'cta-hover': '#c0392b',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}