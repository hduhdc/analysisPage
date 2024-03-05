import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: ['src/index.ts'],
      formats: ['umd', 'es'],
      fileName: '[name]',
      name: 'WebpackCodeCommentsAnalysisPlugin',
    },
    minify: true,
    emptyOutDir: true,
    rollupOptions: {
      external: ['code-comments-analysis-core', '@vue/compiler-sfc', 'path'],
      output: {
        exports: 'default', // 设置默认导出
      },
    },
    target: ['node8', 'es2015'],
  },
});
