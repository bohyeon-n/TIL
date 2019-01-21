# typescript

## 타입스크립트 설치

`npm install -g typescript`

접근 권한 없음 나옴

`sudo npm install -g typescript`

sudo 관리자 권한으로 실행시킴

vscode 터미널에서 tsc 실행하니 `tsc not found` 나옴 ...

**이슈**

- 터미널에서는 되는데 vscode에서는 안되는 이유?
  => bash PATH 설정을 알아보기
  => PATH=\$PATH:
  => echo \$PATH를 확인해보기

- 다른 패키지는 설치가 되는데 왜 타입스크립트만 관리자 권한으로 설치해야 할까
  => 갑자기 됨 .... ????? 뭐지

- 그 전에 설치했는데 왜 다시 설치해주어야 하는걸까

`tsc file.ts`를 입력하면 타입스크립트 코드로 작성한 타입스크립트 코드가 자바스크립트 코드로 변환된다.

## 타입스크립트 알아보기

```ts
function greeter(person: string) {
  return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);
```

### type annotaion

type annotation은 함수나 변수를 작성 시 의도한 바를 기록해 놓을 수 있으며 의도한 대로 사용하지 않았을 시 에러가 발생한다.

```ts
let user = [0, 1, 2, 3];
```

```shell
Argument of type 'number[]' is not assignable t
o parameter of type 'string'.
```

하나의 매개변수로 설정한 함수에 아무런 매개변수를 넣지 않고 실행하면 an argument for 'person' was not provided 에러가 발생한다.

### clmasses

타입스크립트는 클래스 기반, 객체지향 프로그래밍을 서포트하기 위한 새로운 기능을 제공한다.

constructor 인자에 public 은 자동으로 이름의 프로퍼니를 자동으로 생성하는 속기법이다.

```ts
class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello" + person.firstName + " " + person.lastName;
}
let user = new Student("jane", "m", "user");

document.body.innerHTML = greeter(user);
```

## Basic types

자바스크립트랑 동일한 타입을 서포트한다.

### boolean

가장 기초 데이터타입은 간단한 true/false 값으로 boolean 값이라 부른다.

```ts
let isDone: boolean = false;
```

### Number

자바스크립트처럼 타입스크립트도 모든 숫자는 부동소수점 값이다. es6에서 소개한 십진법, 16진법, 2진법, 8진법도 지원한다.

```ts
let decimal: number = 6;
let hex: number = Oxf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

### String

다른 언어에서, 텍스트 데이터를 사용하기 위해 string 타입을 사용한다. 타입스크립트 또한 double quotes(") 나 single quotes(')를 사용하여 문자열 데이터를 둘러싼다.

```ts
let color: string = "blue";
color = "red";
```

여러 줄에 걸쳐 표현식을 포함할 수 있는 templates string을 사용할 수 있다. 이 문자열은 백틱으로 둘러싼다.

### Array

타입스크립트는 자바스크립트와 바찬가지로, 배열 타입은 두가지 방법으로 작성할 수 있다.

1. 첫 번째 방법은 배열 엘리먼트의 속성을 정의한 후 []을 표시해주는 방법

```ts
let list: number[] = [1, 2, 3];
```

2. 두 번째 방법은 일반적인 array 타입을 사용하는 것이다.

```ts
let list: Array<number> = [1, 2, 3];
```

### Tuple

튜쁠 타입은 고정된 요소 수의 타입을 표현할 수 있다. 배열안에 요소 두 개의 타입이 문자열이다. 이런식으로 표현할 수 있다.
예를들어 string 과 number 짝을 배열 값으로 표현한다면

```ts
let x: [string, number];
x = ["hello", 10]; //OK
x = [10, "hello"]; // Error
```

```ts
console.log(x[0].substr(1)); //substr 메소드는 string의 부분을 반환하는 함수이다.
//ello
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
```

정의하지 않은 요소에 접근할 때, 통합 타입이 대신 사용된다. 2번째 배열은 스트링이나 넘버 타입이면 된다.

```ts
x[3] = "world";
console.log(x[5].toString());
x[6] = true; //Error
```

### Enum

enum은 숫자 값 셋에서 더 친숙한 이름을 지정하는 방법이다.

```ts
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;
```

기본적으로 enum은 그들의 숫자를 0에서부터 넘버링한다. 직접 이 세팅을 바꿀 수 있다. 예를들어 0 대신에 1부터 시작할 수 있다.

```ts
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4
}
let c: Color = Color.Green;
```

eunm의 편리한 기능은 숫자값에서 enum 값의 이름으로 이동할 수 있다는 것이다 . 예를들어 우리가 값 2를 가지고 있다. 그러나 Color에 어떻게 매핑된지 모르겠다면 일치하는 이름을 찾아볼 수 있다.

```ts
enum Color {
  Red = 1,
  Grren,
  Blue
}
let colorName: string = Color[2];

console.log(colorName);
```

### Any

애플리케이션을 작성할 때, 우리가 모르는 변수의 타입을 설명하는 것이 필요할지도 모릅니다. 값은 사용자나 라이브러리등 다이나믹한 컨텐츠에서 나왔을 수도 있습니다. 이런 경우, 우리는 데이터 타입을 검사하는 것을 건너 뛰고 값이 compile-time checker을 통해 전달되기를 원합니다. 그렇게 하기 위해서 이들을 any 타입으로 분류한다.

```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // 데이터 타입을 설정하지 않았으므로 어떤한 타입도 지정할 수 있다.
```

any 타입은 기존의 자바스크립트에서 작업하는 강력한 방법이다. 컴파일링 하는 동안 점차 opt-in과 opt-out 할 수 있다. Object 같은 방식으로 동작한다고 생각할 것입니다. 다른 언어가 그렇듯이. 그러나 object 타입의 변수는 어떤 값만 할당하는 것을 허용합니다. 임의의 메소드를 호출할 수 없습니다. 실제로 존재하더라도

```ts
let notSure: any = 4;
notSure.ifItExists();
notSure.toFixed();

let prettySure: Object = 4;
prettySure.toFixed(); //Error
```

또한 any타입은 타입의 몇몇 부분을 알면 쉽다. 그러나 모두 그런것은 아니다. 예를들어 배열이 있고, 이 배열이 서로 다른 데이터 타입을 믹스해 가지고 있는 경우이다.

```ts
let list: any[] = [1, true, "free"];
list[1] = 100;
```

### Void

`void`는 어떤 타입도 가지고 있지 않은 any와는 다르다. 흔히 값을 리턴하지 않는 리턴 타입의 이 함수를 보았을 것이다.

```ts
fucntion warnUser(): void{
    console.log('this is my warning message' )
}
```

함수가 아무것도 반환하지 않으므로 리턴 타입을 void로 설정하였다.

void 타입으로 변수를 선언하는 것은 undefined 나 null만 지정할 수 있기 때문에 유용하지 않다.

```ts
let unusable: void = undefined;
```

### Null and Undefined

타입스크립트에서 undefiend와 null은 사실 자신의 데이터 타입인 undefined와 null을 각각 가지고 있습니다. void와 마찬가지로 극히 유용하진 않습니다.

```ts
let u: undefiend = undefined;
let n: null = null;
```

기본적으로, null과 undefined 는 모든 다른 타입의 서프 타입입니다. 이 말은 number와 같은 어떤 것에게 null과 undefiend를 할당할 수 있다는 것입니다.

그러나, `--strictNullCheck` 플래그를 사용할 때, null과 undefined는 오직 void와 그들의 각각 다입에게 할당 할 수 있습니다. 이는 일반적인 에러를 방지할 수 있습니다. string, null, undefined 모두 전달하고 싶은 경우, 통합 타입인 `string | null | undefined` 를 사용할 수 있습니다.

> as a note: 가능한 한 `--strictNullChecks`를 사용하는 것을 권장합니다.

### Never

`never`타입은 절대 일어나지 않는 타입 깂을 표현합니다. 예를들어 never은

`never`타입은 부속 타입이며, 모든 타입에 할당할 수 있다. 그러나 never자신을 제외하고 어떠한 타입도 할당할 수 있는 타입이 없다. 심지어 `any`는 `never`에 할당할 수 없다.

```ts
// never을 리턴하는 함수는 도달할 수 없는 end point가 있어야 한다.
function error(message: string): never {
  throw new Error(message);
}
// inferred return type is never
function fail() {
  return error("something failed");
}
// function returning never must hava unreachable end point
function infiniteLoop(): never {
  while (true) {}
}
```

### object

object는 non-primitive type이다. 예를들어 `number`, `string`, `boolean` `symbol`, `null`, `undefined` 이 아닌 것들

object 타입은 `Object.create`같은 API에서 더 잘 표현한다. 예를들어

```ts
declare function create(o: object | null): void;
create({ prop: 0 }); // OK
create(null); // OK

create(42); //Error
create("string"); //Error
create(false); //Error
create(undefined); //Error
```

### type assertions

때때로 타입스크립트가 하는 것 보다 더 많은 값에 대해 아는 상황이 올 수 있다. 보통 어떤 전체 의 타입을 알 때 그것의 현재 타입보다 더 자세히 알 때 ?

type assertion 은 컴파일러에게 '믿어, 나는 내가 뭘 하는지 알고 있어'라고 말하는 방법이다. type assertion 다른 언어에서 type cast지만 특별한 체킹을 하거나, 데이터를 재구성하지 않는다.타입스크립트는 프로그래머가 필요한 어떤 스페셜 체크를 수행한다.

type assertion 두개의 폼을 가지고 있다. 하나는 'angle-bracket' 구문이다.

```ts
let someVlaue: any = "this is a string";

let strLength: number = (<string>someVlaue).length;
```

다른 하나는 as - 구문이다.

```ts
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```

두 샘플은 동일하다. 더 맘에 드는 것을 선택하여 사용하면 된다. 그러나 jsx문법에서 타입스크립트를 사용할 때는 -as 스타일만 허용된다.

### A note about let

알았겠지만 지금까지 `let`키워드를 사용하였다. 익숙한 자바스크립트의 `var`키워드 대신에. `let`키워드는 사실 자바스크립트의 새로운 컨스트럭트이다. 자세한 사항은 다음에 얘기하자. 그러나 자바스크립트에서 많은 공통적인 문제는 `let` 을사용하여 줄일 수 있다. 그래서 가능하면 `var`키워드 대신 `let`키워드를 사용해라.
