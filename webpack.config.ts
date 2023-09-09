import path from 'path'
import webpack from 'webpack'
const Dotenv = require('dotenv-webpack')
import 'webpack-dev-server'

const config: webpack.Configuration = {
  entry: {
    index: './src/js/index.ts',
    about: './src/js/about.ts',
  },
  output: {
    clean: true,
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [new Dotenv()],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
}

export default config
