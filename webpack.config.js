const path = require('path')

module.exports = {
  entry: ['./src/js/app.js', './src/scss/app.scss'],
  output: {
    filename: 'js/app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: 'css/', name: '[name].css'}
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
              sassOptions: {
                outputStyle: 'compressed',
              },
            }
          }
        ],
      },
    ],
  },
}
