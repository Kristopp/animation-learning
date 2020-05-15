let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
    watch: true,
        module: {
            rules: [{
                test: /\.html$/i,
                loader: 'html-loader',
            }, ],
        },
        plugins: [new HtmlWebpackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
            })]

        };