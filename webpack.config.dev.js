const commonConfiguration = require('./webpack.config.js')

module.exports = {
    entry: "./src/script.js",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist", "js"),
        filename: "script.js"
    }
}