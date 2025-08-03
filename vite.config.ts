import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, 'src') }],
  },

  server: {
    host: true,        // 👈 Expose to local network (phone)
    port: 5173,        // Optional: you can set a fixed port
  },
})
