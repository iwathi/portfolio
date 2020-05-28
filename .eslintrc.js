module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    "jest": true
  },
  parser:  'vue-eslint-parser',
  parserOptions: {
    'parser': '@typescript-eslint/parser',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: [
    'vue',
    'prettier'
  ],
  // add your custom rules here
  rules: {
    //'vue/singleline-html-element-content-newline': 'off',
    'vue/require-component-is': 'off',
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
        },
      }
    ],
    'prettier/prettier': [
      'error',
      {
        htmlWhitespaceSensitivity: 'ignore',
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
      },
    ],
  }
}
