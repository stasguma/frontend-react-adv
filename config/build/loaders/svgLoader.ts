import type webpack from 'webpack';

export const svgLoader = (): webpack.RuleSetRule => {
  return {
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
};
