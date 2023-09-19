const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './src/js/script.js',
  output: {
    publicPath: '/',
      path: path.resolve(__dirname, './build'),
      filename: 'js/script.js',
  },
  module: {
      rules: [
        {
          test: /\.(sass|css|scss)$/,
          use: [
            // Creates `style` nodes from JS strings
            {
              loader: MiniCssExtractPlugin.loader, 
              options: {
                publicPath: '../'
              }
            },
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator:{
            filename: "./images/[name][ext]"
          }
        },
        {
          test: /\.(svg|eot|woff|woff2|ttf)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: "fonts",
              }
            },
          ],
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
      ],
  },  
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    devMiddleware: {
        writeToDisk: true
      },
    compress: true,
    port: 9000,
  },
  plugins: [
        new MiniCssExtractPlugin({
        filename:'css/style.css',
      }),
      new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: 'index.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/sigin.html',
        filename: 'sigin.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/login.html',
      filename: 'login.html'
  }),
  new HtmlWebpackPlugin({
    template: './src/Our_services.html',
    filename: 'Our_services.html'
}),
new HtmlWebpackPlugin({
  template: './src/contact.html',
  filename: 'contact.html'
}),
new HtmlWebpackPlugin({
  template: './src/trips.html',
  filename: 'trips.html'
}),
new HtmlWebpackPlugin({
  template: './src/landing-page-egypt.html',
  filename: 'landing-page-egypt.html'
}),
new HtmlWebpackPlugin({
  template: './src/landing-page-turkish.html',
  filename: 'landing-page-turkish.html'
}),
],
};