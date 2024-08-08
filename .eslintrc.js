module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:i18next/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    'i18next/no-literal-string': [
      2,
      {
        markupOnly: true,
        onlyAttribute: ['']
      }
    ],
    semi: [2, 'always'],
    'linebreak-style': [2, 'windows'],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.tsx']
      }
    ],
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': 0,
    'jsx-quotes': [2, 'prefer-single'],
    'import/extensions': 0,
    'comma-dangle': [2, 'never'],
    'no-unused-vars': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 1,
    'no-shadow': 0,
    'max-len': [
      2,
      120,
      {
        ignoreComments: true
      }
    ],
    'import/no-extraneous-dependencies': 0,
    'arrow-parens': ['error', 'as-needed'],
    'arrow-body-style': ['error', 'as-needed'],
    'implicit-arrow-linebreak': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_'
      }
    ],
    'no-underscore-dangle': 0,
    'object-curly-newline': 0,
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ]
  },
  globals: {
    __IS_DEV__: true
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 0
      }
    }
  ]
};
