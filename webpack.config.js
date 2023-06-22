const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: ['./src/js/app.js', './src/scss/app.scss'],
  output: {
    filename: 'js/app.js',
    path: path.resolve(__dirname, 'public/dist'),
  },
  plugins: [
    new CopyWebpackPlugin({
        patterns: [
            { from: 'src/img/', to: 'img/' },
            { from: 'src/audio/', to: 'audio/' },
        ],
    }),
  ],
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
