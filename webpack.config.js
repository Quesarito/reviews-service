module.exports = {
  mode: 'development',
  entry: './client/index.jsx',
  output: {
    path: __dirname + '/public',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/, 
        loaders: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      },
      {
        test: /\.(ttf|png)$/,
        loaders: 'file-loader',
      }
    ]
  },
  watch: true
};