import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'pages': path.resolve(__dirname, 'src/pages/index.ts'),
      'components': path.resolve(__dirname, 'src/components/index.ts'),
      'config': path.resolve(__dirname, 'src/config/index.ts'),
      'constants': path.resolve(__dirname, 'src/constants/index.ts'),
      'helpers': path.resolve(__dirname, 'src/helpers/index.ts'),
      'hooks': path.resolve(__dirname, 'src/hooks/index.ts'),
      'recoil': path.resolve(__dirname, 'src/recoil/index.ts'),
      'services': path.resolve(__dirname, 'src/services/index.ts'),
      'shared': path.resolve(__dirname, 'src/shared/index.ts'),
      'utils': path.resolve(__dirname, 'src/utils/index.ts'),
      'assets': path.resolve(__dirname, 'src/assets/index.ts'),
      'styles': path.resolve(__dirname, 'src/styles/index.ts'),
    },
  },
})
