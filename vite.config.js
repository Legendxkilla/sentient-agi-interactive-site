// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // Optional: add any React plugin options here
      // jsxRuntime: 'automatic',
    })
  ],
  server: {
    port: 3000,
    open: true,      // Launch browser on `npm run dev`
  },
  build: {
    outDir: 'dist',
    sourcemap: true, // Optional: generate source maps
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
