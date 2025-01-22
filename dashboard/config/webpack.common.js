const {VueLoaderPlugin} =require('vue-loader')
module.exports = {
    // ...
    module: {
      rules: [
        // File Loader for images and fonts
        {
          test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
          use: [{ loader: 'file-loader' }],
        },
        // Vue Loader
        {
          test: /\.vue$/,
          use: 'vue-loader',
        },
        // SCSS/SASS Loader
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader', // Injects styles into the DOM for Vue components
            'css-loader',       // Resolves CSS imports
            'sass-loader',      // Compiles Sass to CSS
          ],
        },
        // CSS Loader
        {
          test: /\.css$/,
          use: [
            'vue-style-loader', // For Vue components
            'style-loader',     // Injects styles into the DOM
            'css-loader',       // Resolves CSS imports
          ],
        },
        // Babel Loader for JavaScript
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        },
      ],
    },
    plugins: [new VueLoaderPlugin()],
  };