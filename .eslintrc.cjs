module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json', // Path to your tsconfig.json file
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: ['import', 'react', 'react-hooks', 'jsx-a11y','@typescript-eslint'],
  extends: ['airbnb'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};