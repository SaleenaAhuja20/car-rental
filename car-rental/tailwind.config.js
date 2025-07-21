import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans], // or Inter/Roboto
      },
      colors: {
        primary: '#ffc727',
        darkBg: '#0d0d0d',
        lightText: '#f5f5f5',
      },
    },
  },
  plugins: [],
}
