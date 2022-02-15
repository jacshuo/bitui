import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
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
        '@': '/src',
      },
    },
    css: {
      modules: {},
      preprocessorOptions: {},
    },
    plugins: [
      react({ include: '**/*.tsx' }),
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
  };
});
