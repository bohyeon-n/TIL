# 클래스

## 1. 클래스 관계

클래스 사이의 관계를 나타내는 방법으로 IS-A 와 HAS-A 가 있다.

### 1-1. IS-A: 상속

'a laptop IS-A computer' ~은 ~의 한 종류다를 의미한다. IS-A 관계를 표현할 때는 상속을 사용한다. 상속을 하는 클래스를 기본(base) 클래스, 부모 클래스, 슈퍼 클래스라고 하며 상속을 받는 클래스를 파생(derived) 클래스, 자식 클래스, 서브 클래스라고 한다.

```py
class Computer:
    def __init__(self, cpu, ram):
        self.CPU = cpu
        self.RAM = ram

    def browser(self):
        print('browser')

    def work(self):
        print('work')
```

```py
class Laptop(Computer): # Laptop 클래스가 Computer클래스를 상속한다는 의미
    # 멤버 추가

    def __init__(self, cpu, ram, battery):
        super().__init__(cpu,ram) # super 키워드는 현재 클래스의 슈퍼 클래스 즉, 기본 클래스를 의미한다.
        self.battery = battery

    def move(self, to): # Laptop 클래스만 가지는 move() 메서드 추가
        print('move to {}'.format(to))
```

상속을 하면 코드를 재활용할 수 있어 매우 편리하다. 기본 클래스의 모든 멤버와 메서드를 가지면서 자신만의 멤버 혹은 메서드를 가지는 클래스가 있다면 상속한다.

테스트 코드 작성

```py
if __name__ == '__main__':
    lap = Laptop('intel', 16, 'powerful')
    lap.browse()
    lap.work()
    lap.move('office')
'''
browse
work
move to office
'''
```

### 1-2. HAS-A: 합성 또는 통합

'A Computer HAS-A CPU' '~이 ~을 가진다 혹은 포함한다'를 의미한다. 프로그램에서 HAS-A 관계는 합성(composition) 혹은 통합(aggregation)을 이용해 표현한다.

**합성**

```py
class CPU:
    pass
class RAM:
    pass

class Computer:
    def __init__:
        self.cpu = CPU()
        self.ram = RAM()
```

Computer 객체가 생성될 때 CPU 객체도 같이 만들어졌다가 소멸될 때 함께 소멸된다. 굉장히 강한관계를 맺고 있는데, 이러한 관계를 합성이라고 한다.

**통합**

```py
class Gun:
    def __init__(self, kind):
        self.kind = kind
    def bang(self):
        print('bang bang!')

class Police:
    def __init__(self):
        self.gun = None
    def acquire_gun(self, gun):
        self.gun = gun
    def release_gun(self):
        gun = self.gun
        self.gun = None
        return gun
    def shoot(self):
        if self.gun:
            self.gun.bang()
        else:
            print('Unable to shoot')
```

```py
if __name__ == '__main__':

    p1 = Police()
    print('p1 shoots')
    p1.shoot()
    print('')

    revolver = Gun('Revolver')
    p1.acquire_gun(revolver)
    revolver = None
    print('p1 shoots gun')
    p1.shoot()
    print('')

    revolver = p1.release_gun()
    print('p1 shoots again')
    p1.shoot()
```

## 2. 메서드 오버라이딩과 다형성

다형성(polymorphism)이란 '상속 관계에 있는 다양한 클래스의 객체에서 같은 이름의 메서드를 호출할 때, 각 객체가 서로 다르게 구현된 메서드를 호출함으로써 서로 다른 행동, 기능, 결과를 가져오는것'을 의미한다. 그리고 이를 구현하기 위해 파생 클래스 안에서 상속받은 메서드를 다시 구현하는 것을 오버라이딩이라고 한다.

### 2-1. 메서드 오버라이딩

```py
class CarOwner:
    def __init__(self, name):
        self.name = name

    def concentrate(self):
        print('{} can not do anything else'.format(self.name))

class Car:
    def __init__(self, owner_name):
        self.owner = CarOwner(owner_name)

    def drive(self):
        self.owner.concentrate()
        print('{} is driving now'.format(self.owner.name))
```

Car 클래스를 상속하되 drive 메서드만 클래스 안에서 다시 정의하기

```py
class SelfDrivingCar(Car):
    def drive(self):
        print('Car is driving by itself')
```

이렇게 drive()메서드만 다시 구현하는 즉, 파생 클래스에서 상속받은 메서드를 다시 구현하는 것을 메서드 오버라이딩(method overriding)이라고 한다.

테스트 코드 작성

```py
if __name__ == '__main__':
    car = Car('greg')
    car.drive()
    print('')

    s_car = SelfDrivingCar('john')
    s_car.drive()
```

```
greg can not do anything else
greg is driving now

Car is driving by itself
```

이름이 같은 메서드를 호출해도 구현 내용이 다르므로 결과는 다르게 나온다. 이처럼 같은 이름의 메서드를 호출해도 호출한 객체에 따라 다른 결과를 내는 것을 '다향성'이라고 한다.

## 3. 클래스 설계 예제

```py
from abc import*

class Character(metaclass = ABCMeta):
    def __init__(self, name, hp, power):
        self.name = name
        self.HP = hp
        self.power = power
    @abstractclassmethod
    def attack(self,other, attack_kind):
        pass
    @abstractclassmethod
    def get_damage(self, power, attract_kind):
        pass
    def __str__(self):
        return '{} : {}'.format(self.name, self.HP)

class Player(Character):
    def __init__(self, name = 'player' , hp = 100, power = 10, *attack_kinds):
        super().__init__(name, hp, power)
        self.skills = []
        for attack_kind in attack_kinds:
            self.skills.append(attack_kind)
    def attack(self, other, attack_kind):
        if attack_kind in self.skills:
            other.get_damage(self.power, attack_kind)

    def get_damage(self, power, attack_kind):

        if attack_kind in self.skills:
            self.HP -= (power//2)
        else:
            self.HP -= power

class Monster(Character):
    def __init__(self, name, hp, power):
        super().__init__(name, hp, power)
        self.attack_kind = 'None'

    def attack(self, other, attack_kind):
        if self.attack_kind in attack_kind:
            other.get_damage(self.power, attack_kind)

    def get_damage(self, power, attack_kind):
        if self.attack_kind == attack_kind:
            self.HP += power
        else:
            self.HP -= power

    def get_attack_kind(self):
        return self.attack_kind
class IceMonster(Monster):
    def __init__(self, name='Ice monster', hp= 50, power = 10):
        super().__init__(name, hp, power)
        self.attack_kind = 'ICE'

class FireMonster(Monster):
    def __init__(self, name='Fire monster', hp = 50, power = 20):
        super().__init__(name, hp, power)
        self.attack_kind = 'FIRE'

    def fireball(self):
        print('fireball')

if __name__ == '__main__':
    player = Player('sword master', 100, 30, 'ICE')
    monsters = []
    monsters.append(IceMonster())
    monsters.append(FireMonster())

    for monster in monsters:
        print(monster)

    for monster in monsters:

        player.attack(monster, 'ICE')
    print('after the player attacked')

    for monster in monsters:
        print(monster)
    print('')

    for monster in monsters:
        monster.attack(player, monster.get_attack_kind())
    print('after monsters attacked')
    print(player)
```

## 4. 연산자 오버로딩

연산자 오버로딩은(operator overloading)은 클래스 안에서 메서드로 연산자를 새롭게 구현하는 것으로 다향성의 특별한 형태이다. 연산자 오버로딩을 사용하면 다른 객체나 일반적인 피연산자와 연산을 할 수 있다.

```py
class Point:
    def __init__(self, x = 0, y = 0):
        self.x = x
        self.y = y

    def set_point(self, x,y):
        self.x = x
        self.y = y

    def get_point(self):
        return self.x , self.y
    def __str__(self):
        return('{x} : {y}'.format(x = self.x, y = self.y))
    def __add__(self, n):
        x = self.x + n
        y = self.y + n
        return Point(x,y)
if __name__ == '__main__':
    p1 = Point(2,2)
    p2 = p1 + 3

    print(p2)
```

언더바가 두 개씩 붙어 있는 함수는 파이썬이 예약한 함수로 **add**()메서드도 연산자 오버로딩을 위해 예약된 함수이다.

```py
if __name__ == '__main__':
    p1 = Point(2,2)
    p2 = 3 + p1

    print(p2)
```

이런 경우에는 오류 가 발생한다. 순서만 달라졌을 뿐이다. 이 문제를 해결하기 위해 연산자 오버로딩을 하나 더 해보자.

```py
class Point:
    (중략)
    def __radd__(self, n):
        x = self.x + n
        y = self.y + n
        return Point(x,y)
if __name__ =='__main__':
    p1 = Point(2,2)
    p2 = 3 + p1
    print(p2)
```

이렇게 구현하면 p2 = 3 + p1 코드를 만나는 순간 3 + p1 을 p1.**radd**(3)으로 변경한다.

파이썬은 산술 연산자와 논리 연산자를 비롯해 다양한 연산자 오버로딩 메서드를 제공한다.

## 마무리

클래스와 클래스 사이의 관계를 고려하여 계층 구조를 만들고 좋은 인터페이스를 설계하기는 쉽지 않다. 하지만 기본에 충실하게 꾸준히 연습하면 잘 작동하는 객체 지향 프로그램을 만들 수 있을 것이다.
