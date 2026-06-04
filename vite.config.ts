import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig, type Plugin } from 'vite-plus'

function inlineCss(): Plugin {
  return {
    name: 'portfolio:inline-css',
    enforce: 'post',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        const bundle = ctx.bundle
        if (!bundle) return html
        const css = Object.values(bundle).find(
          (a) => a.type === 'asset' && a.fileName.endsWith('.css'),
        )
        if (!css || css.type !== 'asset') return html
        const source = typeof css.source === 'string' ? css.source : css.source.toString()
        delete bundle[css.fileName]
        return html.replace(
          /<link rel="stylesheet"[^>]*href="[^"]*\.css"[^>]*>/,
          `<style>${source}</style>`,
        )
      },
    },
  }
}

export default defineConfig({
  fmt: {
    semi: false,
    singleQuote: true,
  },
  lint: {
    jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
    rules: {
      'vite-plus/prefer-vite-plus-imports': 'error',
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  staged: {
    '*.{ts,mts,cts,js,mjs,cjs,vue,scss,css,json,jsonc}': 'vp check --fix',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/_index.scss" as *;',
      },
    },
  },
  define: {
    __VUE_OPTIONS_API__: 'false',
    __VUE_I18N_FULL_INSTALL__: 'false',
    __VUE_I18N_LEGACY_API__: 'false',
    __VUE_I18N_PROD_DEVTOOLS__: 'false',
    __INTLIFY_PROD_DEVTOOLS__: 'false',
  },
  plugins: [vue(), inlineCss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
