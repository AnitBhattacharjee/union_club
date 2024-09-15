/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        keyframes: {
            fadeIn: {
                '0%': { opacity: '0' },
                '100%': { opacity: '1' },
            },
        },
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
        },
        colors: {
            primary: '#1E40AF', // Example custom color
        },
        animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        },
    },
  },
  plugins: [],
}