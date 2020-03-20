const path = require('path')
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/app/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            `@babel/preset-env`
                        ]
                    }
                }]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8090,
        historyApiFallback: {
            rewrites: [{
                from: /./,
                to: '404.html'
            }]
        },
        hot: true,
        open: true
    }
}