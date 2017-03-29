const path = require('path'); // TODO USED
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { NoEmitOnErrorsPlugin, LoaderOptionsPlugin } = require('webpack'); // TODO ???
const { GlobCopyWebpackPlugin, BaseHrefWebpackPlugin } = require('@angular/cli/plugins/webpack'); // TODO ???
const ProgressPlugin = require('webpack/lib/ProgressPlugin'); //TODO ???
const HtmlWebpackPlugin = require('html-webpack-plugin'); // TODO ???
const { CommonsChunkPlugin } = require('webpack').optimize; // TODO ???
const autoprefixer = require('autoprefixer'); // TODO ???
const postcssUrl = require('postcss-url'); // TODO ???
const { AotPlugin } = require('@ngtools/webpack'); // TODO ???
const nodeModules = path.join(process.cwd(), 'node_modules'); // TODO ???
const entryPoints = ["inline", "polyfills", "sw-register", "styles", "vendor", "main"];  // TODO ???

module.exports = function (options) {

    return {
        devtool: "source-map",
        resolve: {
            extensions: ['.ts', '.js', '.json'],
            modules: ['node_modules']
        },
        entry: {
            main: [
                "./src/main.ts"
            ],
            polyfills: [
                "./src/polyfills.ts"
            ],
            styles: [
                "./src/styles.css"
            ]
        },
        module: {
            rules: [
                {
                    enforce: "pre",
                    test: /\.js$/,
                    use: "source-map-loader",
                    exclude: [/\/node_modules\//]
                },
                {
                    test: /\.ts$/,
                    use: "@ngtools/webpack"
                },
                {
                    test: /\.json$/,
                    loader: "json-loader"
                },
                {
                    test: /\.html$/,
                    loader: "raw-loader"
                },
                {
                    exclude: [
                        path.join(process.cwd(), "src/styles.css")
                    ],
                    test: /\.css$/,
                    use: [
                        "exports-loader?module.exports.toString()",
                        "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
                        "postcss-loader"
                    ]
                },
                {
                    include: [
                        path.join(process.cwd(), "src/styles.css")
                    ],
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract({
                        use: [
                            "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
                            "postcss-loader"
                        ],
                        fallback: "style-loader",
                        publicPath: ""
                    })
                },
                {
                    exclude: [path.join(process.cwd(), "src/styles.css")],
                    test: /\.scss$|\.sass$/,
                    use: [
                        'to-string-loader',
                        'css-loader?{\"sourceMap\":false,\"importLoaders\":1}',
                        'postcss-loader',
                        'sass-loader'
                    ]
                },
                {
                    include: [path.join(process.cwd(), "src/styles.css")],
                    test: /\.scss$|\.sass$/,
                    loader: ExtractTextPlugin.extract({
                        use: [
                            "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
                            "postcss-loader",
                            "sass-loader"
                        ],
                        fallback: "style-loader",
                        publicPath: ""
                    })
                },
                {
                    test: /\.(eot|svg)$/,
                    loader: "file-loader?name=[name].[hash:20].[ext]"
                },
                {
                    test: /\.(jpg|png|gif|otf|ttf|woff|woff2|cur|ani)$/,
                    loader: "url-loader?name=[name].[hash:20].[ext]&limit=10000"
                }
            ]
        },
        plugins: [
            new NoEmitOnErrorsPlugin(),
            new GlobCopyWebpackPlugin({
                patterns: [
                    "assets",
                    "favicon.ico"
                ],
                globOptions: {
                    "cwd": "/home/lelou/WebstormProjects/Angular2/src",
                    "dot": true,
                    "ignore": "**/.gitkeep"
                }
            }),
            new ProgressPlugin(),
            new HtmlWebpackPlugin({
                template: "src/index.html",
                filename: "index.html",
                hash: false,
                inject: true,
                compile: true,
                favicon: false,
                minify: false,
                cache: true,
                showErrors: true,
                chunks: "all",
                excludeChunks: [],
                title: "Webpack App",
                xhtml: true,
                chunksSortMode: function sort(left, right) {
                    let leftIndex = entryPoints.indexOf(left.names[0]);
                    let rightindex = entryPoints.indexOf(right.names[0]);
                    if (leftIndex > rightindex) {
                        return 1;
                    }
                    else if (leftIndex < rightindex) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                }
            }),
            new BaseHrefWebpackPlugin({}),
            new CommonsChunkPlugin({
                name: "inline",
                minChunks: null
            }),
            new CommonsChunkPlugin({
                name: "vendor",
                minChunks: module => module => /node_modules/.test(module.resource),
                chunks: ["main"]
            }),
            new LoaderOptionsPlugin({
                sourceMap: false,
                options: {
                    postcss: [
                        autoprefixer(),
                        postcssUrl({
                            "url": (URL) => {
                                // Only convert root relative URLs, which CSS-Loader won't process into require().
                                if (!URL.startsWith('/') || URL.startsWith('//')) {
                                    return URL;
                                }
                                if (deployUrl.match(/:\/\//)) {
                                    // If deployUrl contains a scheme, ignore baseHref use deployUrl as is.
                                    return `${deployUrl.replace(/\/$/, '')}${URL}`;
                                }
                                else {
                                    // Join together base-href, deploy-url and the original URL.
                                    // Also dedupe multiple slashes into single ones.
                                    return `/${baseHref}/${deployUrl}/${URL}`.replace(/\/\/+/g, '/');
                                }
                            }
                        })
                    ],
                    sassLoader: {
                        sourceMap: false,
                        includePaths: []
                    },
                    context: ""
                }
            }),
            new AotPlugin({
                mainPath: "main.ts",
                hostReplacementPaths: {
                    "environments/environment.ts": "environments/environment.ts"
                },
                exclude: [],
                tsConfigPath: "src/tsconfig.app.json",
                skipCodeGeneration: true
            }),
            new ExtractTextPlugin({
                filename: "[name].bundle.css",
                disable: true
            })
        ],
        node: {
            "fs": "empty",
            "global": true,
            "crypto": "empty",
            "tls": "empty",
            "net": "empty",
            "process": true,
            "module": false,
            "clearImmediate": false,
            "setImmediate": false
        }

    };

};
