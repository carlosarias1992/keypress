const path = require('path');

module.exports = {
    context: __dirname,
    entry: './frontend/code_racer.js',
    output: {
        path: path.join(__dirname, 'assets', 'js'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '*']
    },
    devtool: 'eval-source-map'
};