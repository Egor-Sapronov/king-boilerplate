const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

module.exports = app;
