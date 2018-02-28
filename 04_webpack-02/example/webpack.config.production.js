const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/js/script.js', // エントリーポイントの設定
    output: {
        filename: 'script.js', // 出力するファイル名
        path: path.join(__dirname, 'js') // 出力先のパス
    },

    // この辺から、圧縮最適化用のオプション
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        })
    ]
};