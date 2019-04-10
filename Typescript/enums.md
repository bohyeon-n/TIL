# Enums

##Enums

enums는 이름이 있는 상수들의 set을 정의할 수 있습니다. enums를 사용ㅎ은 문서의 의도나 명확한 사례들을 쉽게 만들 수 있습니다. 타입스크립트는 numberic과 string-based enums를 제공합니다. 

## Numeric enums 

먼저 numeric enums부터 시작합니다, 다른 언어에서 접해봤다면 더 친숙할 것입니다. enum은 `enum`키워드를 사용하여 정의할 수 있습니다. 

```ts
enum Direction {
  Up = 1, 
  Down, 
  Left, 
  Right, 
}
```
위에, Up은 1로 초기화 된 숫자 열거형을 사용합니다. 따라오는 모든 멤버는 자동 증가 됩니다. 다른말로, Direction.Up 은 1, Down은 2, Left는 3, Right 는 4입니다. 

만약 원한다면, 초기값을 완전히 없앨 수 있습니다. 

```ts
enum Direction {
  Up, 
  Down, 
  Left, 
  Right, 
}
```
여기서는 Up은 0, Down은 1입니다. 자동 증가 동작은 멤버의 값 자체에 신경쓰지 않고 동일한 enum에서 각 값을 다른 값과 구별할 수 있게 합니다. 

eunm을 사용하는 것은 간단합니다: enum자체의 속성으로 멤버에 엑세스 하고, enum의 이름을 사용하여 타입을 선언합니다

```ts
enum Response {
  No = 0,
  Yes = 1, 
}

function response(recipient: string, message: Response): void {
  //...
}

respond("Princess Caroline", Response.Yes)
```

Numberic enums 는 computed and constant members와 혼합될 수 있습니다. 
초기화가 없는 열거형은 상수 또는 다른 상수 열거형의 멤버로 초기화된 숫자 열거형을 따라야할 필요가 있습니다. 

다음은 허용되지 않습니다. 
```ts
enum E {
  A = getSomeValue(),
  B, // error ! 'A' is not constant-initialized, so 'B' needs an initializer 
}

```
### String enums

String enums 는 비슷한 컨셉이지만, 미묘한 runtime difference가 있습니다. sttring enum에서, 각 멤버는 string literal 또는 다른 스트링 열거형 멤버로 초기화되어야 합니다. 

```ts
enum Direction {
  Up = 'Up',
  Down = 'DOWN',
  Left = 'LEFT', 
  Right = 'RIGHT'
}
```

문자 열거형은 자동 증가 동작이 되지 않지만, 문자 열거형은 serialize(직렬화)하는 이점이 있습니다. 즉, 디버깅 중이며 숫자 열거형의 런타임 값을 읽어야 하는 경우, 값이 종종 불투명합니다. - 자체적으로 유용한 의미를 전달하지 않습니다. 
문자 열거형은 열거형 멤버 자체의 이름과는 별개로 코드가 실행될 때 의미있고 가독성있는 값을 제공합니다.

### Heterogeneous enums 

기술적으로 enum은 string과 numeric members와 섞일 순 있지만, 그렇게 해야 할 이유는 명확하지 않습니다. 

```ts
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = 'YES', 
}
```
자바스크립트의 런타임 동작을 실제로 사용하지 않는 한, 이렇게 하지 않는 것이 좋습니다. 

### Computed and constant members

각각 enum 멤버는 constant 나 computed 둘 중 하나일 수 있는 값이 있습니다. 열거형 멤버는 다음과 같은 경우 상수로 간주됩니다. 

- enum에서 첫 번째 멤버이며 초기화가 없으면, 값이 0으로 지정됩니다. 

```ts
//E.X is constant:
enum E {X}
```
- 초기화가 없고 앞의 열거형 멤버가 숫자인 상수입니다. 이 경우 이후 나오는 열거형 멤버의 값은 이전 열거형 멤버의 값에 1을 더한 값이 됩니다. 

```ts
// All enum member in 'E1' and 'E2' are constant

enum E1 {X, Y, Z}
enum E2 {A = 1, B, C}
```
- 열거형 멤버는 상수 열거형 표현식으로 초기화됩니다. 상수 열거형 표현식은 컴파일 타임에 완전히 평가될 수 있는 타입스크립트의 하위 셋입니다.
표현식은 다음과 같은 경우 상수 열거 표현식입니다. 

1. 리터럴 열거 표현식(기본적으로 문자 리터럴이거나 숫자 리터럴)
2. 이전에 정의된 상수 열거형 멤버(다른 enum에서 올 수 있음)에 대한 참조 
3. 괄호로 묶인 상수 열거 표현식
4. 상수 열거 표현식에 적용된 +, -, ~ 단항 연산자 중 하나
5. +, -, *, /, %, <<, >>, >>>, &, |, ^ 바이너리 연산자에 사용된 상수 열거 표현식
상수 열거 표현식이 NaN이나 Infinity로 평가되는 것은 컴파일 타임 에러입니다.

다른 모든 경우 열거 멤버가 computed된 것이로 간주됩니다.

```ts
enum FileAccess {
  // constant members
  None, 
  Read = 1 << 1, 
  Write = 1 << 2, 
  ReadWrite = Read | Write, 
  // computed member
  G = "123".length
}
```
### Union enums and enum member types 

계산되지 않은 상수 열거 멤버형의 특수 하위집합이 있습니다: literal enum members. 리터럴 열거형 멤버는 초기화된 값이 없거나 다음 값으로 초기화된 값이 있는 상수 열거 멤버입니다. 
- 문자열 리터럴 ('foo', 'bar', 'baz')
- 숫자 리터럴 (1, 100)
- 숫자 리터럴에 적용된 unary minus(단항 마이너스)(-1 , -100)

열거형의 모든 멤버가 리터럴 열거 값을 가질 때, 몇 가지 특수한 의미가 적용됩니다. 

첫 번째는 열거 멤버가 타입이 된다는 것입니다. 예를들어, 특정 멤버는 열거형 멤버의 값만 가질 수 있습니다. 

```ts
// 열거형 멤버 
enum ShapeKind {
  Circle, 
  Square, 
}

// 열거형 멤버가 타입이 됨.
interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

// 타입이 다름 Circle 로 타입을 지정함 -> 에러 
let c: Circle = {
  kind: ShapeKind.Square, 
  // ~~~~~~~~~~~~~~~~Error!
  radius: 100, 
}
```
또 다른 변화는 열거 타입 자체가 각 열거 멤버의 합집합(union)이 된다는 것입니다. 조합 열거형을 사용하는 타입 시스템이 enum자체에 있는 정확한 값들의 집합을 알고 있다는 사실을 활용할 수 있습니다.
이때문에 타입스크립트는 값을 잘못 비교하는 바보같은 버그를 잡을 수 있습니다. 

```ts
enum E {
  Foo, 
  Bar, 
}
function f(X: E) {
  if(x !== E.Foo || x !== E.Bar) {
    // Error! !== operator는 E.Foo와 E.Bar 타입에 적용할 수 없습니다. 
  }
}
```
이 예제에서, 먼저 x가 E.Foo가 아닌지 확인합니다. 만약 성공이라면(x가 E.Foo가 아니라면) || 가 실행되지 않고 if의 바디가 실행됩니다. 그러나, 성공하지 않는다면 (x가 E.Foo다) x는 오직 E.Foo입니다. 그래서 E.bar인지 확인할 필요가 없습니다. 


### Enums at runtime 

열거형은 런타임에 존재하는 실제 객체입니다. 예를들어 다음열거형을 보면 

```ts
enum E {
  X, Y, Z
}
```
실제로 함수에 전달 될 수 있습니다. 

```ts
function f(obj: {X: number}) {
  return obj.X;
}

// Works, since 'E' has a property named 'X' which is a number
f(E);
```
### Reverse mappings 

멤버에 대한 속성이 있는 객체를 생성하는 것 외에도, numeric enums 멤버는 또한 열거형 값에서 열거형 이름으로 reverse mapping을 받습니다. 
```ts

eunm Enum {
  A
}
let a = Enum.A;
let nameOfA = Enum[a];  // 'A'
```

타입스크립트는 이것을 다음 자바스크립트로 컴파일합니다.

```ts
var Enum;
(function (Enum){
  Enum[Enum['A'] = 0] = 'A';
})(Enum || (Enum = {}));
var a = Enum.A;
var nameOfA = Enum[a]; // 'A'
```
### const enums

대부분의 경우 열거형은 완전히 유효한 솔루션입니다. 그러나 가끔 요구사항이 더 타이트합니다. 열거형 값에 접근할 떄 추가로 생성되는 코드 비용을 피하려면 const eunms를 사용할 수 있습니다. const enums 는 const modifier를 사용하여 정의합니다. 

```ts
const enum Enum {
  A = 1, 
  B = A * 2
}
```
const enums는 오직 constant enum 표현식에서 사용할 수 있으며 regular enums와 달리 컴파일하는 동안 완전히 제거됩니다. const enum 멤버는  tkdlxmdptj dlsfkdlsehlqslek. const 열거형은 계산된 멤버를 가질 수 없기 때문에 가능합니다. 

```ts
const enum Directions {
  Up, 
  Down, 
  Left, 
  Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
```
생성된 코드 

```ts
var directions = [0, 1, 2, 3]
```

### Ambient enums 

Ambient enums 는 이미 존재하는 enum type을 묘사하는 데 사용합니다. 

```ts
declare enum Enum {
  A = 1, 
  B, 
  C = 2
}
```

ambient 와 non-ambient enum과의 중요한 차이점 중 하나는 초기화가 없는 멤버는 이전 열거형 멤버가 상수로 간주된다는 것입니다.
반대로, 초기화가 없는 ambient 열거형 멤버는 항상 계산된 것으로 간주됩니다. 

## 참고 자료 

[typescript-kr 열거형](https://typescript-kr.github.io/pages/Enums.html)

[typescript basics - enums](https://www.typescriptlang.org/docs/handbook/enums.html)