module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    'plugin:@stylistic/disable-legacy'
  ],
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    '@stylistic'
  ],
  rules: {
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'no-console': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any'
        }
      }
    ]
  }
};
