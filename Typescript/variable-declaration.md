# Variable Declarations

## Variable Declarations

`let`과 `const`는 새로운 자바스크립트 변수 선언이다. 전에 언급했듯이, 어떤 면에서 `let`은 `var`와 유사하다. 그러나 자바스크립트에서 실행하는 일반적인 'gotchas'를 피할 수 있다?(실수, 오류를 피할 수 있다. `const`로 선언한 변수는 재할당을 할 수 없다.

자바스크립트의 슈퍼셋인 타입스크립트는 `let`과 `const`를 지원한다. 새로운 변수 선언과 왜 `var`키워드를 더 선호하는지 알아본다.

### var declarations

자바스크립트의 변수 선언은 항상 전통적으로 `var`키워드를 사용하였다.

```js
var a = 10;
```

변수 `a`를 값 10로 선언하였습니다.

우리는 함수 안에서 변수를 선언할 수 있습니다.

```js
function f() {
  var message = "Hello, world";

  return message;
}
```

또한 같은 변수에 다른 함수 안에서 접근할 수 있습니다.

```js
function f() {
  var a = 10;
  return function g() {
    var b = a + 1;
    return b;
  };
}
var g = f();
g(); //return '11'
```

위 예시에서, `g`는 변수 함수 `f`안에서 선언한 `a`를 캡쳐 했다. `g`를 호출하면 언제든지 `f`함수 안에 있던 `a`는 묶일 것이다. `f`함수의 실행이 종료된 후에 `g`를 호출하더라도, `a`변수에 접근하고 수정할 수 있다.

```js
function f() {
  var a = 1;

  a = 2;
  var b = g();
  a = 3;
  return b;
  function g() {
    return a;
  }
}
f(); // returns 2
```

#### scoping rules

자바스크립트의 `var` 선언은 다른 언어에 익숙한 사람들에게는 이상한 스코프 룰을 가지고 있다. 다음 예시를 보자.

```js
function f(shouldInitialize: boolean) {
  if (shouldInitialize) {
    var x = 10;
  }
  return x;
}
f(true); // returns '10'
f(false); // returns 'undefined'
```

if 블록 안에서 x를 선언하였고 블록 바깥에서 접근할 수 있다. `var`로 선언한 변수는 함수, 모듈, 네임스페이스나 전역 스코프에서 접근할 수 있기 때문이다. 몇몇 사람들은 이를 var -scoping 또는 function-scoping 이라 부른다. 매개변수 또한 함수 스코프이다.

이러한 스코프 규칙은 몇몇 타입 실수를 야기할 수 있다. 이들을 악화시키는 한 가지 문제는 여러번 같은 변수를 선언하는 것이 에러가 아니라는 것이다.

```ts
function sumMatrix(matrix: number[][]) {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (var i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }
  return sum;
}
```

내부 for 루프는 `i`가 같은 함수 스코프 변수이기 때문에 뜻하지 않게 i를 덮어씌우게 된다.

#### variable capturing quicks

다음 코드의 출력결과가 어떻게 될지 예측해봐라.

```ts
for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100 * i);
}
```

setTimeout 은 설정한 밀리세컨드 후에 함수를 실행시킨다.

```
10
10
10
10
10
10
10
10
10
10
```

대부분의 사람들은 다음과 같이 결과를 예측할 것 것이다.

```
0
1
2
3
4
5
6
7
8
9
```

우리가 setTimeout에 전달한 모든 함수 표현은 사실 같은 같은 스코프로부터 나온 i를 가리키고 있다.

이것이 무슨 의미인지 생각해보자.

setTimeout은 인자로 받은 함수를 몇 밀리세컨드 후에 실행시킨다. 그러나 for loop는 실행이 멈춘 후에만 실행이 된다. setTimeout 일단 큐에 들어가서 실행이 완료되면 이벤트 루프에 들어가 스택이 비워지기 만을 기다리게 된다. 스택이 비워지면 실행이 되기 때문에 for loop가 실행이 끝나기 전에는 실행되지 않는다. 실행이ㅜ 끝난 후에는 i가 10이다. setTimeout의 시간 값을 0으로 주어도 모두 10으로 출력된다.

일반적인 해결은 IIFE를 사용하는 것이다. 즉시 호출되는 함수 표현식이다. i 를 각 이터레이션에 캡쳐하고 위해서

```js
for (var i = 0; i < 10; i++) {
  // capture the current state of 'i'
  // by invoking a function with its current value
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, 100 * i);
  })(i);
}
```

이 이상해 보이는 패턴은 실제로 매우 보편적이다. 매개변수 `i`는 사실 for loop 안에서 선언한 i를 shadow 한다. 그러나 그들을 동일하게 네임드했기 때문에, 루프 바디를 과도하게 수정할 필요가 없다.

### let declarations

지금까지`var`이 문제점을 알아보았고 이것이 왜 `let` 구문이 소개된 이유입니다.

```ts
let hello = "hello!";
```

주요 차이점은 구문에 있는게 아니라, 의미에 있다.

#### block-scoping

`let`을 사용하여 변수가 선언되었을 떄, 렉시컬 스코핑이나 블록 스코핑을 사용하는. 스코프가 그들을 포함하는 함수, 블록 스코프 변수에 누출하는 `var` 변수와는 달리, 블록 스코프 변수는 그들의 가까운 포함 블록이나 for 루프에서 볼 수 없습니다.

```ts
function f(input: boolean) {
  let a = 100;
  if (input) {
    let b = a + 1;
    return b;
  }
  // Error: 'b' 여기에 존재하지 않음
  return b;
}
```

지역 변수 a와 b가 있다. a의 스코프는 f의 바디로 제한되어 있다. b가 if 구문 블록 포함에 제한되어 있는 동안

catch절 안에서 선언된 변수는 유사한 스코핑 규칙을 가지고 있다.

```ts
try {
  throw "oh no!";
} catch (e) {
  console.log("oh well.");
}
// Error: 'e' doesn't exist here
console.log(e);
```

**렉시컬 스코프?**
스코프는 함수를 호출할 때가 아니라 선언할 때 생긴다. 정적 스코프라고도 불린다. 이런것을 렉시컬 스코핑이라고 한다. 함수를 처음 선언하는 순간, 함수 내부의 변수는 자기 스코프로부터 가장 가까운 곳에 있는 변수를 계속 참조하게 된다.
[함수 범위(scope)](https://www.zerocho.com/category/JavaScript/post/5740531574288ebc5f2ba97e)
