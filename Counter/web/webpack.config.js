module.exports = {
    entry: './index.web.js',
    output: {
        filename: "web/app.js"
    },
    devServer: {
        hot: true,
        contentBase: './web'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}