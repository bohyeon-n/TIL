특정한 패턴
문서 내의 이메일만 골라내고 싶다
특정 패턴과 일치하는 정보를 찾고 싶을 때, 특정패턴과 일치하는 문자열을 치환하고 싶을 때

정규 표현식의 목적

1.  검사
2.  검색
3.  치환

정규표현식이라는 언어는 온갖 언어에 내장되어 있다.
어떤 언어를 배워도 정규표현식이 쓰임 가성비 짱

regular expression
정규식
정규표현식

/ / 정규식 객체
// 안에다가 정규표현식 언어를 쓰면
var re = /ab + c/
var re = new RegExp('ab+c')

큰 차이점은 없지만 위쪽은 문자열이 아니다.그대로 바로 즉시 정규식 객체로 변환이 되서 대입되는 반면에
문자열 리터럴이 메모리에 올라가서 그런 과정이 추가로 필요하다. 문자열을 정규식 객체로 변환하는 과정을 추가로 거친다.속도가 조금 더 느릴 수 있다.
꼭 필요한 경우가 아니면, 위 처럼 생성해내는 것이 좋다.

단순문자, 특수문자로 구성될 수 있다.
검사 검색 치환을 할 때 정확히 'abc' 이렇게 생긴 것만

```js
// 문자열 래퍼 객체(String)에는 match, search, split, replace매소드가 정규 표현식을 지원하게 만들어져 있다.
// 참조타입이 아닌 값에 점을 찍었을 때 그 순간에만
// 속성이 있는 배열로 반환해줌
'Hi, do you know your abc's?'.match(/abc/)
'Hi, do you know your abc's?'.search(/abc/)
'Hi, do you know your abc's?'.split(/abc/)
'Hi, do you know your abc's?'.replace(/abc/,'ABC')
```

'abc'로 해도 같음

문자열 매소드로 정규표현식을 쓴다. 이 네 개 중에 골라야 한다.

## 특수문자사용하기

match 이 정규표현식의 문자열과 어떻게 대응되는지, 반환해주는
반환해주면 정규표현식과 일치되는 부분이있다.

match

1.  정규표현식과 대응되는 부분을 반환해줌
2.  index
3.  input
4.  groups

```js
"1234 abbbbbbbbc 1234".match(/ab*c/);
"1234 abbbbbbbbc 1234".search(/ab*c/);
"1234 abbbbbbbbc 1234".split(/ab*c/); // 정확히 일치 하지 않아도 규칙만 있다면, 패턴을 처리할 수 있다.
"1234 abbbbbbbbc 1234".split("abc"); // 정확히 일치해야만
"1234 abbbbbbbbc 1234".replace(/ab*c/, "{$&}");
"1234 abbbbbbbbc 1234".replace(/ab*c/, "<$&>");
// $&앞에서 일치한 부분을 내가 그대로 쓰겠다
// 저걸 바꾸긴 바꿀껀데 저걸 사용한 다른 패턴으로 바꾸겠다
// 문서 내에 이메일 주소를 다 바꾸겠다.
```

### 정규식에서의 특수문자

- 특수 문자가 아닌 문자 앞에서 사용된 \알파벳들이 특별한 의미를 갖도록 만들어주는 것이 `\`
- 특수 문자 앞에서 \ \* \*가 특별하지 않다.

^문자열 시작 부분을 의미 문자열 시작부분에 있지 않으면 대응되는 패턴이 있을 수 없다 .

$끝 부분을 나타내는

- 0 회 이상 반복을 의미하는 수량자라고도 함

* 1 회 이상 반복을 의미하는 (하나는 있어야 대응됨 )

/e?le?/

e 나와도 되고 안나와도 되고 나올거면 한 번만
l 은 나와야 되고
e 는 있거나 없거나, 나올거면 한 번만

? 만약 수량자 바로 뒤에 사용되면, 기본적으로 탐욕스럽던 수량자를 탐욕스럽지 않게 만든다.

/\d+/숫자 문자가 한 개 이상 나오는 패턴을 찾는 것 (가능 한 많이)
? 붙이면 가능한 한 적게 찾도록 만든다.

원래는 탐욕스럽던 수량자를 가능한 적게 찾도록 만들 수 있다.
이 기능은 유용하게 쓰임 그래야 하는 이유가 있다. 수량자를 쓸 때 거의 ? 를 붙인다.

. 문자는 개행 문자를 제외한 모든 단일 문자와 대응 됩니다. 다만 엔터 빼고

[정규 표현식 예제](https://regexr.com/3cpbs)
정규표현식 책
한 권으로 끝내는 정규표현식 / 인터넷에서 복사해서 써라

()를 잘 써야 된다.

단어문자가 아닌것들이 등장하면 단어경계

보통은 match search

정규식 실행결과 읽어보기

case sensitive
case insesnitive

i flag case insensitive

[form validation](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation#Validating_against_a_regular_expression)

form 에도 정규표현식을 쓸 수 있는 기능이 내장되어 있다.
실습예제

```js
"hello";
"world";
"java";
"script";
"hello";
"world";
"java";
"script";
"hello";
"world";
"java";
"script";
"hello";
"world";
"java";
"script";
```

"(.+?)"
'$1'

코드 에디터에서 사용할 수 있다.

```js
// 숫자 문자와 일치하는 패턴: \d
"1".match(/\d/);
"asdf".match(/\d/); // null
// 'hello*world'.match(/*/) 문법오류
"hello*world".match(/\*/);

"a1234f g".match(/^g/); // ^ 문자열 시작부분을 나타내는 패턴
"An B".match(/^A/); // 대응되는 부분이 있음

"eat".match(/t$/);
"eat".match(/a$/); // null

"ac".match(/ab*c/);
"ac".match(/ab+c/); // null

"ac".match(/ab*c/);

"ac".match(/ab?c/);
"abc".match(/ab?c/);
"abbbbbc".match(/ab?c/);

"123abc".match(/\d+/);
"123abc".match(/\d+?/);

"ba".match(/./);
"<hello>world".match(/\<.+\>/); //정규표현식과 패턴과 맞는 부분이 있는지 없는지 match
// 여는 꺽쇠 괄호 뒤에 1개 이상의 문자가 오고, 그 다음에 닫는 꺽쇠 괄호가 나오는 패턴
//. 쓸모가 많음 사이에 들어오는 문자는 무엇이든 상관없음

// 숫자만 있고 싶다면,
"<hello>world".match(/\<\d+\>/); // null
"<1234>world".match(/\<\d+\>/);

// hello를 가져오고 싶다.
"<hello>world <java>script".match(/\<.+\>/); // 가능한 한 많이 일치 시켜라. + 탐욕
"<hello>world <java>script".match(/\<.+?\>/); // ? 가능한 적게 일치시켜라
// back referenece
"foo".match(/(foo)/);
"foo foo".match(/(foo) \1/);
"foooo foooo".match(/(fo+) \1/);

"foo bar foo bar".match(/(foo) (bar) \1 \2/);

// 일부 매칭된 패턴을 따로 골라낼 수 있다.
"foo bar".match(/(foo) (bar)/);

"ksh@fastcampus.co.kr".match(/.+?@.+/);
"ksh@fastcampus.co.kr".match(/(.+?)@(.+)/);

// $1첫 번째 포획괄호 $2 두 번 째 포획 괄호
"ksh@fastcampus.co.kr".replace(/(.+?)@(.+)/, "아이디: $1, 도메인: $2");
//여러 중복된 코드를 다른 패턴으로 사용하면 편하다? 에디터에서

"1234 abbbbc 1234".replace(/ab*c/, /{$&}/);

// 찾아바꾸기 할 때 특정패턴에 일치하는 문자열을 찾아서 바꿀 수 있다.

// foo가 몇 번 등장하던, 그 패턴을 찾고 싶다.

"foofoofoo".match(/(foo)+/);
"foofoofoo".match(/(foo)*/);
"foofoofoo".match(/(foo)?/);
// 포획괄호에는
//1.부분표현식을 묶어주는 역할
//2. 그표현식에 일치된 문자열을 기억하는 역할

// 기억하고 싶지 않을 때 ?:
"foofoofoo".match(/(?:foo)*/);

"caaaaandy".match(/a{1,3}/);
"caaaaandy".match(/a{1,3}?/);

"caaaaandy".match(/a{1,}/);
"caaaaandy".match(/a+/);

"caaaaandy".match(/a{0,}/);
"caaaaandy".match(/a*/);

"caaaaandy".match(/a{0,1}/);
"caaaaandy".match(/a?/);

// 저부분은 한 문자와 대응이 되는 패턴 a|b|c와 일치하는 하나의 문자와 대응되는
// a b c아무거나 상관없으니까 연속되어있는
"abccabbbcdef".match(/[abc]+/);

// . 이나 * 같은 특수문자는 문자셋 안에서는 특수문자가 아니다 \이스케이프 시켜줄 필요가 없다.
"hello*****world".match(/[*]+/);
"hello*****world".match(/\*+/);

'hello*.!"**...!**world'.match(/\*+/);

//연속된 소문자 알파벳 찾아내기

"hello world".match(/[abcdefgh.....z]/);
"Hello world".match(/[a-z]/);

"hellp WORLD".match(/[A-Z]+/);
"hello 안녕하세요 hello".match(/[가-힣]+/);
"hello 9203958935".match(/[0-9]+/);

"hello WORLD".match(/[^a-z]+/);

"moon ".match(/oon\b/);

// 공백을 모두 제거하기
// g 싹 없애겠다
"hello    world    java    script".replace(/\s/g, "");

// 문서에 나오는 모든 단어를 골라내고 싶다.
"hello   world   java   script".match(/\w+/);

"hello   world   java   script".match(/\w+/g);

"HELLO WORLD".match(/[a-z]+/i)// ^: 문자열의 첫 부분에 대응 // m 플래그를 붙이지 않았을 때
// 붙이면
// 줄의 첫 부분에 대응
`Hello
World
Java
Script`.match(/^\w+/gm);
// 뒤에 플래그를 붙이면 구성요소의 의미가 바뀌는구나

// 핸드폰 번호 입력

const input = "010-5599-2807";
//^ 문자열시작부분부터 검사를 하겠다. 010 016~ 중에 하나가 와야 한다.
// $ 여기서 문자열이 끝나야만 일치된 것으로 보겠다.
input.match(/^01[016789]-\d{3,4}-\d{4}$/);

//
```

선생님 레플 예제

```js
// 문자열 래퍼 객체(String)의
// match, search, split, replace 메소드가 정규 표현식을 지원
"Hi, do you know your abc's?".match(/abc/);
"Hi, do you know your abc's?".search(/abc/);
"Hi, do you know your abc's?".split(/abc/);
"Hi, do you know your abc's?".replace(/abc/, "ABC");
"1234 abbbbbc 1234".match(/ab*c/);
"1234 abbbbbc 1234".search(/ab*c/);
"1234 abbbbbc 1234".split(/ab*c/);
"1234 abbbbbc 1234".replace(/ab*c/, "{$&}");

// 숫자 문자와 일치하는 패턴: \d
"Hello World".match(/\d/); // null
"Hello World 1234".match(/\d/); // [...]
"Hello*World".match(/\*/);

"an A".match(/^A/);
"An B".match(/^A/);

"eater".match(/t$/);
"eat".match(/t$/);

"ac".match(/ab*c/);
"ac".match(/ab+c/);
"abbbbbbbc".match(/ab+c/);
"abbbbbc".match(/ab?c/);

"123abc".match(/\d+?/);

// 여는 꺾쇠 괄호 뒤에 1개 이상의 문자가 오고,
// 그 다음에 닫는 꺾쇠 괄호가 나오는 패턴
// 괄호 사이에 들어오는 문자는 무엇이든 상관없지만,
// 가능한 적게 찾아라
"<hello>world <java>script".match(/\<.+?\>/);

"foo foo".match(/(foo) \1/);
"foooo foo".match(/(fo+) \1/); // null
"foooo foooo".match(/(fo+) \1/); // [...]

"foo bar foo bar".match(/(foo) (bar) \1 \2/);

"foo bar".match(/(foo) (bar)/);

"ksh@fastcampus.co.kr".match(/(.+?)@(.+)/);
"ksh@fastcampus.co.kr".replace(/(.+?)@(.+)/, "아이디: $1, 도메인: $2");

"1234 abbbbbc 1234".replace(/ab*c/, "{$&}");

"foofoofoo".match(/(foo)?/);
"foofoofoo".match(/(foo)+/);

// 포획 괄호: 부분 표현식을 하나의 단위로 취급하는 기능
//          + 대응된 문자열을 기억하는 기능
"foofoofoo".match(/(foo)*/);

// 비포획 괄호: 부분 표현식을 하나의 단위로 취급하는 기능
"foofoofoo".match(/(?:foo)*/);

"caaaandy".match(/a{1,3}/);
"caaaandy".match(/a{1,3}?/);

// 같은 의미
"caaaandy".match(/a+/);
"caaaandy".match(/a{1,}/);

"caaaandy".match(/a*/);
"caaaandy".match(/a{0,}/);

"caaaandy".match(/a?/);
"caaaandy".match(/a{0,1}/);

// 문자셋
// a 또는 b 또는 c와 일치하는 하나의 문자와 대응되는 패턴
"abcdef".match(/[abc]/);
"abcabcbacbacbcabcabcabdef".match(/[abc]+/);

"hello*****world".match(/\*+/);
"hello*****world".match(/[*]+/);

"hello*.!'***...!!!world".match(/[*.!']+/);

// 연속된 소문자 알파벳 찾아내기
"hello world".match(/[abcdefghijklmnopqrstuvwxyz]+/);
"hello world".match(/[a-z]+/);

"hello WORLD".match(/[A-Z]+/);
"hello 안녕하세요".match(/[가-힣]+/);
"hello 88881235132".match(/[0-9]+/);

"hello WORLD".match(/[^a-z]+/);

"moon ".match(/oon\b/);

// 공백 모두 제거하기
"hello    world   java    script".replace(/\s/g, "");

"hello    world    java   script".match(/\w+/g);

"HELLO WORLD".match(/[a-z]+/i);

// m 플래그를 붙이지 않았을 때
// ^ : 문자열의 첫 부분에 대응
`Hello
World
Java
Script`.match(/^\w+/g);

// m 플래그를 붙였을 때
// ^ : 줄의 첫 부분에 대응
`Hello
World
Java
Script`.match(/^\w+/gm);

const input = "010-1010-5678";

input.match(/^01[016789]-\d{3,4}-\d{4}$/);
```
