const WEBPACK_CONFIG_PATH = './config/webpack/webpack.';
const MODE = process.env.NODE_ENV ? process.env.NODE_ENV : 'dev';

module.exports = require(WEBPACK_CONFIG_PATH + MODE)({env: MODE});
