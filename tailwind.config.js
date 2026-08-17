/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a1128',
          dark: '#050914',
          light: '#131e3d',
          glass: 'rgba(10, 17, 40, 0.75)',
        },
        gold: {
          DEFAULT: '#f59e0b',
          accent: '#fbbf24',
          light: '#fef3c7',
        },
        brmpGreen: {
          DEFAULT: '#10b981',
          dark: '#059669',
          light: '#d1fae5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
