import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'pages': path.resolve(__dirname, 'src/pages/index.ts'),
      'utils': path.resolve(__dirname, 'src/utils/index.js'),
      'styles': path.resolve(__dirname, 'src/styles/index.js'),
    },
  },
})
