import type webpack from 'webpack';
import path from 'path';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';

import {
  type IBuildEnvironment,
  type IBuildPaths,
  type TBuildMode,
} from './config/build/types/config';

export default (env: IBuildEnvironment): webpack.Configuration => {
  const mode: TBuildMode = env.development ? 'development' : 'production';

  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    htmlTemplate: path.resolve(__dirname, 'public', 'index.html'),
    devServer: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src'),
  };

  const PORT = env.port ?? 8080;

  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    port: PORT,
    isDev,
  });

  return config;
};
