## 미션

1. express 설정
2. 필요한 npm 모듈 설치
3. input UI만들기(검색창)
4. 검색결과를 받아서 dummy json형태를 내려주기
5. 화면에 결과 노출하기

## 실습하기

app.js

```js
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.listen(port, () => console.log('listen! '))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pulblic/main.html')
})

app.post('/search', function(req, res) {
  const dummyData = {
    고양이: {
      imageUrl:
        'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      desc:
        '포유류의 일종. 식육목 고양잇과에 속하는 대표적인 동물이다. 크게는 가축화한 집고양이와 야생고양이로 나뉜다. 대개 개보다는 작은 몸집에[6] (흔하게 보는 것은 애완 고양이,길고양이라고 부르는 것이 대개지만 옛날 페루에서는 고양이고기를 먹으며 고양이 고기 파티까지 즐겼다고 한다.'
    },
    강아지: {
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTd2UFH9lj39sXszkf24IZdUUoDofenhs5MnMzn0IcmoYWoA5Y',
      desc:
        '강아지는 개의 어린 형태를 일컫는 순우리말이다. 소의 새끼 → 송아지, 말 → 망아지의 어법을 따라 만들어진 용어다. 돌, 돝 + 아지 → 도야지 → 돼지도 있다. 영어로는 puppy 혹은 doggy[1]라고 한다.일본어로는 왕짱(ワンちゃん)으로 한국과 비슷하다.한국의 멍멍을 일본어로는 왕왕(ワンワン)으로 표기하기 때문.'
    }
  }

  const resultData = dummyData[req.body.text]

  const responseData = {
    result: resultData ? 'ok' : 'fail',
    imageUrl: resultData ? resultData.imageUrl : null,
    text: resultData ? resultData.desc : null
  }

  res.send(JSON.stringify(responseData))
})
```

main.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>search</title>
  </head>
  <body>
    <input type="text" name="search_text" class="search_text" />
    <button class="search_btn">찾기</button>

    <img id="image" src="" alt="" />
    <div id="text"></div>

    <script>
      const searchEl = document.querySelector('.search_text')
      const searchBtnEl = document.querySelector('.search_btn')
      searchBtnEl.addEventListener('click', () => {
        const search_txt = searchEl.value
        const xhttp = new XMLHttpRequest()
        xhttp.open('POST', 'http://127.0.0.1:3000/search', true)
        xhttp.setRequestHeader('Content-Type', 'application/json')
        let data = {
          text: search_txt
        }
        data = JSON.stringify(data)
        xhttp.send(data)

        xhttp.addEventListener('load', function() {
          const result = JSON.parse(xhttp.responseText)
          if (result.result === 'ok') {
            document.getElementById('image').src = result.imageUrl
            document.getElementById('text').innerHTML = result.text
          } else {
            document.getElementById('text').innerHTML = '검색 결과가 없습니다.'
          }
        })
      })
    </script>
  </body>
</html>
```

### 결과물

![결과](https://i.ibb.co/mSgBc7q/2019-07-03-11-58-46.png)
