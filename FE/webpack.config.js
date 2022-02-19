const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)();
const presetConfig = require('./build-utils/loadPresets');
const Dotenv = require('dotenv-webpack');

const publicPath = (filename) => path.join(__dirname, `public/${filename}`);

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) =>
    merge(
        {
            mode,
            entry: './src/app.jsx',
            output: {
                path: path.join(__dirname, 'dist'),
                filename: 'bundle.[hash:8].js',
                chunkFilename: '[id].[hash:8].chunk.js',
            },
            module: {
                rules: [
                    {
                        loader: 'babel-loader',
                        test: /\.jsx?$/,
                        exclude: /node_modules/,
                    },
                    {
                        test: /\.svg$/,
                        use: [
                            {
                                loader: 'svg-url-loader',
                                options: {
                                    limit: 10000,
                                },
                            },
                        ],
                    },
                ],
            },
            resolve: {
                extensions: ['.js', '.json', '.jsx'],
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: publicPath('index.html'),
                    favicon: publicPath('img/web-logo.png'),
                }),
                new webpack.ProgressPlugin(),
                new Dotenv(),
            ],
        },
        modeConfig(mode),
        presetConfig({ mode, presets }),
    );
