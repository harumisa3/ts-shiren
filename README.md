## TSの試練
Node.js/Express/TypeScriptでRESTApiを作ってみましょう

## 必要なライブラリなどのインストール
```
$ npm install express --save
$ npm install helmet --save
$ npm install cors --save
$ npm install body-parser --save
$ npm install moment --save
$ npm install -D typescript @types/node 
$ npm install -D @types/express @types/helmet @types/cors
$ npm install -D ts-node
```

## ディレクトリ構成
```
express-api
　|---- /app
　|　　　└ app.ts
　|　　　└ /models
　|ㅤ　　└ /routes
　|　　　└ /services
　|　　　
　|---- package.json
```
app.ts これを実行してサーバーを起動します  
- /models データベースのモデル情報  
- /routes 各apiの振り分け  
- /services サービスの処理
- package.json パッケージ管理


## 試練1
ポーカーの役を判定するAPIを作成してください。また一番強い手札にstrongestフラグをつけてください。 
input
```
{
  "hands": [
    "h1,h2,h3,h4,h5",
    "s1,h1,c1,d1,h5",
    "s1,h1,c1,d1,h5",
    "ss1,dd2,c1,c2,c3"
  ]
}

```
output
```
{
  "results": [
    {
      "requestId": "01-000002-01",
      "hand": "h1,h2,h3,h4,h5",
      "yaku": "ストレート"
      "strongest": false
    },
    {
      "requestId": "01-000002-02",
      "hand": "s1,h1,c1,d1,h5",
      "yaku": "4カード",
      "strongest": true
    }
  ]
  "errors": [
    {
      "requestId": "01-000002-03",
      "hand": "ss1,dd2,c1,c2,c3,c4"
      "errorMessages": [
        "1番目のカードの値が不正です",
        "手札は5枚入力してください"
      ] 
    }
  ]
}
```

## 試練2
入力された手札情報をデータベースに保管するような、リクエストログ管理の仕組みを作成してください
|  id  |  request_id  | hand | result | timestamp |
| ---- | ---- | ---- | ---- | ---- |
|  1  | 01-000002-01 | h1,h2,h3,h4,h5 | ストレート | 20210201 |
|  2  | 01-000002-02 | s1,h1,c1,d1,h5 | 4カード | 20210201 |
|  3  | 01-000002-03 | ss1,dd2,c1,c2,c3,c4 | "1番目のカードの値が不正です",<br>"手札は5枚入力してください" | 20210201 |

## 試練3
試練1と試練2のテストコードを書いてみよう  
$ npm install --save-dev jest ts-jest @types/jest


## 試練4
下記テーマから好きな物を選んで実装してみよう  

- リクエストデータベースから該当日付のレコード情報を抽出し、CSVファイルに変換する
- 