/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import EnvironmentPlugin from 'vite-plugin-environment'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'REACT_APP_');
  return {
    define: {
      'process.env': env,
    },
    base: './',
    plugins: [react(), viteTsconfigPaths(), EnvironmentPlugin(['REACT_APP_'])],
    server: {
      host: true,
      port: 3000,
      proxy: {
        '/api': {
          target: 'https://localhost:7200',
          changeOrigin: true,
          secure: false,
        },
      },
    },
    preview: {
      port: 3000,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/testing/setup-tests.ts',
      exclude: ['**/node_modules/**', '**/e2e/**'],
      coverage: {
        include: ['src/**'],
      },
    },
    optimizeDeps: { exclude: ['fsevents'] },
    build: {
      sourcemap: true,
      emptyOutDir: true,
      rollupOptions: {
        external: ['fs/promises'],
        output: {
          experimentalMinChunkSize: 3500,
        },
      },
    },

    publicDir: 'public',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
