import { defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tailwindcss from 'tailwindcss'
import * as packageJson from './package.json'

export default defineConfig({
  plugins: [react(), dts({ include: ['lib'], insertTypesEntry: true })],
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
    lib: {
      entry: path.resolve(__dirname, 'lib/main.ts'),
      name: 'idc',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `idc.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.dependencies || {}), ...Object.keys(packageJson.peerDependencies || {})],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
