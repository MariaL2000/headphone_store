import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss() 
  ],
  optimizeDeps: {
    include: ["gsap", "gsap/react", "gsap/all"], // 👈 fuerza a Vite a resolver gsap/react
  },
})
