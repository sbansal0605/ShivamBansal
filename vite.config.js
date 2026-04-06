import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** Production base for GitHub Pages: https://sbansal0605.github.io/ShivamBansal/ */
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/ShivamBansal/' : '/',
  plugins: [react(), tailwindcss()],
}))
