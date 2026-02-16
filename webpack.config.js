const path = require('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  devtool: 'source-map',
  mode: 'development',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    assetModuleFilename: '[name][ext]',
    clean:true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template:'./src/index.html',
        filename: './dist/index.html',
    })
  ],  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename:'img/[name][ext]'
        }
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        // options:{
        //     transpileOnly:true,
        // },
        exclude: /node_modules/,
      },      
    {
      test: /\.html$/i,
      loader: "html-loader",
    },
  ],
  },
};
  