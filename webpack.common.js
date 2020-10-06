const path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    // order matters!
                    "style-loader", // 3. Inject styles into dom
                    "css-loader", // 2. turns css into common js
                    "sass-loader" // 1. turns sass into css
                ]
            }
        ]
    }
}
