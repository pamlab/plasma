# JSのバンドルツールである、Webpackを使おう

JSのバンドルツールである、Webpackを使おう。


## Webpackの環境構築

### 1. npmの初期化

```js
$ npm init -y
```

package.jsonが作成されます。


### 2. webpackのインストール

```js
$ npm install webpack --save
```


### 3. webpackの設定ファイルを作成する

`webpack.config.js` というwebpackの設定ファイルを作成する。
必要であれば、インプットやアウトプットの項目を設定する。


### 3. npm scriptを追加

```json
"start": "webpack"
```

package.jsonのscriptへ上記を追加。  
これで`npm run start` もしくは `npm start` でビルドを実行することができる。  
必須ではないが、色々とオプションを付けていく事になるのでやっていた方が効率的。


## WebpackでjQueryを使用してみよう

### 1. jqueryのインストール

```js
$ npm install jquery --save
```

これで `node_modules` フォルダと `package.json` へjqueryが追加され、使用可能となる。


### 2. コードを書く

`import $ from 'jQuery';` でjqueryを$へ呼び出すことができる。  
その後はひたすらコードを書く。


### 3. 実行

`npm start` でビルドを実行。  
成功したら、`webpack.config.js` で設定したディレクトリ、名前でファイルが生成される。


## 参考文献

- [webpack](https://webpack.js.org/)
- [npmとwebpackでビルド - jQueryからの次のステップ - Qiita](https://qiita.com/civic/items/82c0184bcadc50965f91)