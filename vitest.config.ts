import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  define: {
  __IS_DEV__: true
  },
  plugins: [
    tsconfigPaths(),
    svgr({
      include: '**/**/*.svg',
      svgrOptions: {
        icon: true,
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
      }
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./config/vitest/setup.ts'],
    pool: 'forks',
    css: {
      modules: {
       classNameStrategy: 'non-scoped' 
      }
    },
    coverage: {
      reporter: ['text', 'html'],
    },
    include: ['src/**/*.test.{js,ts}?(x)'],
  },
});