const path = require('path');

module.exports = {
    entry: './src/js/script.js', // エントリーポイントの設定
    output: {
        filename: 'script.js', // 出力するファイル名
        path: path.join(__dirname, 'js') // 出力先のパス
    }
};