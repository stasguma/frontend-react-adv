
import globals from 'globals';
import jsPlugin from '@eslint/js';
import tseslint  from 'typescript-eslint';
// import typescriptPlugin from '@typescript-eslint/eslint-plugin';
// import typescriptParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import i18nextPlugin from 'eslint-plugin-i18next';
import stylistic from '@stylistic/eslint-plugin';
import jestDomPlugin from 'eslint-plugin-jest-dom';
import storybookPlugin from 'eslint-plugin-storybook';
import vitestPlugin from 'eslint-plugin-vitest';

// console.log('jestDomPlugin: ', jestDomPlugin.configs["flat/recommended"]);
// console.log('react recommended: ', reactPlugin.configs.recommended);
// console.log('reactHooksPlugin: ', reactHooksPlugin.configs.recommended);

const jsFiles = '**/*.?(*)js?(x)';
const tsFiles = '**/*.ts?(x)'; // ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts']
const reactFiles = '**/*.{js,ts}x';
const testFiles = ['**/*.{test,spec}.{js,ts}?(x)', 'config/vitest/**', '**/shared/lib/tests/*.{js,ts}?(x)'];
const storybookFiles = ['**/*.{stories,story}.@(ts|tsx|js|jsx|mjs|cjs)', '**/storybook/main.@(js|cjs|mjs|ts)'];

export default tseslint.config(
  {
    ignores: [
      '**/node_modules/**',
      '**/*.d.ts',
      'build',
      'src/app/styles',
      '**/.*',
      '**/.*.{js,ts}',
      '**/*.config.{js,ts}',
      'config/vitest/setup.ts',
      'vitest.config.ts',
      'storybook-static'
    ],
  },
  {
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
    files: [tsFiles],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
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
      "@typescript-eslint/no-misused-promises": [2, {
        "checksVoidReturn": {
          "attributes": false
        }
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
      react: reactPlugin, // https://github.com/jsx-eslint/eslint-plugin-react/pull/3727
      'react-hooks': reactHooksPlugin, // https://github.com/facebook/react/pull/28773
      i18next: i18nextPlugin, // https://github.com/edvardchen/eslint-plugin-i18next/issues
    },
    rules: {
      // ...reactRecommended.rules,
      // ...reactJsxRuntime.rules,
      // ...reactHooksPlugin.configs.recommended.rules,
      // ...i18nextPlugin.configs.recommended.rules,
      // override
      '@stylistic/jsx-max-props-per-line': [1, {
        "maximum": { single: 2, multi: 1 }
      }],
      'react/prop-types': 'off',
    },
  },
  {
    files: [...testFiles],
    languageOptions: {
      globals: {
        ...vitestPlugin.environments.env.globals,
      },
    },
    // ...jestDomPlugin.configs["flat/recommended"],
    plugins: {
      // ...jestDomPlugin.configs["flat/recommended"].plugins,
      // 'jest-dom': jestDomPlugin, https://github.com/testing-library/eslint-plugin-jest-dom/issues
      vitest: vitestPlugin,
    },
    rules: {
      // ...jestDomPlugin.configs["flat/recommended"].rules,
      ...vitestPlugin.configs.recommended.rules,
      // overrides
      'i18next/no-literal-string': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-unsafe-call': 'off'
    },
  },
  // {
  //   files: [storybookFiles[0]],
  //   plugins: {
  //     storybook: storybookPlugin,
  //   },
  //   rules: {
  //     ...storybookPlugin.configs.recommended.overrides[0].rules,
  //     'i18next/no-literal-string': 'off',
  //   },
  // },
  // {
  //   files: [storybookFiles[1]],
  //   plugins: {
  //     storybook: storybookPlugin,
  //   },
  //   rules: {
  //     ...storybookPlugin.configs.recommended.overrides[1].rules,
  //   },
  // },
);
