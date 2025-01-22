const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')
const devConfig = {
  mode: "development",
  output:{
    publicPath:'http://localhost:8082/'
  },
  devServer: {
    port: 8082,
    historyApiFallback: { 
        index: "/index.html"
     },
  },
  plugins :[
    new ModuleFederationPlugin({
      name:'auth',
      filename:'remoteEntry.js',
      shared:packageJson.dependencies,
      exposes :{
        "./AuthApp":"./src/bootstrap"
      }
    }),    
    new HtmlWebpackPlugin({
        template: './public/index.html'
    })
  ]
};
module.exports = merge(commonConfig, devConfig);