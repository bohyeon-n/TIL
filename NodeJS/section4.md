# Router 개선 - 모듈화

url 라우팅을 처리하는 코드들이 늘어날 수 있음

라우터 모듈로 뺄 수 있다.

routers 폴더를 만들고 `/main` 라우터 처리를 빼보자

routers/main.js

```js
var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')

// 라우터 처리를 여기서 할 수 있도록
router.get('/', function(req, res) {
  console.log('main js loaded')
  res.sendFile(path.join(__dirname, '../public/main.html'))
})
// 현재 경로에서 상대경로로 ../ 한 단계 위로 올라가서 public/main.html을 찾아줘

// 여기 입장에서는 루트니까 =>  '/'

// 모듈을 export 할 수 있다.
// 노드에서는 외부 라이브러리를 가져다가 export, require로 가져올 수 있다.

module.exports = router
```

app.js

```js
//메인 라우터 모듈 가져오기
var main = require('./rotuer/main')

// 메인으로 들어오면  main모듈을 쓰게 해줘 라는 말이다.
app.use('/main', main)
// 라우터 정보로 가서 어떤 필요한 처리를 해줄 수 있도록 한다.
```
