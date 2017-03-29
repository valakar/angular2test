const path = require('path'); // USED
const webpackMerge = require('webpack-merge'); // used to merge webpack configs

const commonConfig = require('./webpack.common.js');

module.exports = function (options) {

    // TODO Add modules and plugins for prod
    return webpackMerge(commonConfig(), {
        output: {
            path: path.join(process.cwd(), "dist"),
            filename: '[name].[chunkhash].bundle.js',
            sourceMapFilename: '[file].[chunkhash].map',
            chunkFilename: '[id].[chunkhash].chunk.js'
        }
    })
};
