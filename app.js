const production = process.env.NODE_ENV === 'production';
const app = production ? require('./app.prod') : require('./app.dev');

module.exports = app;
