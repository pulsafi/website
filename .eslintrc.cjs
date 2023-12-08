module.exports = {
  extends: ['mantine', 'plugin:@next/next/recommended', 'plugin:jest/recommended'],
  plugins: ['testing-library', 'jest'],
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'import/order': 'off',
    'import/no-duplicates': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
};
