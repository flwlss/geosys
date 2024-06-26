import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    // eslintPlugin({
    //   cache: false,
    //   include: ['./src/**/*.js', './src/**/*.tsx'],
    //   exclude: [/virtual:/, /node_modules/],
    // }),
  ],
});
