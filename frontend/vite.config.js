import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:30025', // 👈 your backend NodePort service
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
