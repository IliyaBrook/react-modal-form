import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const isProduction = mode === 'production';
  return {
    root: isProduction ? undefined : 'stories',
    plugins: [
      react(),
      svgr({
        svgrOptions: {
          icon: true
        }
      }),
      viteTsconfigPaths(),
    ],
    server: {
      port: 3000
    },
    build: {
      lib: {
        entry: path.resolve('src/react-modal-form.ts'),
        name: 'react-modal-form',
        fileName: (format) => `react-modal-form.${format}.ts`
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React'
          }
        }
      }
    }
  }
})
