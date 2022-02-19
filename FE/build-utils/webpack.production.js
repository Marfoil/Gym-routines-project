const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = () => ({
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    devtool: 'cheap-source-map',
    plugins: [
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new CopyPlugin([{ from: 'src/server.js', to: './' }]),
    ],
    optimization: {
        minimizer: [new TerserJSPlugin({ extractComments: false }), new OptimizeCSSAssetsPlugin()],
    },
});
