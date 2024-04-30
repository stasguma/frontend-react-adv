import type webpack from 'webpack';
import type { IBuildEnvironment, IBuildPaths, TBuildMode } from './config/build/types/config';
import path from 'path';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: IBuildEnvironment): webpack.Configuration => {
  const mode: TBuildMode = env.development ? 'development' : 'production';
  const isDev = mode === 'development';
  const publicPath = env.assetPath ?? '/';
  const PORT = env.port ?? 8080;

  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'app', 'appEntry.tsx'),
    output: path.resolve(__dirname, 'build'),
    htmlTemplate: path.resolve(__dirname, 'public', 'index.html'),
    devServer: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src'),
    publicPath
  };


  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    port: PORT,
    isDev,
  });

  return config;
};
