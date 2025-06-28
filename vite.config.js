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
    },
  },
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
})