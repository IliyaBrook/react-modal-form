import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import viteTsconfigPaths from 'vite-tsconfig-paths'

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
    }
  }
})
