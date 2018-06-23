cors 
동일 출처 정책
웹페이지에서 여러 리소스를 불러올 때 (파일 자바스크립트 ... ajax 요청 css html)
리소스의 출처의 웹페이지의 출처와 같으면 안전하다고 본다.
출처가 다르면 안전하지 않을 수 있다고 보는 것이 동일 출처 정책이다. 

도메인을 사서 소유하고 있는 사람만 리소스를 제공할 수 있다.
도메인 소유자가 제공한 파일은 안전하다고 보는...
완전 다른 주소로 요청을 보내서 리소스를 받아오는 것은 안전하지 않을 수 있다. 

정보를 탈취한다는 것은 쿠키를 어떻게든 해커가 빼내고 (계정정보) 그것을 다른 곳으로 보내야 탈취.(ajax요청을 보낸다는 것 )
브라우저 안에서 다루면 탈취가 아님 해커가 소유하고 있는 도메인 주소로 요청을 보내는 것이 위험하다. 
프로토콜, 도메인 포트번호가 같아야 동일 출처로 간주.

window.open('')
이 주소로 열린 윈도우 객체?  탭마다 윈도우 객체가 따로 있다.

child /parents의 전역객체를 편집할 수 있다. 출처가 같은 경우 서로를 편집할 수 있다. 
window.open 라는 함수가 있다.
window.opener 라는 객체가 있다

Content-Security-Policy
응답에 포함되는 헤더 프론트엔드가 응답헤더를 보내줄 순 없음, 서버 개발자가 사용하는 기법
Content-Security-Policy: script-src 'self' https://apis.google.com
헤더에 넣어주면, 이 출처에 대해서만 스크립트 태그를 허용한다. 
스크립트 태그를 넣어서 해킹을 하기 때문에
이미지 태그를 삽입해서 해킹을 하는 것도 가능 이미지 태그를 불러오기 위해 서버에 요청을 보냄. 해커의 서버에 요청을 보내면서 get parameter에 

cors 
ajax요청을 보낼 때 사용되는 보안정책 
서버측과 클라이언트 측이 다 구현해야함.

쿠키는 브라우저에 내장되어있는 저장소
요청을 보낼 때 자동으로 포함되어서 감.
만약에 해커의 웹사이트가 있어서 이 웹사이트의 스크립트에서 마음껏 요청을 보낼 수 있다고 한다면, 

server에서 옵션을 줘서 다른서버에서 온 ajax요청을 거부하거나 승인할 수 있다. 
서버에서 옵션을 켜줘야한다.???? cross origin 에는 굉장히 복잡한 보안규칙이 있다. 거기에 관여하는 응답 헤더들이 엄청 많다?? 서버에서 어떻게 응답해주느냐에 따라서 달라질 수있다>?????

post put patch delete 메소드를 쓸 때는 요청이 두 번 갈 수 있다. 내가 요청을 한 번만 가라고 명령했음에도 불구하고
그 앞서 시험적으로 보내보는 것을 preflighted request(면접) 

크로스 오리진 요청에는 원래는 쿠키가 포함이 안되고 포함을 시킬 순 있는데 힘들다.

복잡하면 ...
프론트엔드와 API 서버를 같은 도메인으로 제공한다.
불가피하게 둘을 다른 도메인으로 제공해야 한다면
CORS를 허용한다 (cors 미들웨어를 사용하면 간단함)
CORS를 허용하는 경우, 쿠키를 쓸 수는 있으나 보안 상 허점이 생기기 쉽고 사용하기도 불편하므로 보통 JWT와 같은 토큰 방식의 인증을 사용한다.

백엔드와 프론트엔드의 주소가 다를 수 있다. 같은 도메인으로 제공하는 방법이 있다. 크로스 오리진 요청 자체가 아니게 됨.

전통적웹개발 방식이 아닌 ajax....??? ajax 방식(자바스크립트로  http 요청을 보내는)

긴문자열을 토근이라고 한다. 

id/password를 가지고 계속 인증을 한다면,

webstorage는 자바스크립트로 저장해줘야됨 
어떤 웹사이트가 있는데 로그인을 한 뒤에 탭을 닫앗다가 킴/ 로그인이 되어있음 그런 경우에 local storage를 쓸 수 있다. 
토큰을 만드는 방법
json web token 이다. 요즘 엄청많이 사용 토큰형식의 표준 토큰안에 json형식으로 정보를 저장하는 
토큰에 정보가 들어간다. 토큰을 만들어서 쓸 수 있다 임의의 문자열을 생성한 후에 쓸 수도 있다. 
그렇게 쓰면 인기가 없고, 토큰 자체에 정보를 포함시키는 방식이 인기를 끌고있다.
김승하는 1번이다라고 연결해놓은 사실을 어딘가에 저장시켜야 한다. 그것이 김승하인지 아닌지의 정보는 들어있지 않다. 어딘가에 저장해야하기 때문에 
이 방식은 토큰을 보면 누구인지 알 수 있기 때문에 많이 쓰인다. 
jwt를 만들어주는 쪽은 서버임 아이디 패스워드를 입력하고 서버에 보내면, 서버가 토큰을 돌려줌 
jwt토큰 안에는 정보가 포함되어있다. 


axios.post(<경로>,<body 객체>,<설정 객체>)
axios.get(<경로>, <설정 객체 config>) 설정객체엔느 내가 요청을 어떻게 보낼 것인가에대한 요구를 header 내가 어떤 header를 
promise가 완료될때까지 기다렸다가. 받으면  res에 넣어서 

```js
// Axios.create
const authedAxios = axios.create({
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
authedAxios.get('/auth').then(res => {
  prettyPrint(res.data)
})
authedAxios.get('/some-api').then(res => {
  prettyPrint(res.data)
})
authedAxios.post('/count').then(res => {
  prettyPrint(res.data)
})
```
미리 헤더를 넣어줌 

localstorage를 이렇게 쓴다 

token이라는 변수에 저장해둠 tab을 꺼버리면 로그인 된 채로 

progressive wep app 

cache 

메모리 cpu 동작방식?? 
메모리보다 더 빠른 저장소 2cache 메모리에 잇는 데이터를 캐시로 옮긴다음에 트

304는 300번대 응답코드는 추가적인 작업이 필요해.
똑같은 주소에 여러 요청을 보내면, 304 

Caching
Age
The time in seconds the object has been in a proxy cache.
Cache-Control
Specifies directives for caching mechanisms in both, requests and responses.
Expires
The date/time after which the response is considered stale.
Pragma
Implementation-specific header that may have various effects anywhere along the request-response chain. Used for backwards compatibility with HTTP/1.0 caches where the Cache-Control header is not yet present.
Warning
A general warning field containing information about possible problems.

응답헤더에 사용할 수 있는 헤더들 
conditionals: 검증을 위해서 쓰이는 헤더들 어떤 특정조건을 만족할 때 캐시를 사용하거나 없애버리는...
이런 헤더들 위에서 캐시가 동작한다. 

cache control 만료?
etag 캐시의 검증을 위해
해시값?을 사용됨 해시값? 

http://www.convertstring.com/ko/Hash/MD5
해시는 널리 사용되는 개념이다.
긴정보로부터 짧은 문자열을 생성해주는 것이 해시이다. 
똑같은 입력을 넣으면 똑같은 결과가 나온다. 
한글자만 추가해도 완전히 다른 문자열이 나온다. 자료가 아주 조금이라도 변경되면 아예 다른 해시 문자열이 생성된다.
1. 해시라는 것은 어떤 정보로부터 짧은 문자열을 생성해내는 함수이다.
2. 같은 입력이 주어지만 항상 같은 출력이 나온다.
3. 입력이 조금이라도 변경되면 완전히 다른 출력이 나온다.
html 문서를 해시만들 수 있다면, 버전 넘버로 쓸 수 있다. 
해시값을 버전넘버로 사용할 수 있다. 
이런 값들이 http cache에서 사용됨. etag 

마지막으로 수정된시간을 기억해뒀다가. 1월1일 이후로 변경사항이 없는지 서버에게 물어봄 서버에서 그냥 쓰라고 하거나, 업데이트된 자료를 보내줄 수도 있다. 

etag if-non-match 
그자원과 etag값을 저장해둔다. etag가 있으면 다음번에 똑같은 주소로 요청을 보낼 때 etag값을 포함시켜서 물어봄. 브라우저가 저번에 저장해두었던 자원의 버전번호를 알 수 있다.
서버가 지금갖고 있는 버전번호와 비교해서 304(그냥 써라) 일치하지 않으면 내가 지금 보내준 것을 대신 쓰라는 응답을 보내줄 수 있다. 

304 not modified 
http method중에 어떤 것은 캐시가 되고, 어떤 것은 캐시가 되지 않는다.
포스트는 자원을 생성해내는 ... 똑같은 요청을 보낸다고 해서, 그것이 같은 요청은 아니다. 포스트 요청에 대한 응답을 재활용한다는 것은 이상한 것.
get head만 캐시를 한다.(응답을 재활용할 수 있는 경우에만 캐시를 한다.)
캐시는 응답을 재활용할 것인지 하지 않을 것인지.

rest api 통신방식 
자료의 위치를 경로에다 나타내는 방식, put patch get delete 를 쓰자고 한 것 
각각의 자원마다 경로가 따로 있다. 여러 자원이 동시에 필요한 경우 요청을 여러번 보내야 된다. 자원의 종류만큼

GraphQL
별도의 언어가 있는 것 