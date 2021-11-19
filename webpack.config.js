const path = require('path');

module.exports = {
  entry: {
    mainpage: './src/index.js',
    settings: './src/settings.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  }
};