import globals from 'globals';
import jsPlugin from '@eslint/js';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import i18nextPlugin from 'eslint-plugin-i18next';
import stylistic from '@stylistic/eslint-plugin';
import jestDom from 'eslint-plugin-jest-dom';
import storybookPlugin from 'eslint-plugin-storybook';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

// console.log(reactHooksPlugin.configs.recommended);

const jsFiles = '**/*.?(*)js?(x)';
const tsFiles = '**/*.?(*)ts?(x)';
const reactFiles = '**/*.?(*){js,ts}x';
const testFiles = '**/*.{test,spec}.{js,ts}?(x)';
const storybookFiles = ['**/*.{stories,story}.@(ts|tsx|js|jsx|mjs|cjs)', '**/storybook/main.@(js|cjs|mjs|ts)'];

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/*.d.ts',
      'build',
      'src/app/styles',
      '**/.*',
      '**/.*.{js,ts}',
      '**/*.config.{js,ts}',
      '**/jest-setup.ts',
      'storybook-static'
    ],
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
        DeepPartial: true
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
        allowNullableString: true,
        allowNullableBoolean: true,
      }],
      '@typescript-eslint/consistent-type-imports': ['error'],
      '@typescript-eslint/array-type': ['error', {
        default: 'array-simple'
      }],
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
      'react-hooks': reactHooksPlugin,
      i18next: i18nextPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...i18nextPlugin.configs.recommended.rules,
      // override
      '@stylistic/jsx-max-props-per-line': [1, {
        "maximum": { single: 2, multi: 1 }
      }],
      'react/prop-types': 'off',
    },
  },
  {
    files: [testFiles, '**/jest-setup.ts', '**/TestAsyncThunk.ts'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    settings: {
      jest: {
        version: 29,
      },
    },
    plugins: {
      'jest-dom': jestDom,
    },
    rules: {
      ...jestDom.configs.recommended.rules,
      'i18next/no-literal-string': 'off',
      '@typescript-eslint/unbound-method': 'off',
    },
  },
  {
    files: [storybookFiles[0]],
    plugins: {
      storybook: storybookPlugin,
    },
    rules: {
      ...storybookPlugin.configs.recommended.overrides[0].rules,
      'i18next/no-literal-string': 'off',
    },
  },
  {
    files: [storybookFiles[1]],
    plugins: {
      storybook: storybookPlugin,
    },
    rules: {
      ...storybookPlugin.configs.recommended.overrides[1].rules,
    },
  },
];
