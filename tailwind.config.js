/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        'default-tc': '#E6E6E6',
        'default-bg': '#1A4CA1',
        'input-brd': '#E6E6E6',
        'gray-blue': '#A8BBDB;'
      },
      borderRadius: {
        'md': '.4rem'
      },
      flexCol: {
        '.flex-col': {
          '@apply flex flex-col': '',
        },
      },
      jc: {
        '.justify-center': {
          '@apply justify-center': '',
        },
      },
    },
  },
  plugins: [],
  content: [
    './src/**/*.html',
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/styles.css', // Include your styles.css file here
  ],
}

