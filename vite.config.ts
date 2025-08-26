import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import type { MinifyOptions } from 'terser';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      } as MinifyOptions,
    },
    sourcemap: true,
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('zustand')) return 'zustand-vendor';
            return 'vendor';
          }
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'tailwind-variants', 'tailwind-merge'],
    exclude: [],
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@app': resolve(__dirname, './src/app'),
      '@features': resolve(__dirname, './src/features'),
      '@shared': resolve(__dirname, './src/shared'),
    },
  },
  logLevel: 'info',
});
