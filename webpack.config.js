const production = process.env.NODE_ENV === 'production';
const config = production ? require('./webpack.config.prod') : require('./webpack.config.dev');

module.exports = config;
