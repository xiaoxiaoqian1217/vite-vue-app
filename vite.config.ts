import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';

// TODO 这个eslint考虑删除
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path');
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log(loadEnv(mode, process.cwd()));

  return {
    resolve: {
      alias: {
        '@/': `${resolve(__dirname, 'src')}/`,
      },
    },
    base: loadEnv(mode, process.cwd())?.VITE_APP_BASE_URL,
    plugins: [vue(), WindiCSS()],
  };
});
