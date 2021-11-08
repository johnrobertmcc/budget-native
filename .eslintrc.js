module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    '@next/next/no-img-element': 'off',
    'func-style': ['error', 'declaration'],
    'jsdoc/check-indentation': 'warn',
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
    'jsdoc/check-values': [
      'warn',
      {
        allowedAuthors: ['WebDevStudios']
      }
    ],
    'jsx-a11y/anchor-is-valid': 'off',
    'no-console': ['error', {allow: ['warn', 'error']}],
    'prettier/prettier': 'error'
  }
};
