/* global module */

module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es2022: true,
    browser: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  root: true,

  plugins: [
    '@typescript-eslint',
    'eslint-plugin-html',
    'eslint-plugin-optional-comma-spacing',
    'eslint-plugin-require-trailing-comma',
  ],
  extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  rules: {
    'brace-style': [2, '1tbs', { allowSingleLine: false }],
    camelcase: [0],
    'comma-dangle': 0,
    'comma-spacing': 0,
    'comma-style': [2, 'last'],
    'consistent-return': 2,
    curly: [2, 'all'],
    'dot-notation': 0,
    'eol-last': [0],
    eqeqeq: 2,
    'global-strict': [0],
    'key-spacing': [0],
    'keyword-spacing': [1, { before: true, after: true, overrides: {} }],
    'new-cap': 2,
    'new-parens': 2,
    'no-alert': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-catch-shadow': 2,
    'no-comma-dangle': [0],
    'no-const-assign': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-parens': [2, 'functions'],
    'no-implied-eval': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-spaces': [0],
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-obj-calls': 2,
    'no-octal-escape': 2,
    'no-process-exit': 2,
    'no-proto': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-shadow': [0],
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-undef-init': 2,
    //'no-undef': 2, // ts recommends this be off: https://typescript-eslint.io/linting/troubleshooting
    'no-underscore-dangle': 2,
    'no-unreachable': 2,
    'no-unused-expressions': 2,
    'no-use-before-define': 0,
    'no-var': 2,
    'no-with': 2,
    'one-var': ["error", "never"],
    'optional-comma-spacing/optional-comma-spacing': [2, { after: true }],
    'prefer-const': 2,
    'require-trailing-comma/require-trailing-comma': [2],
    'semi-spacing': [2, { before: false, after: true }],
    semi: [2, 'always'],
    'space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-infix-ops': 2,
    'space-unary-ops': [2, { words: true, nonwords: false }],
    strict: [2, 'function'],
    yoda: [2, 'never'],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off', // TODO: Reenable this and figure out how to fix code.
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 2,
  },
};
