/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        'default-tc': '#E6E6E6',
        'default-bg': '#1A4CA1',
        'input-brd': '#E6E6E6'
      },
    },
  },
  plugins: [],
  content: [
    './src/**/*.html',
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/**/*.css', // Include your styles.css file here
  ],
}

