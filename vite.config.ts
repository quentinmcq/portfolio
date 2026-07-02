import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig, type Plugin } from 'vite-plus'

// Build-only: on the dev server the @font-face rules arrive through the JS
// module graph seconds after boot, so an eager preload sits unused long
// enough for browsers to warn about it. In the production HTML the CSS is
// inlined in <head> and the preloads are consumed immediately.
const FONT_PRELOADS = [
  '/fonts/fraunces-v38-latin.woff2',
  '/fonts/fraunces-italic-v38-latin.woff2',
  '/fonts/inter-tight-v9-latin.woff2',
  '/fonts/jetbrains-mono-v24-latin.woff2'
]

function fontPreloads(): Plugin {
  return {
    name: 'portfolio:font-preloads',
    apply: 'build',
    transformIndexHtml() {
      return FONT_PRELOADS.map((href) => ({
        tag: 'link',
        attrs: { rel: 'preload', as: 'font', type: 'font/woff2', href, crossorigin: true },
        injectTo: 'head'
      }))
    }
  }
}

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
          (a) => a.type === 'asset' && a.fileName.endsWith('.css')
        )
        if (!css || css.type !== 'asset') return html
        const source = typeof css.source === 'string' ? css.source : css.source.toString()
        delete bundle[css.fileName]
        return html.replace(
          /<link rel="stylesheet"[^>]*href="[^"]*\.css"[^>]*>/,
          `<style>${source}</style>`
        )
      }
    }
  }
}

export default defineConfig({
  fmt: {
    semi: false,
    singleQuote: true,
    trailingComma: 'none'
  },
  lint: {
    jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
    rules: {
      'vite-plus/prefer-vite-plus-imports': 'error'
    },
    options: {
      typeAware: true,
      typeCheck: true
    }
  },
  staged: {
    '*.{ts,mts,cts,js,mjs,cjs,vue,scss,css,json,jsonc}': 'vp check --fix'
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/_index.scss" as *;'
      }
    }
  },
  define: {
    __VUE_OPTIONS_API__: 'false',
    __VUE_I18N_FULL_INSTALL__: 'false',
    __VUE_I18N_LEGACY_API__: 'false',
    __VUE_I18N_PROD_DEVTOOLS__: 'false',
    __INTLIFY_PROD_DEVTOOLS__: 'false'
  },
  plugins: [vue(), fontPreloads(), inlineCss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
