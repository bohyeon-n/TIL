# 섹션 2. Request, Response 처리 기본

## POST 요청 처리

서버가 클라이언트가 보낸 정보를 받고 이를 어떻게 사용하는지 알아본다.

post 는 HTTP 메서드이다.

post 방식은 url에 담겨져 있는 것이 아니다. get 방식은 보내는 정보가 url에 담김 -> 길이 제한, 보안의 문제가 있다.

서버에 데이터를 보낼 때는 post요쳥으로 데이터를 보내는 것이 정상적인 방법이다.

- 서버로 폼 전송하기

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>email form</title>
  </head>
  <body>
    <form action="/email_post" method="post">
      email: <input type="text" name="email" /> <br />
      <input type="submit" />
    </form>
  </body>
</html>
```

이메일 포스트에 대한 라우팅 처리를 해줘야 한다.

```js
app.post('/email_post', function(req, res) {
  res.send('post response')
})
```

`/email_post` 포스트 요청을 받으면 'post response'응답을 보내준다.

- 실제로 클라이언트가 전송함 폼을 받아보기

바디 파서를 설치해야 됨.
`npm install body-parser --save`

```js
const bodyParser = require('body-parser')
```

그러나 아직 서버는 받은 게 없다 => Express에게 나 바디 파서 쓸래! 라고 알려줘야 함.

```js
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
```

서버와 클라이언트가 문자열을 주고 받을 때는 인코딩 된 것을 주고 받는다.
인코딩을 한다는 것은 아스키 형태의 데이터만 주고 받을 수 있다는 것이다. 한글같은 것 들은 다른 문자열로 치환하여 보내야 한다.

- 실제 클라이언트가 전송한 폼 정보 받기

```js
app.post('/email_post', function(req, res) {
  // get: req.param('email')
  res.send(`<h1>welcome! ${req.body.email}</h1>`)
})
```

클라이언트에서 전송한 폼이 서버로 오고 이것을 데이터 베이스를 조회한다던가 여러가지 것들을 할 수 있다.

## View engine을 활용한 응답처리

서버에서 html형식으로 응답을 줄 때 데이터와 html을 어떻게 결합하여 응답을 주는지 알아본다.

즉 서버에서 html을 생성하여 응답을 줄 때 적절한 데이터를 섞어서 보내줄 수 있다.

미리 html을 만들어 주고 그것을 통해서 응답을 줄 수 있다.

```
npm install ejs --save
```

view engine은 ejs를 쓰겠다.
이렇게만 해주면 express 가 기억을 함

```js
app.set('view engine', 'ejs')
```

ejs 템플릿 작성 하기

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>email ejs template</title>
  </head>
  <body>
    <h1>
      Welcome !! <%= email %>
    </h1>
    <p>정말로 반가워요 ^^*</p>
  </body>
</html>
```

```js
app.set('view engine', 'ejs')
app.post('/email_post', function(req, res) {
  res.render('email.ejs', { email: req.body.email })
})
```

email이라는 값을 찾아서 값으로 치환한 다음에 브라우저에 응답을 하게 되어 있다.

`express view engine`

## JSON 활용한 Ajax처리

Ajax처리를 node 와 연동하여 해본다.

Ajax는 브라우저 새로고침 없이 XML http 리퀘스트로 서버에 데이터를 보낼 수 있다.
서버에서 받은 데이터를 가지고 유효한지 확인한 다음에 온갖 값을 줌
Ajax를 보낼 때도 json형태로 서버에서 응답값으로 Ajax로 보내는 것을 한다.

- ajax요청 보내기

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>email form</title>
  </head>
  <body>
    <form action="/email_post" method="post">
      email: <input type="text" name="email" /> <br />
    </form>
    <button class="ajaxsend">ajaxsend</button>
    <div class="result"></div>
    <script>
      document.querySelector('.ajaxsend').addEventListener('click', () => {
        const inputdata = document.forms[0].elements[0].value
        sendAjax('http://127.0.0.1:3000/ajax_send_email', inputdata)
      })
      function sendAjax(url, data) {
        var data = { email: data }
        data = JSON.stringify(data)
        const xhr = new XMLHttpRequest()
        xhr.open('POST', url)
        xhr.setRequestHeader('Content-Type', 'application/json')
        // 서버로 보낼 때 joson형태의 데이터를 보냄 이 형태로 보내는 것이 좋음
        xhr.send(data)
        xhr.addEventListener('load', function() {
          const result = JSON.parse(xhr.responseText)
          if (result.result === 'ok') return
          document.querySelector('.result').innerHTML = result.email
        })
      }
    </script>
  </body>
</html>
```

```js
app.post('/ajax_send_email', function(req, res) {
  console.log(req.body.email)
  // db를 활용한다면 다음과 같은 validation check 로직을 넣는다.
  // check validation about input value => select db
  const responseData = { result: 'ok', email: req.body.email }
  res.json(responseData)
})
```

클라이언트의 폼을 제이슨 형식으로 만들어서 send에 담아서 보냈고 서버에서는 app.post에서 받았기 때문에 url을 라우팅 해서 모니터링 하고 있다가
결과 값을 포함해서 보내주었다.
