module.exports = function (api) {
  api.cache(true);
  const rootImportOpts = {
    paths: [
      {
        root: '/home/johnrobertmcc/Documents/react_native/budget-by-jr',
        rootPathPrefix: '~/',
        rootPathSuffix: '.'
      }
    ]
  };

  return {
    presets: ['babel-preset-expo'],
    plugins: [['babel-plugin-root-import', rootImportOpts]]
  };
};
