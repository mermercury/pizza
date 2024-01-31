/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      // sans: 'Roboto Mono, monospace',
    },

    extend: {
      colors: {
        pizza: '#123456',
      },
      height: {
        // dynamic viewport height 适应mobile的情况
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
