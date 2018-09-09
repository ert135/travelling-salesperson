const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
     app: path.resolve(__dirname, 'src/index.ts'),
  },
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: './dist',
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    publicPath: "/",
    historyApiFallback: {
      index: 'index.html'
    },
    port: 3000
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    rules: [
      {test: /\.tsx?$/, exclude: /node_modules/, loader: "awesome-typescript-loader"},
      {test: /\.js?$/, exclude: /node_modules/, loader: "awesome-typescript-loader"},
      {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
    ]
  }
};
