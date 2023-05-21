export default {
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
  plugins: [
    'import', 
    'react', 
    'react-hooks', 
    'jsx-a11y', 
    '@typescript-eslint', 
  ],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/react',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  rules: {
    // General rules
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'no-undef': 'error',
    'no-extra-semi': 'warn',
    'no-unreachable': 'warn',
    'no-prototype-builtins': 'off',

    // React rules
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-curly-brace-presence': ['warn', 'never'],
    'react/jsx-closing-bracket-location': 'warn',
    'react/self-closing-comp': 'warn',
    'react/jsx-wrap-multilines': 'warn',
    'react/jsx-fragments': ['warn', 'element'],
    'react/jsx-indent': ['warn', 4, { checkAttributes: true }],
    'react/jsx-indent-props': ['warn', 2],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};