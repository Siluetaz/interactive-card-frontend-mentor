import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/interactive-card-frontend-mentor/dist/',
  plugins: [vue()]
})
