// @ts-check
import eslint from '@eslint/js'
// @ts-expect-error missing types
// import pluginVue from 'eslint-plugin-vue'
import stylistic from '@stylistic/eslint-plugin'
// import vueParser from 'vue-eslint-parser'
import tseslint from 'typescript-eslint'
// @ts-expect-error missing types
import perfectionist from 'eslint-plugin-perfectionist'

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  // ...pluginVue.configs['flat/strongly-recommended'],
  stylistic.configs['recommended-flat'],
  stylistic.configs['disable-legacy'],
  {
    languageOptions: {
      // parser: vueParser,
      // parserOptions: {
      //   project: true,
      //   tsconfigRootDir: import.meta.dirname,
      // },
    },
    plugins: {
      perfectionist,
      stylistic,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': 'off',
      'perfectionist/sort-objects': 'error',
      'stylistic/comma-dangle': ['error', 'always-multiline'],
      'stylistic/object-curly-spacing': ['error', 'always'],
      'stylistic/quote-props': ['error', 'consistent'],
      'stylistic/space-before-function-paren': ['error', {
        anonymous: 'never',
        named: 'never',
      }],
    },
  },
]
