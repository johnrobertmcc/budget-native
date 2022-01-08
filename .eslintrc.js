module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
    allowImportExportEverywhere: true
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
    'no-console': ['off', {allow: ['warn', 'error']}],
    'prettier/prettier': 'error',
    'no-unused-vars': [
      'off',
      {vars: 'all', args: 'after-used', ignoreRestSiblings: false}
    ],
    'no-undef': ['off']
  }
};
