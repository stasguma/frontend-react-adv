import globals from 'globals';
import jsPlugin from '@eslint/js';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import i18nextPlugin from 'eslint-plugin-i18next';
import stylistic from '@stylistic/eslint-plugin';

const jsFiles = '**/*.?(*)js?(x)';
const tsFiles = '**/*.?(*)ts?(x)';
const reactFiles = '**/*.?(*){js,ts}x';
const testFiles = '**/*.test.{js,ts}?(x)';

export default [
  {
    ignores: ['**/node_modules/**', '**/*.d.ts', 'build'],
  },
  {
    files: [jsFiles, tsFiles, reactFiles],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.es2021,
        ...globals.browser,
        ...globals.node,
        __IS_DEV__: true,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      ...jsPlugin.configs.recommended.rules,
      ...stylistic.configs['disable-legacy'].rules,
      ...stylistic.configs['recommended-flat'].rules,
      // Overrides
      '@stylistic/semi': ['warn', 'always'],
      '@stylistic/member-delimiter-style': ['error', {
        singleline: { delimiter: 'semi', requireLast: true },
        multiline: { delimiter: 'semi', requireLast: true },
      }],
      '@stylistic/comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      }],
      '@stylistic/brace-style': ['error', '1tbs', {
        allowSingleLine: true,
      }],
    },
  },
  {
    files: [jsFiles],
    rules: {
      ...typescriptPlugin.configs['disable-type-checked'].rules,
    },
  },
  {
    files: [tsFiles],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      ...typescriptPlugin.configs['recommended-type-checked'].rules,
      ...typescriptPlugin.configs['stylistic-type-checked'].rules,
      // Overrides
      '@typescript-eslint/non-nullable-type-assertion-style': 'off',
      '@typescript-eslint/strict-boolean-expressions': ['error', {
        allowNullableBoolean: true,
      }],
      '@typescript-eslint/consistent-type-imports': ['error'],
    },
  },
  {
    files: [reactFiles],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react: reactPlugin,
      i18next: i18nextPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...i18nextPlugin.configs.recommended.rules,
    },
  },
  {
    files: [testFiles],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];
