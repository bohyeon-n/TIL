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

- public by default

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

타입스크립트는 structure type 시스템이다. 두 개의 다른 타입을 비교할 떄, 어디서 왔는지는 상관없이, 모든 멤버의 타입이 양립가능하다면, 타입이 양립가능하다고 말한다.
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

- understanding protected

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
