import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/my-portfolio/',
  server: {
    port: 3000,
    host: true},
  plugins: [
    tailwindcss(),
  ],
})
