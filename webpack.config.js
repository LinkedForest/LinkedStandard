//========================================//
// Webpack Configurations //
//========================================//

// Requires
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: './src/App.js',
    },
    mode: 'development',
    output: {
        filename: 'linkedstanderd.js',
        path: path.resolve(__dirname, './build'),
        publicPath: "/build"
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: 'src/postcss.config.js'
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf|png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts'
                        }
                    },
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'linkedstanderd.css'
        }),
    ],
    devServer: {
        overlay: true
    }
};