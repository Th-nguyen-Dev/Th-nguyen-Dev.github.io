import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/th-nguyen-dev.github.io",
  plugins: [react()],
})
