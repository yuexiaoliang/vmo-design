import { defineConfig } from 'vitest/config';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vueJsx({
      include: ['components/**/*.{jsx,tsx}']
    }),
    vue({
      include: ['components/**/*.vue']
    })
  ],
  build: {
    lib: {
      entry: '/components/index.ts',
      name: 'vmo-design',
      fileName: (name) => `lib.${name}.js`
    },
    cssCodeSplit: true
  },
  test: {}
});
