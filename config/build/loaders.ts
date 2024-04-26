import type webpack from 'webpack';
import { type IBuildOptions } from './types/config';

import { cssLoader as initCssLoader } from './loaders/cssLoader';
import { svgLoader as initSvgLoader } from 'config/build/loaders/svgLoader';

export const loaders = function (
  options: IBuildOptions
): webpack.RuleSetRule[] {
  const { isDev } = options;

  const fontLoader = {
    test: /\.(woff2|woff)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'fonts/[name][ext]',
    },
  };

  const imageLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'images/[name][ext]',
    },
  };

  const svgLoader = initSvgLoader();

  const babelLoader = {
    test: /\.(js|ts)(x)?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  };
  const typescriptLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  };

  const cssLoader = initCssLoader({ isDev });

  return [
    fontLoader,
    imageLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader,
  ];
};
