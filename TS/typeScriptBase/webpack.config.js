const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/index.ts",
    output: {
        filename:'main.js'
    },
    resolve: {
        extensions:[".ts",".js",".tsx"]
    },
    module: {
        rules: [
            {
                test:/\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
    devServer: {
        contentBase: './dist',
        stats: 'errors-only',
        compress: false,
        host: 'localhost',
        port: 8060
    },
    plugins: [
        new CleanWebpackPlugin ({
            cleanOnceBeforeBuildPatterns: ['../dist']
        }),
        new HtmlWebpackPlugin({
            template: './src/template/index.html'
        })
    ]

}