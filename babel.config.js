module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '#components': './src/components',
          '#containers': './src/containers',
          '#root': './src',
          '#store': './src/store',
          '#style': './src/style',
          '#views': './src/views'
        }
      }
    ]
  ],
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ]
};
