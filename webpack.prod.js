const path = require("path");
const common = require("./webpack.common");
const { merge } = require('webpack-merge');

module.exports = merge (common, {
    mode: "production", // it already in production by default, only expliciting it
    output: {
        filename: 'main.[contentHash].js',
        path: path.resolve(__dirname, "dist")
    }
});
