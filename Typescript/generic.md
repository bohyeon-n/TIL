## Hello World of Generic

identity함수는 전달된 것을 그대로 반환하는 함수입니다. 
제네릭이 없다면 identity함수에 특정 타입을 부여해야 합니다. 

```ts
function identity(arg: number): number {
  return arg;
}
```
또는 any 타입을 사용하여 identity 함수를 만들 수 있습니다.

```ts
function identity(arg: any): any {
  return arg;
}
```

any를 사용하면 함수가 어떤 타입의 인수던 전달 받을 수 있게 되지만, 실제로 함수가 반환할 타입에 대한 정보를 잃어버리게 됩니다. 숫자를 전달하면 우리가 아는 정보는 any타입이 반환된다는 것 입니다. 

대신, 인수의 타입을 체크하여 반환 값의 타입을 표시할 수 있다.
여기서는 값이 아닌 타입을 처리하는 특별한 종류의 변수인 타입 변수(type variable)을 사용할 것입니다. 

```ts
function identity<T>(arg: T): T {
  return arg;
}
```

함수에 타입 변수 `T`를 추가하였다. `T`는 사용자의 타입 정보를 캡쳐하여 나중에 사용하겠다는 의미인데 여기서는 `T`를 리턴 값 타입에 사용하였다.

인자와 리턴 타입에 같은 타입이 사용되는 것을 볼 수 있습니다. 함수의 한 쪽에서 다른 쪽으로 타입 정보를 트래핑할 수 있다.

한번 generic function 을 사용하면, 두가지방법중 한가지로 호출을 해야 한다. 
첫 번쨰 방법은 타입 인수를 포함한 모든 인수를 함수에 전달하는 것 입니다.

명시적으로 T는 string 이 되어야 한다고 설정했다. 인수에는 ()를 사용하는 것과 달리 <>를 사용하였습니다. 

```ts
let output = identity<string>("myString");
```

두 번째는 더 일반적인 방법이기도 합니다. 넘겨준 인자값을 컴파일러가 자동으로 타입값을 설정해주는 방법이다.

```ts
let output = identity("myString"); // type of output will be 'string'
```

<>꺾쇠 괄호에 유형을 명시적으로 전달할 필요는 없습니다. 컴파일러가 'myString'을 읽고 해당 값의 타입을 T로 설정합니다. 타입 인수 추론은 코드를 짧고 가독성있게 유지하는 유용한 도구가 될 수 있지만, 복잡한 예에서는 컴파일러가 타입을 추론하지 못하면 타입 인수를 명시적으로 전달해야 할 수도 있습니다. 

## Working with Generic Type Variables

generic을 사용하기 시작할때, `identity`와 같은 generic 함수를 생성할때, 컴파일러는 어떤 generically typed parameters를 함수 바디에 올바르게 사용하라고 강요할 것입니다. 즉 실제로 이러한 매개변수를 모든 타입이 될 수 있는 것처럼 취급합니다. 

이전의 `identity` function을 사용해봅시다.

```ts
function identity<T>(arg: T): T {
  return arg;
}
```
각 호출과 함께 인수 arg의 길이를 콘솔에 찍고 싶다면 우리는 이렇게 쓸지도 모릅니다. 

```ts
function logginhIdentity<T>(arg: T): T {
  cosnole.log(arg.length); // Error: T doesn't have .length
  return arg
}
```
컴파일러는  arg의 .length 멤버를 사용하고 있다고 에러를 주지만, arg 모듈에는 이 멤버가 없다고 할 수는 없습니다. 이전에 타입 변수가 모든 타입이 될 수 있다고 했습니다. 따라서 이전에 함수를 사용하는 사람이 .length memeber 가 없는 number 전달할 수 있을 것입니다. 

우리는 사실 이 함수가 직접 T에 작업하기 보다는 T 배열에서 작업한다고 가정해 봅니다. 우리는 arary로 작업하기 때문에 .length 멤버를 사용할 수 있어야 합니다. 
다른 타입의 배열을 생성하는 함수로 이것을 설명하겠습니다. 

```ts
funciton loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg; // Arrahy has a .length, so no more error
}
```
loggingIdentity는 타입 매개 변수 T를 인수로 받고 arg는 T 배열이며 T 배열을 반환합니다. 숫자 배열을 전달했다면, T 가number에 바인드 되기 때문에 숫자 배열을 반환할 것입니다. 이렇게 하면 모든 타입을 사용하기 보다는 제네릭 타입 변수 T 를 사용하여 유연성을 높일 수 있습니다. 

혹은 다음 예제와 같이 작성할 수 있습니다. 

```ts
function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length); // Array has a .length, so no more error 
  return arg;
}

```
이미 다른 언어에서 이 스타일이 익숙할 것 입니다. 다음 섹션에서는 , Array<T>와 같은 generic type을 어떻게 생성하는지 알아볼 것 입니다. 

## Generic Types

이전 섹션에서는, 다양한 타입의 유형에서 작동하는 generic identity function 을 만들었습니다. 이번 섹션에서는, 함수의 유형과 generic interface를 만드는 방법을 알아봅니다. 

generic 함수 타입은 non-generic function 과 마찬가지로, 파라미터의 리스트가 먼저 나열됩니다. 

```ts
function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: <T>(arg: T) => T = identity;
```

type 변수의 수와 type 변수의 사용이 일치한다면 generic type parameter에 다른 이름을 사용할 수 있습니다. 

```ts
function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: <U>(arg: U) => U = identity; 
```

generic type 을 call object literal type의 signiture 로 사용할 수 있습니다. 

```ts
function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: {<T>(arg: T): T} = identity;
```
따라서 첫 번째 제너릭 인터페이스를 작성하게 됩니다.
앞의 예제에서 객체 리터럴을 가져와 인터페이스로 옮깁니다. 

```ts
interface GenericIdentityFn {
  <T>(arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn = identity;
```
유사한 예로, generic 매개 변수를 전체 interface의  매개 변수로 이동하려고 할 수 있습니다. 이렇게 하면 일반적으로 사용하는 유형(예: `Dictionary<string>`이 아닌 just `Dictionary`)을 볼 수 있습니다. 이는 interface의 모든 다른 memebers에게 type parameter을 볼 수 있게 합니다. 

```ts
interface GenericIdentityFn<T>{
  (arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity; 
```
우리의 예시는 약간 다른 것으로 바뀌었습니다. generic function을 describing하는 대신에, generic type의 일부인 non-generic function signiture로 설명하겠습니다. 우리가 GenericIdentityFn 을 사용할 때, 대응하는 타입 매개변수 (여기서는: number)를 지정할 필요가 있고 호출 형식을 효과적으로 고정시킬 것입니다.
언제 호출 매개 변수에 직접 타입 매개 변수를 넣어야 하고 인터페이스 자체에 넣어야하는지 이해하는 것이 타입의 어떤 측면이 제네릭인지 설명하는 데 도움이 될 것입니다. 

제네릭 인터페이스 외에도 제네릭 클래스를 만들 수 있습니다.
하지만 제네릭 열거형과 네임스페이스는 만들 수 없습니다. 

## Generic Classes 

제네릭 클리스는 제네릭 인터페이스와 모양이 비슷합니다. 
제네릭 클래스는 클래스 이름 뒤에 <> 앵글로 묶인 제네릭 타입 파리미터 리스트를 갖습니다.  

```ts
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x,y) {return x + y};
```
이는 `GenericNumber`문자 그대로 number 타입만 사용하도록 제한하는 것이 없다는 것을 알았을 것입니다. string이나 더 복잡한 객체를 대신 사용할 수 있습니다. 

```ts
let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = '';
stringNumberic.add = function(x, y) {return x + y;};

console.log(stringNumberic.add(stringnNumeric.zeroValue, 'test'));
```

인터페이스와 마찬가지로, 타입 매개변수를 클래스 자체에 두면 클래스의 모든 속성이 동일한 타입으로 작동하도록 할 수 있습니다. 

클래스 섹션에서 다뤘던 것처럼, 클래스는 두 가지 측면이 있습니다: static side 와 instance side. 제네릭 클래스는 static side 보다는 instance 측면에서만 제네릭이므로, 클래스로 작업할 때, static 멤버는 클래스 타입 매개변수를 사용할 수 없습니다. 

## Generic Constraints

이전의 예시를 기억한다면, 타입들에 어떤 기능이 있는지에 대한 지식이 있는 type set에서 동작하는 제네릭 함수를 작성해야 할 때가 있습니다. `loggingIdentity`예제에서, arg의 .length 프로퍼티에 접근하길 원했지만, 컴파일러는 모든 타입이 .length 속성을 가지고 있음을 증명하지 못했습니다. 그래서 이러한 가정을 하지 않도록 경고를 줍니다. 

```ts
function loggingIdentity<T>(arg: T): T {
  console.log(arg.length); //Error: T doesn't have .length
  return arg;
}
```
모든 타입에서 동작하는 대신에 .length 프로퍼티를 가진 모든 타입에 동작하는 것으로 제한하고 싶습니다. 
타입에 이 멤버가 있으면 타입을 허용하지만, 적어도 이 멤버가 있어야 합니다. 
그렇게 하지 위해서는 T가 무엇이 될 수 있는 지에 대한 제약으로서 요구 사항 리스트가 있어야 합니다. 

그러기 위해서, 제약을 설명하는 인터페이스를 만들겠습니다. 여기, 하나의 .length 속성을 가진 인터페이스를 만들고 이 인터페이스를 사용할 것입니다. 그리고 extends 키워드를 사용하여 제약 조건을 나타냅니다. 

```ts
interface Lengthwise {
  legnth: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property, so no more error 
  return arg;
}
```
제네릭 함수는 이제 제한되었기 때문에, 더이상 모든 타입에서 동작되지 않습니다. 

```ts
loggingIdentity(3); //Error, number doesn't have a .length property
```
대신, 모든 필수 프로퍼티가 있는 값을 전달해야 합니다. 

```ts
logginhIdentity({length: 10, value:3})
```

### Using Type Parameters in Generic Constraints

다른 타입 파라미터에 의해 제한되는 타입 파라미터를 선언할 수 있습니다. 예를 들어, 이름이 가진 객체의 프로퍼티를 가져오려고 합니다. obj에 존재하지 않는 속성을 실수로 잡지 않도록 하고자 합니다. 그래서 두 타입 사이의 제약 조건을 적용할 것입니다. 

```ts
function getProperty<T, K extends keyof T>(bj: T, key: K) {
  return obj[key]
}

let x = {a: 1, b: 2, c: 3, d: 4};

getProperty(x, "a") // okay
getProperty(x, "m") // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'. 
```
### Using Class Types in Generics

제네릭을 사용하여 팩토리를 생성할 때, 생성자 함수를 사용하여 클래스 타입을 참조해야 합니다. 

```ts
function create<T>(c: {new(): T;}): T {
  return new c();
}
```
더 advanced 예제는 프로토타입 프로퍼티를 사용하여 추론하고 생성자 함수와 클래스 타입의 인스턴스 사이를 제한합니다. 

```ts
class BeeKeeper {
  hasMask: boolean;
}

class ZoomKeeper {
  nametag; string;
}

class Animal {
  numLegs: number;
}

class Bee extends Animal {
  keeper : BeeKeeper;
}

class Lion extends Animal {
  keeper: ZoomKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag; // typechecks! 
createInstance(Bee).Keeper.hasMask; // typechecks! 
```
??? 무슨말인지...??????😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱

## 참고 자료

[typescipt-kr](https://typescript-kr.github.io/pages/Generics.html)

[typescript handbook - Generic](https://www.typescriptlang.org/docs/handbook/generics.html)