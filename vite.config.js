import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { mtConfig } from "@material-tailwind/react";

// https://vite.dev/config/
export default defineConfig({
  content: [
    
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}"
  ],
  plugins: [react(),tailwindcss(),mtConfig],
})
