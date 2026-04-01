import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Project Pages: set VITE_BASE_URL=/your-repo-name/ when building
// User site (username.github.io): use VITE_BASE_URL=/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_URL || '/',
})
