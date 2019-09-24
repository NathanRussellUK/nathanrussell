const path = require("path")

module.exports = {
    target: 'node',
    context: __dirname,
    entry: path.resolve("./source/site-renderer.tsx"),
    output: {
        path: path.resolve("./distribution/"),
        filename: "site-renderer.js"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                loader: 'ignore-loader'
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    }
}