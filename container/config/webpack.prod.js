const {merge} = require("webpack-merge")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common")
const packageJson = require("../package.json");
const domain = process.env.PRODUCTION_DOMAIN;
const prodConfig= { 
    mode: 'production',
    output: {
        filename:'[name].[contenthash].js'  //this is done primarely for caching issues
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
                marketing:`marketing@${domain}/marketing/latest/remoteEntre.js`,
                auth:`auth@${domain}/auth/latest/remoteEntry.js`,
                dashboard:`dashboard@${domain}/dashboard/latest/remoteEntry.js`,

            },
            shared:packageJson.dependencies
        })
    ]
}

module.exports= merge(commonConfig,prodConfig);

