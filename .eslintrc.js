module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'jsx-a11y'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'import/prefer-default-export': 'off',
    'label-has-associated-control': 'off',
    'jsx-a11y/no-redundant-roles': [
      'error',
      {
        nav: ['navigation'],
      },
    ],
    'jsx-a11y/label-has-for': [
      'off',
      {
        components: [],
        required: {
          every: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],
  },
};
