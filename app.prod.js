const express = require('express');
const config = require('./webpack.config');
const app = express();

app.use(config.output.publicPath, express.static(config.output.path));

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

module.exports = app;
