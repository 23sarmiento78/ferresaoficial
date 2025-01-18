import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        productos: 'productos.html'
      }
    }
  },
  server: {
    open: true,
    port: 3000
  },
  base: './',
  publicDir: 'public',
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
