const path = require('path');

module.exports = {
  entry: './js/webpack_input.js',
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'output.js',
  },
};