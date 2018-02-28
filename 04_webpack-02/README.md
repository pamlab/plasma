# JSのバンドルツールである、Webpackを使おう その2

JSのバンドルツールである、Webpackを使おう。


## 環境構築から実行まで

### 1. webpackのインストール

```js
$ npm install
```

### 2. 実行

`npm start` でビルドを実行。  
成功したら、`webpack.config.js` で設定したディレクトリ、名前でファイルが生成される。


## 圧縮最適化しビルドを実行

`npm run build` でビルドを実行。  
成功したら、`webpack.config.production.js` で設定したディレクトリ、名前でファイルが生成される。


## [その1](https://github.com/pamlab/plasma/tree/master/03_webpack-01)との違い

- 複数JSのバンドルを追加
- 本番環境向けに、圧縮最適化設定を追加
