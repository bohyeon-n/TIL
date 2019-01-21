# Interfaces

## introduction

중요 원리 중 하나는 type-checking 이 value의 shape에 초점을 맞추는 것이다. "duck typing" 이나 "structuring subtyping"이라고 불린다.

타입스크립트에서, interface는 이러한 타입을 네이밍하는 규칙으로 채워져있고 코드 안에서 계약을 정의하는 강력한 방법이다. 프로젝트 바깥에서 뿐만아니라.

## our first interface

쉬운 방법은 interfacer가 어떻게 작동하는지 보는 것이다.

```ts
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```

type-checker는 printLabel에 대한 콜을 체크한다. printLabel 함수는 object 를 패스하는 string 타입인 label이라는 싱글 파라미터를 가지고 있다. 우리의 object 는 사실은 더 많은 프로퍼티를 가지고 있지만, 컴파일러는 필요한 것이 존재하는지,필요한것만 타입이 매치하는지 확인한다. 타입스크립트가 관대하지 않을 떄도 있다.

```ts
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj); // Size 10 Object
```

LabelledValue interface는 전 예시에서 requirement 를 설명하는 데 사용합니다. 여전히 string 타입의 lebel이라는 싱글 속성을 나타냅니다.
다른 언어에서처럼 printLabel에 전달한 객체가 이 interface를 구현한다고 명시적으로 설명하지 않아도 됩니다. 함수에 전달된 객체가 나열된 요구조건만 충족하면 됩니다.

type-checker는 어떤 순서로 속성이 있는지는 상관없이 어떠한 속성이 어떠한 타입으로 존재하는지만 체크합니다.

## optional property

모든 프로퍼티의 interface가 필요하진 않습니다. 일부는 특정한 조건아래 존재하거나 존재하지 않을 수 있습니다.

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let mySquare = createSquare({ color: "black" });
```

optional property의 interface는 다른 interface와 비슷하게 작성되며, 각 optional property는 끝에 ?로 나타낸다.

optional property의 이점은 가능한 속성을 설명할 수 있지만 interface의 부분이 아닌것은 막는 다는 것 입니다. 예를들어 createSquare에서 color를 clor 로 잘못입력하였다면, 에러 메시지로 알려줍니다.

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.clor) {
    newSquare.clor = config.clor;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });
```

## Readonly properties

몇 프로퍼티는 객체가 처음 생성되었을 때 수정가능해야할 때도 있다. 프로퍼티 네임 전에 readonly를 놓아 지정할 수 있다.

```ts
interface Point {
  readonly x: number;
  readonly y: number;
}
```

객체 리터럴을 할당하여 Point를 구성할 수 있다. 할당 다음에, x 와 y는 변경할 수 없다.

```ts
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error
```

타입스크립트에는 `Array<T>` 에서 모든 mutating 메서드가 제거된 `ReadonlyAarray<T>` 타입이 있습니다. 생성 이후 배열을 바꾸지 않을 것을 확신해야 합니다.

```ts
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyAarray<number> = a;
ro[0] = 12; // error 바꾸는 것 안됨
ro.push(5); // error
ro.length = 100; // error
a = ro; // error
```

코드의 마지막 부분에서, 노멀 배열에 ReadonlyArray 전체를 할당하면 안된다. 아래 코드처럼 오버라이드할 수 있다.

```ts
a = ro as number[];
```

### readonly vs const
