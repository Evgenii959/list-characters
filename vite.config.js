import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
export default defineConfig({
  base: '/list-characters/',
  plugins: [createVuePlugin()],
  server: {
    port: 8080,
  },
});
