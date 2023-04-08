/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        'default-tc': '#E6E6E6',
        'access-btn-bg': '#1A4CA1'
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

