var path = require('path');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: './server/api.js',
  target: 'node',
  output: {
    path: resolve('dist_api'),
    filename: 'api.js'
  }
};