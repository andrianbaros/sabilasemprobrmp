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
          DEFAULT: '#0a192f',
          dark: '#020c1b',
          light: '#112240',
          glass: 'rgba(10, 25, 47, 0.82)',
        },
        gold: {
          DEFAULT: '#e6a100',
          accent: '#ffd700',
          light: '#fff8dc',
        },
        brmpGreen: {
          DEFAULT: '#00a86b',
          dark: '#007a4d',
          light: '#e6f4ea',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
