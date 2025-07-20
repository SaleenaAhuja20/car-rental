import { Container } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
        colors: {
            primary: '#ffc727',
            dark:   '#111111',
    },
    Container: {
        center: true,
        padding: {
            DEFAULT: '1rem',
            sm: '2rem',
            md: '3rem',
            lg: '4rem',
            xl: '5rem',
        },
        screens: {
            '2xl': '1400px',
        },
        },
        },
  },
  plugins: [],
}
