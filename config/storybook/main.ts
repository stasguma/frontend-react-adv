import type { StorybookConfig } from '@storybook/react-webpack5';
import type { RuleSetRule } from 'webpack';

import path from 'path';

import { cssLoader } from '../build/loaders/cssLoader';
import { svgLoader } from '../build/loaders/svgLoader';

const config: StorybookConfig = {
  stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    { name: '@storybook/addon-styling-webpack',
      options: {
        rules: [cssLoader({ isDev: true })],
      },
    },
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: (config) => {
    // console.log('plugins', config.plugins[2].definitions)
    /* added global variable */
    config.plugins[2].definitions.__IS_DEV__ = true;

    /* added aliases */
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../../src'),
      };
    }

    /* lets the svg components work https://github.com/storybookjs/storybook/issues/18557 */
    const rules = config?.module?.rules as RuleSetRule[];
    const imageRule = rules.find(
      rule => rule?.test instanceof RegExp && rule.test.test('.svg')
    );
    if (imageRule) {
      imageRule.exclude = /\.svg$/;
    }
    rules.push(svgLoader());

    return config;
  },
};
export default config;
