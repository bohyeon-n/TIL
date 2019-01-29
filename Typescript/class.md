# Classes

## classes

simple class-based example

```ts
class Greeter {
  greeting: string; // property
  constructor(message: string) {
    this.greeting = message;
  } // constructor
  greet() {
    return `hello ${this.greeting}`;
  } // method
}
let greeter = new Greeter("world");
```

## inheritance

```ts
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
```

기본적인 상속 특징: 클래스는 프로퍼티와 메서드를 베이스 클래스로부터 상속받는다.
Dog는 Animal 베이스 클래스로부터 extends 키워드를 사용해 나온 클래스이다.
derived class를 subclasses라고 부르고 베이스 클래스를 superclasses라고 부른다.

Dog가 Animal로부터 기능을 확장하였으므로, bark() 와 move() 를 사용할 수 있다.

```ts
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("slithering...");
    super.move(distanceInMeters);
  }
}

class Horese extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("galloping...");
  }
}

let sam = new Snake("sammy the python");
let tom = new Horse("tommy the palomino");

sam.move();
tom.move();
// slithering...
//  sammy the python moved 5m
//  galloping...
```

이전 예시와 다른 것은 생성자 함수가 포함된 각 파생 클래스가 기본 클래스의 생성자를 실행할 super() 를 호출해야 한다. 서브 클래스에서 베이스 클래스에 속성에 액세스 하기 전에 super() 를 호출해야 한다.

베이스 클래스에서 어떻게 서브 클래스에 특화된 메서드를 오버라이드하는지 보여준다.
Snake와 Horse는 Animal의 move 메서드를 오버라이드하여 move 메서드를 생성하였다.
tom 이 Animal로 선언되었더라도, 값은 Horse이기 때문에 tom.move(34)를 호출하면 Horse에서 메서드 오버라이딩을 한다.

## Public, Private, Protected modifiers

### public by default

c# 같은 언어에서는 보이게 하기 위해서 public이라고 명확하게 붙여줘야 한다. 타입스크립트에서는 각 멤버는 기본적으로 public이다.

```ts
class Animal {
  public name: string;
  public constructor(theName: string) {
    this.name = theName;
  }
  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
```

- understanding private

member를 private로 마크할때, 멤버를 포함하는 클래스 외부에서 접근할 수 없다.

```ts
class Animal {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}
new Animal("Cat").name; //Error 'name' is private;
```

타입스크립트는 structure type 시스템이다. 두 개의 다른 타입을 비교할 떄, 어디서 왔는지는 상관없이, 모든 멤버의 타입이 양립가능하다면, 타입 자체가 양립가능하다고 말한다.??
그러나, private 와 protected 멤버 타입을 비교할 때, 타입을 다르게 취급한다. 호환 가능한 것으로 간주되는 두 유형의 경우, 그 중 하나에 private 멤버가 있으면 다른 private 멤버에 같은 declaration에서 시작된 private 멤버가 있어야 한다. protected도 마찬가지이다.

```ts
class Animal {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

class Rhino extends Animal {
  constructor() {
    super("Rhino");
  }
}

class Employee {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; // Error 'Animal' and 'Employee' are not compatible
```

Employee와 Animal은 모양으로 보아선 같아 보인다. 이러한 클래스의 인스턴스를 생성한 다음, 서로를 할당하여 어떤 일이 발생하는지 본다. Animal 과 Rhino는 호환 가능하다. 그러나 Employee의 경우 그렇지 않다.
Employee에서 Animal로 할당하려고 할떄, 타입이 호환되지 않으므로 에러가 발생한다. Employee가 private멤버인 name 을 가지고 있다고 하더라도, Animal에서 선언한 것과 다르다.

### understanding protected

```ts
class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // error
```

Person 밖에서 name 을 사용할 수 없다. Employee 의 인스턴스 메서드 안에서는 사용할 수 있다. Employee가 Persion으로부터 나왔기 때문에

컨스트럭터는 protected로 마크할 수 있다. 즉 클래스를 포함하는 클래스 외부에서 클래스를 인스턴스화할 수는 없지만 확장할 수는 있다.

```ts
class Person {
  protected name: string;
  protected constructor(theName: string) {
    this.name = theName;
  }
}

// Employee can extend Person
class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
let john = new Person("John"); // Error: The 'Person' constructor is protected
```

### readonly modifier

프로퍼티를 readonly 키워드로 readonly로 만들 수 있다. readonly 프로퍼티는 그들의 declaration 이나 constructor 안에서 초기설정해주어야 한다.

```ts
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }

  let dad = new Octopus('man with the 8 stong legs')
  dad.name = 'man with the 3piece suit'; //error name is readonly.
}
```

- parameter properties

parameter properties는 한 곳에서 멤버를 생성하고 초기화합니다.

```ts
class Octopus {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) {}
}
```

컨스트럭터에 `readonly name:string` 파라미터를 줘서 `name` 멤버를 생성하고 초기화한다. 선언과 할당을 하나로 통합하였다.

parameter properties는 accessibility modifier나 readonly , 또는 둘 모두 생성자 매개 변수 앞에 접두어를 붙임으로써 선언된다. 매개 변수 속성에 private멤버가 선언되고 초기화됩니다. 마찬가지로, 공개, 보호 및 읽기 전용으로 동일하게 수행됩니다.

## Accessors

타입스크립트는 객체 멤버에 대한 액세스를 차단하는 방법으로 getter/setter를 서포트 한다.
이렇게하면 각 객체에서 멤버가 엑세스되는 방식을 제어할 수 있다.

get과 set을 이용해서 간단한 클래스를 바꿔보자. 먼저, getter/setter없는 클래스이다.

```ts
class Employee {
  fullName: string;
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  console.log(employee.fullName);
}
```

랜덤하게 fullName을 바꿀 수 있도록 하는 것은 편리하지만, 문제가 생길 수 있습니다.

이 버전에서는, employee 수정을 허용하기 전에 사용자가 secret passcode를 사용할 수 있는지 확인합니다. fullName에 대한 직접 액세스 암호를 확인할 집합으로 바꾸면 된다.

```ts
let passcode = "secret passcode";

class Employee {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode == "secret passcode") {
      this._fullName = newName;
    } else {
      console.log("Error: unauthorized update of employee!");
    }
  }
}

let employee = new Employee();
employee.fullName = "bob smith";
if (employee.fullName) {
  console.log(employee.fullName); // bob smith
}
```

접근자가 암호를 확인하고 있음을 증명하기 위해 암호를 수정하여 일치하지 않을 때 employee를 업데이트 할 수 있는 권한이 없다는 경고 메시지를 받습니다.

accessors에 알아야 할 것들

- accessors는 컴파일러가 es5이상을 출력하도록 설정해야 합니다.
- get과 set이 없는 accessor는 자동으로 읽기전용으로 판단합니다.
- 이것은 코드에서 .d.ts파일을 생성할 때 유용합니다. 왜냐하면 사용자가 속성을 변경할 수 없다는 것을 알 수 있기 때문이다.

## Static Properties

지금까지, instance member, 객체가 인스턴스화 될 때 객체에 표시되는 인스턴스 멤버 에 관해서만 얘기했다. 클래스의 static member를 생성할 수 있다. 인스턴스가 아니라 클래스 자체에서 볼 수 있는 static member 입니다.
이 예제에서는 origin 에 static을 붙입니다. 각 인스턴스틑 클래스 이름을 앞에 붙여 액세스 합니다. prepending this하는 것과 비슷하다. 인스턴스 액세스 앞에, Grid를 추가한다. static accesses 앞에

```ts
class Grid {
  static origin = { x: 0, y: 0 };
  calculateDistanceFormOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number) {}
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

console.log(grid1.calculateDistanceFormOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFormOrigin({ x: 10, y: 10 }));
```

## Abstract Classes

추상 클래스는 다른 클래스가 파생될 수 있는 기본 클래스입니다. 직접적으로 인스턴스화할 수 없습니다. 인터페이스와 다르게, 추상 클래스는 멤버에 대한 구현 세부 사항을 포함할 수 있다. abstract 키워드는 추상 클래스뿐만 아니라 추상 클래스 내의 추상 메서드를 정의하는 데 사용된다.

```ts
abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log("roaming the earth...");
  }
}
```

추상 클래스 안에 메서드는 구현이 포함되어 있지 않으므로 파생 클래스에서 구현해야 한다.
추상 메서드는 인터페이스 메서드와 유사한 구문을 사용합니다. 둘 다 메서드의 바디를 포함하지 않고 시그니처를 정의합니다. 그러나, 추상 메서드는 반드시 abstract 키워드를 포함하고, 선택적으로 access modifier를 포함할 수 있습니다.

```ts
abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log("Department name: " + this.name);
  }

  abstract printMeeting(): void; // 반드시 파생 클래스에서 구현되야 한다.
}

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing"); // 파생 클래스의 constructor는 반드시 super를 콜해야 한다.
  }

  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }

  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}

let department: Department; // ok to create a reference to an abstract type
department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
department.generateReports(); // error: 메서드가 선언된 추상 타입에 존재하지 않는다.
```

## Advanced Techniques

- constructor functions

타입스크립트에서 클래스를 선언할 때, 실제로는 한 번에 여러 선언을 합니다.
첫 번째 클래스의 인스턴스 타입입니다.

```ts
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "hello," + this.greeting;
  }
}

let greeter: Greeter;
greeter = new Greeter("world");
console.log(greeter.greet());
```

`let greeter: Greeter`라고 할 때, `Greeter`를 인스턴스의 타입으로 사용하는 것이다.
이것은 거의 두 번째 nature이다. 다른 객체 지향 언어에서 프로그래머에게

또한 constructor function이라 부르는 다른 값을 생성하였디. 이 클래스의 인스턴스를 새로 만들 때 호출되는 함수이다.

```ts
let Greeter = (function() {
  function Greeter(message) {
    this.greeting = message;
  }
  Greeter.prototype.greet = function() {
    return "Hello, " + this.greeting;
  };
  return Greeter;
})();

let greeter;
greeter = new Greeter("world");
console.log(greeter.greet());
```

`let Greeter`에 생성자 함수가 지정된다. new를 호출하고 이 함수를 실행하면, 클래스의 인스턴스가 생성된다. 생성자 함수에는 클래스의 모든 static member도 포함된다. 각 클래스를 생각하는 또 다른 방법은 instance side 와 static side가 있다는 것입니다.

```ts
class Greeter {
  static standardGreeting = "hello, there";
  greeting: string;
  greet() {
    if (this.greeting) {
      return "hello," + this.greeting;
    } else {
      return Greeter.standardGreeting;
    }
  }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet()); // hello, there

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "hey there!";

let greeter2: Greeter = new greeterMaker();
conosle.log(greeter2.greet()); // hey there!
```

이 예제에서, greeter1은 전과 비슷하게 동작한다. Greeter클래스를 인스턴스화하고 이 객체를 사용한다.

다음, 클래스를 직접 사용했다. 여기서 우리는 greeterMaker라는 새로운 변수를 생성한다. 이 변수는 클래스 자체를 유지하거나 다른 방법으로 생성자 함수를 나타낸다.
우리는 여기서 typeof Greeter를 사용합니다. 즉 인스턴스 유형이 아닌, Greeter 클래스 자체의 타입을 제공합니다. 또는 더 정확하게는 '생성자 함수의 유형인 Greeter 라는 심볼 타입을 제공한다.

이 유형에는 Greeter의 모든 정적 멤버가 Greeter 클래스의 인스턴스를 생성하는 생성자와 함께 포함됩니다.

`greeterMaker`에 `new`를 사용하여 Greeter의 새로운 인스턴스를 만들고 이전과같이 호출하여 보여줍니다.

- using a class as an interface

전 섹션에서 말했듯이, 클래스 선언은 클래스의 인스턴스를 나타내는 유형과 생성자 함수, 두 가지를 작성한다.

```ts
class Point {
  x: number;
  y: number;
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };
```
