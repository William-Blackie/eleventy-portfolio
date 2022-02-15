const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/assets/js/main.js',
    output: {
        path: path.resolve(__dirname, '_site/assets'),
        filename: 'main.js'
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [{
                from: "src/assets/images/",
                to: "images/"
            }, {
                from: "src/assets/site.webmanifest",
                to: ""
            }, {
                from: "src/assets/favicons",
                to: "favicons"
            }],
        }),
    ],
    module: {
        rules: [{
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};