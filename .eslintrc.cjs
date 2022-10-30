/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],
  //plugins: ['prettier', 'vue'],
  rules: {
    semi: [2, 'always'],
    'no-console': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any'
        }
      }
    ],
    'vue/custom-event-name-casing': 'off',
    'vue/multi-word-component-names': 'off'
  }
};
