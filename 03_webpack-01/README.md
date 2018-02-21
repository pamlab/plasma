## テーマ
JSのバンドルツールである、Webpackを使おう

## 例

### Webpackの環境構築

#### npmの初期化
```js
$ npm init -y
```
package.jsonが作成されます。


#### webpackのインストール
```js
$ npm install webpack --save
```

#### npm scriptを追加
```js
"webpack": "webpack"
```
package.jsonのscriptへ上記を追加。  
これで`npm run webpack`でビルドを実行することができる。
必須ではないが、色々とオプションを付けていく事になるのでやっていた方が効率的。

### 必要なモジュールのインストール

#### jqueryのインストール
```js
$ npm install jquery --save
```


## 参考文献

- [webpack](https://webpack.js.org/)
- [npmとwebpackでビルド - jQueryからの次のステップ - Qiita](https://qiita.com/civic/items/82c0184bcadc50965f91)