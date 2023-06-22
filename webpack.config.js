const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: ['./src/js/app.js', './src/scss/app.scss'],
  output: {
    filename: 'js/app.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new CopyWebpackPlugin({
        patterns: [
            { from: 'node_modules/@fortawesome/fontawesome-free/webfonts/', to: 'webfonts/' },
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
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'public'),
        publicPath: '/',
      },
    ],
    compress: true,
    port: 3000,
  },
}
