const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['./src/index.tsx'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    publicPath: '/',
    contentBase: './dist',
    port: 3000,
    hot: true
  },
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
    alias: {
      "@asrc": path.resolve(__dirname, "./src")
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [require.resolve('@babel/preset-react'), require.resolve('@babel/preset-typescript')],
              plugins: [
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                ['@babel/plugin-proposal-class-properties', { loose: true }],
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Test',
      template: 'assets/template.html',
      filename: 'index.html'
    })
  ]
};
