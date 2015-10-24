const app = require('./app');

app.listen(process.env.PORT, () => {
    console.log(`Listen port ${process.env.PORT}`);
});
