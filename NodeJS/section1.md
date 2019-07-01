# Node.js 웹개발로 알아보는 백엔드 자바스크립트의 이해

## NPM

`--save` 는 package.json에 명시해 두어 다음에 받을 때 쉽게 설치할 수 있도록 한다.
`- g` 는 글로벌로 내 pc어느 디렉토리에서던 실행할 수 있다.

## Express 기반 웹서버 구동

```js
var express = require('express')
var app = express()

app.listen(3000, function() {
  console.log('start!! express server on port 3000')
})
```

listen은 3000이라는 포트를 기반으로 함수를 실행시켜 주는 것이다.
내 pc에 접근하는 로컬 IP는 localhost, 127.0.0.1이다.

```js
console.log('end of server code....')
```

실행 순서는

```
end of server code...
start express server on port 3000
```

콜백함수가 비동기로 동작하기 때문에 서버가 listen할 때까지 기다리는 것이 아니라,
아래 라인이 실행되고 그 다음에 실행된다.
동기적인 코드가 모두 실행 된 후에 비동기가 실행된다.

## nodemon 설치

```
npm install nodemon -g
```

파일이 바뀔 때 마다 자동으로 서버를 내렸다가 다시 올려준다.

## url routing

모든 요청에 대해 일일이 처리해 주어야 한다.

```js
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/main.html')
})
```

```js
<script src="main.js" />
```

html 파일에 스크립트를 넣고 요청을 하며 실제로는 127.0.0.1/3000/main.js 로 요청하는 것과 같으므로 url처리를 해줘야 한다.

html,자바스크립트 같은 파일 한번 작성하면 바뀌지 않는 파일을 정적 파일이라고 한다. 이런 것들은 서버에서 자동으로 처리하여 이 파일에 대한 요청이 오면 일일이 처리하지 않아도 파일을 줄 수 있도록 한다.

static 디렉토리 설정해주기

```js
app.use(express.static('public'))
```
