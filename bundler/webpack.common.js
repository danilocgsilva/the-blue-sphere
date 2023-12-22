const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, '../src/script.js'),
    output:
    {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    context: path.join(__dirname, '../src'),
    plugins:
    [
        new CopyWebpackPlugin({
            patterns: [
                { 
                    from: path.resolve(__dirname, '../src/images'),
                    to: path.resolve(__dirname, '../dist/images'),
                }
            ]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            minify: true
        })
    ],
    module:
    {
        rules:
        [
            // HTML
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },

            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                [
                    'babel-loader'
                ]
            },

            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },


            {
                test: /\.(css)$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

            // Images
            {
                test: /\.(jpg|png|gif|svg)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'assets/images/'
                        }
                    }
                ]
            }
        ]
    }
}
