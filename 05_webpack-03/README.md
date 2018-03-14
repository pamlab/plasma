# JSのバンドルツールである、Webpackを使おう その3

現在たびらい内で実際にしようしているJS（tb_article...）をビルドしてみよう。


## 環境構築から実行まで

### 1. ファイル一式ををローカルへ持ってくる

所定の場所からローカルへファイル一式を持ってきます。


### 2. インストール

```js
$ npm install
```

### 3. ビルド

`npm start` でビルドを実行。  

![zu](https://user-images.githubusercontent.com/7459529/37378827-31ff20d8-2774-11e8-8e5b-dd1de91d4241.png)

- jsはWebpackを使用
- css(sass)、画像(svgやスプライト)はgulpを使用