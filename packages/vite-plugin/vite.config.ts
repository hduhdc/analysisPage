import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: ['src/index.ts'],
      formats: ['cjs', 'es'],
      fileName: '[name]',
      name: 'ViteCodeCommentsAnalysisPlugin',
    },
    minify: true,
    emptyOutDir: true,
    rollupOptions: {
      external: ['code-comments-analysis-core', 'path'],
    },
    target: ['node8', 'es2015'],
  },
});
