const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const assets = require('postcss-assets');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const modulesLocalByDefault = require('postcss-modules-local-by-default');

module.exports = {
    devtool: 'source-map',
    entry: {
        index: ['babel-core/polyfill', './src/index.js'],
    },
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].js',
        publicPath: '/static/',
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/,
        }, {
            test: /\.css$/,
            loaders: ExtractTextPlugin.extract('style-loader', 'css-loader?localIdentName=[name]__[local]__[hash:base64:5]!postcss-loader'),
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|ico|woff|woff2)$/,
            loader: 'file-loader',
        }],
    },
    postcss() {
        return [
            autoprefixer,
            modulesLocalByDefault,
            assets(),
        ];
    },
};
