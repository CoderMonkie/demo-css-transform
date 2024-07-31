import { defineConfig } from 'vite';

const isProd = process.env.NODE_ENV === 'production';
console.log('isProd', isProd);

export default defineConfig({
  server: {
    port: 30001,
  },
  base: isProd ? '/demo-css-transform/' : '',
});