import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// TODO 这个eslint考虑删除
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@views': resolve(__dirname, './src/views'),
      '@components': resolve(__dirname, './src/components'),
      '@layouts': resolve(__dirname, './src/layouts'),
      '@router': resolve(__dirname, './src/router'),
      '@utils': resolve(__dirname, './src/utils'),
      '@hooks': resolve(__dirname, './src/hooks'),
    },
  },
  plugins: [vue()],
});
