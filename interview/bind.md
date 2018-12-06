- 서론: 바인드가 왜 필요한가?
- 본론: 바인드
  - 바인드의 정의
  -
  -
  ...
- 결론

# bind

understanding javascript bind()

바인드 함수는 this 의 문맥을 유지하는 것이 필요하다.
this 는 함수가 어디에서 호출되는지에 달려있따.
프로그래머들은 걱정했다. 함수가 선언된다. 특정파일이나 특정 객체에서 선언 될 때 확실히 this 를 바꿔주는 것에 대해서
this 를 이해하기 위해서는 언제 호출되는지 알아야 한다.
암시적 바인딩

```js
const myObject = function() {
  this.name = "bohyeon";
  this.myProperty = "property";
};
myObject.prototype.doStuff = function(action) {
  console.log(`${this.name} is ${action} `);
};

const obj = new myObject();
obj.doStuff("awesome"); //bohyeon is awesome
```

암시적 바인딩은 .왼쪽에 뭐가 있던, 함수의 문맥이 된다?

명시적 바인딩

.call() & .apply()

`myFunc.call(thisContext, param1, param2, ...);`

```js
const runner = { name: "bohyeon", myFavoriteActivity: "running" };

myObject.prototype.doStuff.call(runner, runner.myFavoriteActivity);
```

.call
무시할 수 있다 dot 전에 보이는 것을 function 을 call 할 때
myObject 메소드를 사용할 수 있다. 호출할 수 있다. 메소드의 디스를 다른 문맥으로

this context 뒤에 배열로 매개변수를 배열로 넘겨주는 것을 제외하고는 .apply() 또한 같다.
`myFunc.apply(thisContext, [param1, param2, ...])

.bind()
함수를 호출 할 때, bind() sets a this context and return a new function of the same name with a bound this context

```js
const sayMyName = function() {
  console.log(`My name is ${this.name}`);
};

const jake = {
  name: "jake"
};

sayMyName = sayMyName.bind(jake);
```

sayMyName 을 호출할 때마다, 우리는 'jake'문맥을 얻게 될 것이다.
왜냐하면 this 가 묶였기 대문이다. 거슬러 올라가서 어디에 묶여 있는지 확인해야 한다. (호출을 어디서 하는지가 상관이 없기 때문에 묶인 시점으로 찾아가서 봐야 한다. )

callback and this

```js
var MyObject = function() {
  this.name = "MyObjectName";
  this.myProperty = "property";
};

MyObject.prototype.doStuff = function(action) {
  console.log(this.name + " is " + action + "!");
};

var obj = new MyObject();

setTimeout(obj.doStuff, 1000, "awesome"); // prints ' is awesome!' after a 1 second delay.
```

name 이 정의되지 않았다.
obj.doStuff 는 . 을 가지고 있다. 그런데 왜 출력이 되지 않았을까?
obj.doStuff 는 콜백으로 전달되엇다. setTimeout 함수에
우리가 이 것을 호출하는 것이 아니다.

```js
var MyObject = function() {
  this.name = "MyObjectName";
  this.myProperty = "property";
};

MyObject.prototype.doStuff = function(action) {
  console.log(this.name + " is " + action + "!");
};

var obj = new MyObject();

setTimeout(obj.doStuff.bind(obj), 1000, "awesome"); // prints 'MyObjectName is awesome!' after a 1 second delay.
```

위 경우에는 콜백을 묶었다. myObject 의 this context 에
콜백함수가 나중에 호출될 때 이 때의 this context 를 가져올 수 있다.

[참고자료](https://gist.github.com/zcaceres/2a4ac91f9f42ec0ef9cd0d18e4e71262)

this 는 현재 실행 문맥이다.
실행문맥이란 말을 호출자가 누구냐는 것이랑 같다.

```js
const caller = {
  f: function() {
    console.log(this === window);
  }
};
caller.f(); // false, 호출자는 caller객체이다.
```

생성자 함수/ 객체에서는 어떻게 쓰이나?

생성자는 new 로 객체를 만들어서 사용하는 방식입니다.

```js
function People(name, age) {
  this.name = name;
  this.age = age;
  this.print = function() {
    console.log(`${name}의 나이는 ${age}입니다.`);
  };
}
const newObj = new People("bohyeon", 26); // 객체 생성

const newObj2 = new People("sewoon", 22); // 객체 생성
```

new 키워드로 새로운 객체를 생성했을 경우 생성자 함수 내의 this 는 new 를 통해 만들어진 새로운 변수가 된다.

```js
const person = {
  name: "bohyeon",
  age: "26",
  nickname: "bongbong",
  getName: function() {
    return this.name;
  }
};
console.log(person.getName());
const otherPerson = person;
otherPerson.name = "sewoon";
console.log(person.getName());
console.log(otherPerson.getName());
```

otherPerson 은 person 의 참조이다
참조?
참조 값은 참조 타입의 인스턴스이며 객체와 같은 말이다.
참조 타입은 할당된 변수에 값을 직접 저장하지 않는다. 그래서 object 에 저장된 값은 객체 인스턴스가 아니라 객체가 있는 메모리상 위치를 가리키는 포인터다.

javascript 에는 모두 일곱 가지의 타입이 존재한다.
참조란 객체가 컴퓨터 메모리 상에서 어디에 저장되어있는지를 가리키는 값, 화살표이다.
우리가 객체라고 생각하고 다루어왔던 값은 실제로 객체에 대한 참조이다.

```js
const obj = {}; // 변수 obj에는 객체에 대한 참조가 저장되었다.
// 객체와 참조를 생성해서 객체는 어딘가에 있고, obj변수에는 화살표(위치)를 저장하는 것이다.
```

자바스크립트는 call by value 가 아니라 항상 참조에 의한 호출인 call by reference 이다.

주인없는 this

this 는 생성자 혹은 메소드에서 객체를 가리킬 때 사용하는 키워드이다. 하지만, 생성자나 메소드가 아닌 함수에서 this 키워드를 사용한다고 헤서 오류가 나지는 않는다.

this 사용

- 새로 만들어지는 객체에 생성자의 속성을 넣어줄 때 사용한다.
- 객체의 속성에 접근(메소드에서 사용하는 this)할 때

```js
function Person(name) {
  this.alert = name;
}
// new를 빠뜨린 채 생성자를 호출하면, this는 전역객체를 가리키게 된다(window)
Person("john");

console.log(window.alert); // john
alert("hello"); // error
// alert api에 대입해버림 오류가 남
```

this 는 호출되는 형태에 따라 다른 값으로 사용될 수 있다.

함수 객체의 bind 메소드를 호출하면, 메소드의 인수로 넘겨준 값이 this 가 되는 새로운 함수를 반환한다.
bind 를 사용하여 this 가 무엇을 가리킬 지 정할 수 있다.

화살표 함수
화살표 함수는 익명함수로만 만들 수 있다.
map filter reduce 함수 넘겨줄 때 익명함수를 많이 쓴다. 코드가 짧고 단순하기 때문이다.
화살표 함수는 생성자로 사용할 수 없다.
화살표 함수는 스스로의 this argument super 를 갖지 않는다.
화살표 함수 내부에서 yield 키워드를 사용할 수 없다. 즉, 제너레이터로 사용될 수 없다.

화살표 함수에서 this 가 무엇을 가리킬까 방식은 function 문법함수와는 다르다.
함수가 정의된 스코프에 존재하는 this 를 가리킨다.
바깥쪽 this 와 똑같은 this 가 된다.
화살표 함수는 생성될 때 this 가 결정된다.
어떻게 사용되건, 호출되건, 바뀌지 않는다.

function 문법: 호출되는 상황에 따라 디스가 결정된다.
화살표 함수: 어떻게 정의되느냐, 생성되느냐에 따라 결정된다.

```js
function introduce() {
  return `안녕하세요 ${this.name}입니다.`;
}
const person1 = {
  name: "bohyeon",
  introduce
};
person1.introduce();
```

화살표 함수는 스스로의 this 를 갖지 않는다.

call 메서드

1.  첫 번째 파라미터는 thisValue 입니다.
2.  두 번째 파라미터부터 그 이후 파라미터들을 이용해 파라미터 목록(argList)을 만듦니다.
3.  this 를 thisValue 로, argList 를 argument list 로 하여 함수를 호출합니다.

```js
function hello(thing) {
  console.log(`${this} say hello ${thing}`);
}

hello.call("bongbong", "world"); // bongbong say hello world
```

this 키워드를 사용하면, 메소드 호출 시에 해당 메소드를 갖고 있는 객체에 접근할 수 있다.

this 키워드가 실제로 무엇을 가리킬 것인가는, 메소드가 어떻게 정의되는가에 의해 결정되는 것이 아니라 메소드가 어떻게 사용되는가에 의해 결정된다.

메소드를 사용하면, 데이터와, 그 데이터와 관련된 동작을 객체라는 하나의 단위로 묶어서 다룰 수 있다.
이것이 함수 대신 메소드를 사용하는 핵심적인 이유이다.

화살표 함수는 디스 키워드를 전혀 다르게 취급하기 때문에 위와 같은 방식으로는 메소드로 사용될 수 없다.

의도치 않게 전역 객체의 속성이 변경되는 실수를 할 수 있다.

엄격모드
엄격모드를 사용하면 전역 객체 대신 undefined 를 반환한다.

es2015 모듈을 이용해 작성된 코드는 항상 엄격 모드로 동작하기 때문에, 함수 위에 'use strict'를 붙여주지 않아도 엄격모드로 동작한다.

this 는 때에 따라 다른 값을 가리킨다.
우리가 원하는 값을 가리키게 만들 수도 있다.
함수 객체의 bind, call, apply 메소드를 사용하면 된다.

call apply 메소드를 사용하면, 새로운 함수를 만들지 않고도 임시적으로 this 를 바꿔버릴 수 있다. call apply 는 인수를 넘겨주는 형식에 차이가 있을 뿐, 나머지 기능은 동일하다.

```js
function printGrade(grade) {
  console.log(`${this.name}님의 점수는 ${this.grade}입니다.`);
}
const student = { name: "boheyon" };
const printGradeForBohyeon = printGrade.bind(student);
printGradeForBohyeon(100);
```

https://blueshw.github.io/2018/03/12/this/

https://www.codementor.io/niladrisekhardutta/how-to-call-apply-and-bind-in-javascript-8i1jca6jp

https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26
