const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: 'babel-loader',
      },
    ],
  },

  // 配置路径解析
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],

    extensions: [
      '.wasm', '.mjs', '.js', '.json', 'jsx'
    ],
  },

  plugins: [
    new UglifyPlugin(),
    // 就算不配置，也会在--mode production中默认使用。
  ]
}