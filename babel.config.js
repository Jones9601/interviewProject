module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          /**
           * Regular expression is used to match all files inside `./src` directory and map each `.src/folder/[..]` to `~folder/[..]` path
           */
          '@src': './src',
          '@modules': './src/modules',
          '@core-components': './src/core-components',
          '@core-services': './src/core-services',
          '@core-stores': './src/core-stores',
          '@core-utils': './src/core-utils',
          '@core-navigations': './src/core-navigations',
          '@core-plugins': './src/core-plugins',
          '@i18n': './src/i18n',
          '@theme': './src/theme',
          '@assets': './assets/',
          '@core-providers': './src/core-providers',
          '@core-constants': './src/core-constants',
        },
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
      },
    ],
  ],
  sourceMaps: true,
};
