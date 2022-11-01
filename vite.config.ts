import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';

// TODO 这个eslint考虑删除
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path');
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [vue(), WindiCSS()],
});
