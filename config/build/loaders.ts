import type webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { type IBuildOptions } from './types/config';

export const loaders = function (
  options: IBuildOptions
): webpack.RuleSetRule[] {
  const { isDev } = options;

  const fontLoader = {
    test: /\.(woff|woff2)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'fonts/[path][name][ext]',
    },
  };

  const imageLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'images/[path][name][ext]',
    },
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [
              {
                name: 'prefixIds',
                params: {
                  delim: '',
                  prefix: '',
                  prefixIds: false,
                  prefixClassNames: false,
                },
              },
              {
                name: 'cleanupIds',
                params: {
                  remove: false,
                  minify: false,
                },
              },
            ],
          },
        },
      },
    ],
  };

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

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module\.(sass|scss|css)$/i,
            localIdentName: isDev
              ? '[local]--[hash:base64:4]'
              : '[hash:base64:8]',
          },
        },
      },
      { loader: 'sass-loader' },
    ],
  };

  return [
    fontLoader,
    imageLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader,
  ];
};
