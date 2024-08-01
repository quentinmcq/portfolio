import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import perfectionist from 'eslint-plugin-perfectionist'
import pluginVue from 'eslint-plugin-vue'
import typegen from 'eslint-typegen'
import tseslint from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'

export default typegen([
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/strongly-recommended'],
  stylistic.configs['recommended-flat'],
  stylistic.configs['disable-legacy'],
  perfectionist.configs['recommended-natural'],
  {
    ignores: ['dist'],
  },
  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
      },
    },
    plugins: {
      stylistic,
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
      'perfectionist/sort-vue-attributes': 'off',
    },
  },
])
