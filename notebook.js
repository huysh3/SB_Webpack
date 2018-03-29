const UglifyPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  // loader，将其他格式文件转换为js代码，方便打包运行
  rules: [
    {
      test: /\.jsx?/, //匹配jsx文件
      includes: [
        path.resolve(__dirname, 'src') // 指定该路径下文件需要该loader处理
      ],
      use: 'babel-loader', // 指定loader
    },
  ],

  // plugin, 用于处理更多其他的一些构建任务。
  // 代码转换由loader执行，其他所有plugin可以全包
  // 如uglify
  // 以及定义环境变量的DefinePlugin, 生成CSS文件的ExtractTextWebpackPlugin等
  plugins: [
    new UglifyPlugin()
  ],

  // output，输出，可配置文件名和路径等
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
}

// 配置等同于
module.exports = {
  entry: {
    main: './src/index.js'
  }
}

// 多入口
module.exports = {
  entry: {
    foo: './src/foo.js',
    bar: './src/bar.js',
  },

  output: {
    path: __dirname + '/dist',
    filename: '[name].[hash].js', // 可加版本号等
  }
}

// 数组多文件打包
module.exports = {
  entry: {
    main: [
      './src/foo.js',
      './src/bar.js'
    ]
  }
}