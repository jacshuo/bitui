import react from '@vitejs/plugin-react';

const path = require('path');
import { defineConfig, loadEnv } from 'vite';
import dts from 'vite-dts';
import { createHtmlPlugin } from 'vite-plugin-html';
import tsconfigPaths from 'vite-tsconfig-paths';
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log(command, mode);
  return {
    server: {
      proxy: {},
    },
    resolve: {
      alias: {
        '@': '/src/lib',
        '@demo': '/src/demo',
      },
    },
    css: {
      modules: {},
      preprocessorOptions: {},
    },
    plugins: [
      dts(),
      react(),
      tsconfigPaths(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: loadEnv(mode, process.cwd())['VITE_APP_TITLE'],
          },
        },
      }),
    ],
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/lib/index.ts'),
        name: 'bitui',
        formats: ['iife', 'umd', 'es'],
        fileName: (format) => `bitui.${format}.js`,
      },
      cssCodeSplit: true,
      manifest: true,
      rollupOptions: {
        external: ['react', 'react-dom', 'react-router-dom'],
        output: {
          globals: {
            react: 'React',
          },
          // sourcemapExcludeSources: true,
        },
      },
      sourcemap: false,
      target: 'esnext',
    },
  };
});
