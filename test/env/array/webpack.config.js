const webpack = require('webpack');

module.exports = [
    {
        output: {
            filename: './prod.js',
        },
        mode: 'production',
        devtool: 'eval-module',
        target: 'node',
        plugins: [
            new webpack.DefinePlugin({
                PRODUCTION: JSON.stringify(true),
            }),
        ],
    },
    {
        output: {
            filename: './dev.js',
        },
        mode: 'development',
        target: 'node',
        plugins: [
            new webpack.DefinePlugin({
                PRODUCTION: JSON.stringify(false),
            }),
        ],
    },
];
