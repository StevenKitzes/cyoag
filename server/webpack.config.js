var webpack = require('webpack');
var path = require('path');

var constants = require('./constants');
var cyoagBuildConfig = require('./build-config');

var BUILD_DIR = path.resolve(__dirname, 'public/js');
var APP_DIR = path.resolve(__dirname, 'build-source/js');

var plugins;
if(cyoagBuildConfig.env == constants.envProd) {
  plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ];
}
else {
  plugins = [];
}

var config = {
  entry: APP_DIR + '\\main.js',
  output: {
    path: BUILD_DIR,
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel'
      }
    ]
  },
  plugins: plugins
};

module.exports = config;
