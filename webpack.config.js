const path = require("path");

module.exports = {
    mode: "production", // it already in production by default, only expliciting it
    entry: "./src/index.js",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist")
    },
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