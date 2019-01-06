module.exports = {
  mode: 'production',
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
        test: /\.(ttf|png|jpg|jpeg)$/,
        loaders: 'file-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules' 
      }
    ]
  },
  watch: true
};