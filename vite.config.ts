import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig, type Plugin } from 'vite-plus'

const FONT_PRELOADS = [
  '/fonts/bricolage-grotesque-v9-latin.woff2',
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
    '*.{ts,vue,scss,json,jsonc}': 'vp check --fix'
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/_index.scss" as *;'
      }
    }
  },
  define: {
    __VUE_I18N_FULL_INSTALL__: 'false'
  },
  plugins: [vue({ features: { optionsAPI: false } }), fontPreloads(), inlineCss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
