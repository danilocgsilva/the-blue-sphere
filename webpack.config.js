const path = require("path")

module.exports = {
    entry: "./src/script.js",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist", "js"),
        filename: "script.js"
    }
}