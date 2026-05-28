import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const pageRoutes = new Set(['/about-us', '/our-fleet', '/contact-us']);

function redirectDirectoryRoutes(server) {
  server.middlewares.use((req, res, next) => {
    const url = req.url?.split('?')[0];
    if (pageRoutes.has(url)) {
      res.statusCode = 302;
      res.setHeader('Location', url + '/');
      res.end();
      return;
    }
    next();
  });
}

export default defineConfig({
  server: {
    allowedHosts: ['.ngrok-free.dev', '.ngrok-free.app', '.ngrok.io']
  },
  preview: {
    allowedHosts: ['.ngrok-free.dev', '.ngrok-free.app', '.ngrok.io']
  },
  plugins: [{
    name: 'directory-route-redirects',
    configureServer: redirectDirectoryRoutes,
    configurePreviewServer: redirectDirectoryRoutes
  }],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about-us/index.html'),
        fleet: resolve(__dirname, 'our-fleet/index.html'),
        contact: resolve(__dirname, 'contact-us/index.html')
      }
    }
  }
});
