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
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        loaders: 'file-loader',
      }
    ]
  },
  watch: true
};