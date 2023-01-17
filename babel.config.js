// eslint-disable-next-line no-undef
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    plugins: [
      '@babel/transform-react-jsx-source',
      '@babel/plugin-transform-modules-commonjs',
      'babel-plugin-transform-typescript-metadata',
      'react-native-reanimated/plugin',
    ]
  };
};
