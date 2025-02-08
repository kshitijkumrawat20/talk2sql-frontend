import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// For production deployment on Vercel:
// 1. Set VITE_API_URL environment variable in Vercel project settings
// 2. Use import.meta.env.VITE_API_URL in code to access the backend URL
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
})
