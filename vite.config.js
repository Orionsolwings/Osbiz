import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/Components'),
      '@layout': resolve(__dirname, 'src/Layout'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@service': resolve(__dirname, 'src/Service'),
    },
  },
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "node_modules/preline/dist/*.js",
],
server: {
    host: true, // important for external access
    allowedHosts: ['a92a-2402-3a80-1941-d8dc-6878-37af-8597-2834.ngrok-free.app'],
    proxy: {
      '/osbiz-backend-orionsolwings': {
        target: 'http://localhost:8082',
        changeOrigin: true,
        secure: false
      }
    }
  }
})