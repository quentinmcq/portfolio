import eslint from '@eslint/js'
import { defineConfig } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin'
import oxlint from 'eslint-plugin-oxlint'
import perfectionist from 'eslint-plugin-perfectionist'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'

export default defineConfig(
  { ignores: ['*.d.ts', 'dist'] },
  {
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...pluginVue.configs['flat/strongly-recommended'],
      stylistic.configs['recommended'],
      stylistic.configs['disable-legacy'],
      perfectionist.configs['recommended-natural'],
      ...oxlint.configs['flat/recommended'],
    ],
    files: ['**/*.{ts,vue}'],
    languageOptions: {
      globals: globals.browser,
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    plugins: {
      stylistic,
      ...oxlint.buildFromOxlintConfigFile('.oxlint.json'),
    },
    rules: {
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/quote-props': ['error', 'consistent'],
      '@stylistic/space-before-function-paren': ['error', {
        anonymous: 'never',
        named: 'never',
      }],
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': 'off',
    },
  },
)
