const babelJest = require('babel-jest');

module.exports = {
    process(src, filename) {
        if (filename.match(/\.js?$/)) {
            return babelJest.process(src, filename);
        }

        return '';
    }
};
