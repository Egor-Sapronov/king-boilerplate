const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const autoprefixer = require('autoprefixer');
const assets = require('postcss-assets');
const modulesLocalByDefault = require('postcss-modules-local-by-default');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        index: ['webpack-hot-middleware/client', './src/index'],
    },
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].js',
        publicPath: '/static/',
    },
    plugins: [
        new WebpackNotifierPlugin({
            title: 'webpack',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel-loader'],
            exclude: /node_modules/,
        }, {
            test: /\.css$/,
            loaders: ['style-loader, css-loader?localIdentName=[name]__[local]__[hash:base64:5]!postcss-loader'],
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
