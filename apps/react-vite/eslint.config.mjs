import tsPrefixer from 'eslint-config-ts-prefixer';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.mjs', '**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    plugins: {
      jsxA11y: jsxA11y,
      tsPrefixer: tsPrefixer,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
    rules: {
      'prettier/prettier': 'off',
      'import/order': 'off',
      'object-curly-spacing': 'off',
      '@babel/object-curly-spacing': 'off',
      'array-bracket-spacing': 'off',
      'spaced-comment': 'off',
      'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'unused-imports/no-unused-imports': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
  },
];
