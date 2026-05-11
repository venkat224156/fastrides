import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about-us/index.html'),
        rentals: resolve(__dirname, 'our-rentals/index.html'),
        contact: resolve(__dirname, 'contact-us/index.html')
      }
    }
  }
});
