import { defineConfig } from 'vite';
import path from 'node:path';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';
import { visualizer } from 'rollup-plugin-visualizer';
import * as packageJson from './package.json';
import type { PluginOption } from 'vite';

// Only include DTS plugin when building the library
const plugins: PluginOption[] = [react()];

// Add DTS plugin only when not in Storybook mode
if (process.env.STORYBOOK !== 'true') {
  plugins.push(
    dts({
      include: ['lib'],
      insertTypesEntry: true,
      rollupTypes: true,
    })
  );
}

// Add visualizer only in analyze mode
if (process.env.ANALYZE === 'true') {
  plugins.push(
    visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
      template: 'treemap',
    })
  );
}

export default defineConfig({
  plugins,
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    },
  },
  build: {
    copyPublicDir: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'lib/main.ts'),
      name: 'idc',
      formats: ['es', 'cjs', 'umd'],
      fileName: format => `idc.${format}.js`,
    },
    rollupOptions: {
      external: [
        ...Object.keys(packageJson.dependencies || {}),
        ...Object.keys(packageJson.peerDependencies || {}),
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: assetInfo => {
          if (assetInfo.name === 'style.css') return 'idc.css';
          return assetInfo.name;
        },
      },
    },
  },
});
