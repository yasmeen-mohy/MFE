const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')
const devConfig = {
  mode: "development",
  output:{
    publicPath:'http://localhost:8081/'
  },
  devServer: {
    port: 8081,
    historyApiFallback: { 
        index: "/index.html"
     },
  },
  plugins :[
    new ModuleFederationPlugin({
      name:'marketing',
      filename:'remoteEntry.js',
      shared:packageJson.dependencies,
      exposes :{
        "./MarketingApp":"./src/bootstrap"
      }
    }),    
    new HtmlWebpackPlugin({
        template: './public/index.html'
    })
  ]
};
module.exports = merge(commonConfig, devConfig);