module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:jsdoc/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  plugins: ['jsdoc', 'prettier'],
  rules: {
    'import/prefer-default-export': 'off',
    'func-style': ['error', 'declaration'],
    'jsdoc/check-line-alignment': [
      'warn',
      'always',
      {
        tags: ['param', 'return']
      }
    ],
    'jsdoc/require-param': [
      'warn',
      {
        checkRestProperty: true,
        unnamedRootBase: ['props']
      }
    ],
    'jsx-a11y/anchor-is-valid': 'off',
    'no-console': ['error', {allow: ['warn', 'error']}],
    'prettier/prettier': 'error'
  }
};
