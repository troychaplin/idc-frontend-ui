/// <reference types="vitest/config" />
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import type { PluginOption } from 'vite';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { fileURLToPath } from 'node:url';

import * as packageJson from './package.json';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// Only include DTS plugin when building the library
const plugins: PluginOption[] = [react()];

// Add DTS plugin only when not in Storybook mode
if (process.env.STORYBOOK !== 'true') {
    plugins.push(
        dts({
        include: ['src'],
        exclude: ['src/**/*.stories.*', 'src/**/*.test.*'],
        insertTypesEntry: true,
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
    plugins: [tailwindcss(), ...plugins],
    css: {
        postcss: {},
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
        entry: path.resolve(__dirname, 'src/main.ts'),
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
            return assetInfo.name || 'asset';
            },
        },
        },
    },
    test: {
        projects: [{
        extends: true,
        plugins: [
            storybookTest({
            configDir: path.join(dirname, '.storybook')
            })
        ],
        test: {
            name: 'storybook',
            browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [{
                browser: 'chromium'
            }]
            },
            setupFiles: ['.storybook/vitest.setup.ts']
        }
        }]
    }
});