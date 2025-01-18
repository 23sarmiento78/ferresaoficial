import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        productos: 'productos.html',
        admin: 'admin/index.html'
      }
    }
  },
  base: './'
});
