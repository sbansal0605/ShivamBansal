import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** GitHub Pages project site — use any `vite build` (not only `mode: production`). */
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/ShivamBansal/' : '/',
  plugins: [react(), tailwindcss()],
}))
