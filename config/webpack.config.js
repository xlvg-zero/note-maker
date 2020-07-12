const { join } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const babelRc = require('./.babelrc.json');

const distPath = join(__dirname, '..', 'dist');

const commonConfig = {
  entry: join(__dirname, '..', 'src', 'index.jsx'),
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].[chunkhash].js',
    path: distPath,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: {
          loader: 'babel-loader',
          // options: babelRc,
        },
      },
      {
        test: /\.mdx?$/i,
        use: ['babel-loader', '@mdx-js/loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Note Maker', template: join(__dirname, 'index.html') }),
  ],
};

const devConfig = {
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: distPath,
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

const prodConfig = {
  devtool: 'source-map',
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};

switch(process.env.NODE_ENV) {
  case 'production':
    module.exports = merge(commonConfig, prodConfig);
    break;
  default:
    module.exports = merge(commonConfig, devConfig);
};
