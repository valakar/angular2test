const path = require('path'); //USED
const webpackMerge = require('webpack-merge'); // used to merge webpack configs

const commonConfig = require('./webpack.common.js');

/**
 * Webpack constants
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

// TODO For deployment
const baseHref = "";
const deployUrl = "";

console.log('process.cwd()', process.cwd());

module.exports = function (options) {

    // TODO Add modules and plugins for dev

    return webpackMerge(commonConfig(), {
        output: {
            path: path.join(process.cwd(), "dist"),
            filename: '[name].bundle.js',
            sourceMapFilename: '[file].map',
            chunkFilename: '[id].chunk.js'
        },
        devServer: {
            port: PORT,
            host: HOST,
            historyApiFallback: true,
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            }
        }
    })
};
