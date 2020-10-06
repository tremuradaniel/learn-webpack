const path = require("path");

module.exports = {
    mode: "production", // it already in production by default, only expliciting it
    entry: "./src/index.js",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist")
    }
}