module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@stylistic/disable-legacy',
  ],
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
