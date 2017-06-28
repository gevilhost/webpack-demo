module.exports = {
    // 入口文件路径，__dirname是根目录
    entry: __dirname + '/src/main.js',
    // 打包生成文件
    output: {
        path: __dirname + '/output',
        filename: 'main.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jpeg$/,
                // use: 'url-loader?limit=1024&name=[path][name].[ext]&publicPath=output/',
                use: 'url-loader?limit=1024&name=[path][name].[ext]&outputPath=img/&publicPath=output/',
            }
        ]
    }
}