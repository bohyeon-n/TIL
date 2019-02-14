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

catch절 안에서 선언된 변수도 유사한 스코핑 규칙을 가지고 있다.

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

block-scoped의 다른 속성은 실제로 선언되기 전에는 읽거나 쓸 수 없다는 것이다.

```ts
a++; // illegal to use 'a' before it's declared;

let a;
```

주의해야 할 점은 변수가 선언되기 전에 여전히 block-scope 변수를 capture 할 수 있다는 것이다. 오직 catch만 선언되기 전에 함수를 호출할 수 없다. es2015 타겟팅이라면, 모던 런타임은 에러가 발생할 것이다. 그러나 타입스크립트는
허용하고 에러가 발생하지 않는다.

```ts
function foo() {
  // okay to capture 'a'
  return a;
}
//illegal call 'foo' before 'a' is declared
// runtimes should throw an error here
foo();

let a;
```

#### Re-declarations and shadowing

`var`변수 선언는 변수를 얼마나 여러 번 선언하는지는 문제되지 않는다.

```ts
function f(x) {
  var x;
  var x;
  if (true) {
    var x;
  }
}
```

위 예시에서, x의 모든 선언은 실은 같은 x를 가리킨다. 그리고 이는 완전히 유효하다. 이는 버그의 원인이 되기도 한다.
고맙게도,`let` 선언은 이를 허용하지 않는다.

```ts
let x = 10;
let x = 20; // error: 같은 스코프에서 x를 다시 선언할 수 없다.
```

```ts
function f(x) {
  let x = 100; // error: interferes with parameter declaration
}
function g() {
  let x = 100;
  let x = 100; // error: can't have both declaration of 'x';
}
```

블록 스코프 변수가 함수 스코프 변수로 절대 선언할 수 없다는 말은 아니다.

```ts
function f(condition, x) {
  if (condition) {
    let x = 100;
    return x;
  }
  return x;
}

f(false, 0); // return '0'
f(true, 0); // return '100'
```

보다 중첩된 스코프 안에서 새로운 이름을 소개하는 것을 shadowing 이라 부른다. 이것은 양날의 검이다. 우발적인 shadowing 이 자체에서 특정 버그가 발생할 수 있다. 특정 버그를 막는 막는 동안에. 예를들어 sumMatrix() 함수가 `let`변수를 쓴다고 해보자.

```ts
function sumMatrix(matrix: number[][]) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (let i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }
}
```

루프의 버전은 실제로 정확히 합산되어 수행될 것이다. 왜냐하면 안쪽 루프의 i가 바깥 쪽 루프의 i를 가렸기 때문이다.

shadowing은 보통 클린 코드를 작성하기 위해 피해야 한다.

#### block-scope variable capturing

먼저 `var`선언 변수 캡쳐링을 다뤘을 때, 우리는 일단 캡쳐 되었을 때, 변수가 어떻게 동작하는지 간단히 알아보았습니다. 이에 대해 더 나은 직관을 주기위해, 변수의 환경을 생성하였다.
환경과 캡쳐된 변수는 스코프내의 모든 것이 실행을 끝난 후에도 존재할 수 있습니다.

```ts
function theCityThatAlwaysSleeps() {
  let getCity;
  if (true) {
    let city = "Seattle";
    getCity = function() {
      return city;
    };
  }
  return getCity();
}
```

if 블록이 끝나도 if블록 안에서 getCity함수를 통해 city를 캡쳐했으므로 if 블록 실행이 끝난 후에도 city
변수에 접근할 수 있다.

전에 setTimeout 예시를 다시 생각해보면, 우리는 결국 for loop 의 매 반복마다 변수의 상태를 캡쳐하기 위해 IIFE를 사용했다.  
사실상, 우리가 한 일은 캡쳐된 변수를 위해 새로운 변수 환경을 생성한 것이다.

`let`선언은 루프의 일부로 선언될 때 전혀 다른 방식을 가지고 있다. 루프 자체 의 새로운 환경을 도입하는 것 보다는, 이 선언은 이터레이션마다 새로운 스코프를 생성한다.

```ts
for (let i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i), 100 * i;
  });
}
```

### const declarations

const 선언은 변수를 선언하는 또다른 방법이다.

let 선언과 유사하지만, 이름에도 내포되어 있듯이, 값이 한 번 묶이면, 바꿀 수 없다. 다른말로, let처럼 같은 스코핑 룰을 갖고 있지만, 다시 할당할 수 없다.

```js
const numLivesForCat = 9;
```

```js
const numLivesForCat = 9;
const kitty = {
  name: "aurora",
  numLives: numLivesForCat
};
// error
kitty = {
  name: "danielle",
  numLives: numLivesForCat
};
// all 'okay'
kitty.name = "rory";
kitty.name = "kitty";
kitty.numLives--;
```

위 같은 상황을 막기 위한 특별한 조치를 하지 않으면, `const`변수의 내부 상태는 수정 가능하다. 다행히도, 타입스크립트는 객체의 멤버를 `readonly`로 지정할 수 있다.

### let vs const

유사한 스코핑을 가지고 있는 두 가지 타입의 선언을 고려하면, 어떤 것을 써야 하는지 궁금할 것이다.

principle of least privilege를 적용하면, 수정할 변수가 아닌 것들은 모두 `const` 선언을 사용해야 합니다.
원리는 변수가 쓰여질 필요가 없다면 같은 코드 베이스의 다른 작업도 자동적으로 객체에 쓸 수 없다. 실제로 변수를 할당해야 하는지 고려해야 할 필요가 있다.
`const`를 사용하면 데이터 흐름에 관해 더 예측 가능하게 할 수 있다.

#### Destructuring

타입스크립트의 ECMAScript 2015 다른 기능은 dstructing 이다.

- Array destructuring

```ts
let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2
```

```ts
first = input[0];
second = input[1];
```

함수의 파리미터에도 사용할 수 있다.

```ts
function f([first, second]: [number, number]) {
  console.log(first);
  console.log(second);
}
f([1, 2]);
```

... 구문을 사용하여 남은 remaining item을 생성할 수 있다.

```ts
let [first, ...rest] = [1, 2, 3, 4];
console.log(first); //1
console.log(rest); // [2,3,4]
```

- object destructuring

```ts
let o = {
  a: "foo",
  b: 12,
  c: "bar"
};
let { a, b } = o;
```

```ts
let { a, ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;
```

- property remaining

속성에 다른 이름을 줄 수 있다.

```ts
let { a: newName1, b: newName2 } = o;
```

```ts
let { a, b }: { a: string; b: number } = o;
```

- default values

```ts
function keepWholeObject(wholeObject: { a: string; b?: number }) {
  let { a, b = 1001 } = wholeObject;
}
```

keetWholeObject wholeObject 변수가 있다. a와 b, b가 정의되지 않은 경우에도

- function declarations
  destructuring 은 함수 선언에서도 사용할 수 있다.

```ts
type C = { a: string; b?: number };
function f({ a, b }: C): void {
  //...
}
```

그러나, 디폴트로 지정하는 것이 더 일반적이고, destructuring 과 디폴트를 바르게 얻는 것은 까다롭다. 먼저, 디폴트 값 전에 패턴을 놓자.

```ts
function f({ a = "", b = 0 } = {}): void {
  //...
}
f();
```

위 코드는 타입 inference(추론?)의 예이다. 추후에 설명하겠다.

그런다음, main initializer 대신에 destructured property에 optional property의 디폴트를 주어야 한다. C는 b옵션으로 정의되어 있다.

```ts
function f({ a, b = 0 } = { a: "" }): void {
  //...
}
f({ a: "yes" }); // ok, default b = 0
f(); // ok, default to { a: "" }, which then defaults b = 0
f({}); // error, 'a' is required if you supply an argument
```

- spread

스프레드 연산자는 destructuring 의 반대 이다. 다른 배열에 배열을 혹은 다른 객체에 객체를 스프레드 할 수 있다.

```ts
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
```

```ts
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
```

객체 스프레드는 배열 스프레드보다 더 복잡하다. 배열스프레드처럼 왼쪽에서 오른쪽으로 실행하지만, 결과는 객체이다. 스프레드 객체에서 나중에 오는 속성이 먼저 오는 프로퍼티를 오버라이트한다.

```ts
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { food: "rich", ...defaults };
```

객체 스프레드는 다른 놀라운 제한이 있습니다. 먼저, 오직 object의 고유한 enumberable propery만을 포함할 수 있습니다. 기본적으로 객체의 인스턴스를 스프레드 할 때, 메서드를 잃는 다는 말입니다.

```ts
class C {
  p = 12;
  m() {}
}
let c = new C();
let clone = { ...c };
clone.p; //ok
clone.m(); // error !
```
