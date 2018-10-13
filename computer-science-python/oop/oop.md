# 객체 지향 프로그래밍

> 현실 세계를 리모델링하거나 프로그램을 구현하는 데 변수와 함수를 가진 객체를 이용하는 패러다임을 '객체 지향 프로그래밍'이라고 하며, 변수(데이터)와 함수를 하나의 단위(대부분 언어에서 클래스)로 묶는 것을 캡슐화라고 한다.

서로 다른 객체가 함수 호출을 통해 상호작용하여 객체의 상태(데이터)가 변하는 것을 메시지 패싱(message passing)이라고 한다. 여기서 주목할 것은 서로 다른 객체가 상호작용할 때 함수를 호출했다는 것과 함수 안에서 상대의 변수(데이터)를 바꾸려면 상대가 가진 특정 함수를 호출해야 한다는 점이다. 메시지 패싱은 객체 지향에서 매우 중요한 개념이다.

## 클래스를 사용해 객체 만들기

컴퓨터에게 객체란 그저 메모리의 한 단위일 뿐이다. 객체라는 메모리 공간을 할당한 다음 객체 안에 묶인 변수를 초기화하고 함수를 호출하는 데 필요한 것이 클래스일 뿐이다. 클래스는 객체를 생성해 내는 템플릿이고, 객체는 클래스를 이용해 만들어진 변수와 함수를 가진 메모리 공간이다. 둘은 서로 다른 존재이며 메모리 공간도 다르다.

객체와 매우 유사한 개념으로 인스턴스(instance)가 있다. 둘의 차이를 살펴보면 객체는 객체 자체에 초점을 맞춘 용어고, 인스턴스는 이 객체가 어떤 클래스에서 만들어졌는지에 초점을 맞춘 용어이다. "이 객체는 Person 이라는 클래스의 인스턴스야"라고 말할 수 있다.

```py
class Person:
    def __init__(self, name, money):
        self.name = name
        self.money = money
    def give_money(self, other, money):
        self.money -= money
        other.get_money(money)
    def get_money(self, money):
        self.money += money
    def show(self):
        print('{} : {}'.format(self.name, self.money))
```

클래스의 이름은 첫 글자를 대문자로 하는 것이 관용이다.
객체 지향 프로그래밍에서는 클래스로 묶이는 변수를 프로퍼티 또는 멤버 변수 혹은 멤버(member)라고 부른다. 파이썬에서는 **멤버**를 사용한다.
특히 객체가 가지는 멤버를 인스턴스 멤버라고 한다.

`__init__()`함수는 생성자라고 부르는 특별한 함수이다. 앞뒤로 언더바가 두 개 있는 함수는 파이썬이 예약해 두었다는 의미이다. 생성자의 역할은 인스턴스 멤버를 초기화하는 것이다.

`self`는 객체 자신을 의미한다. 생성 중인 객체에 name 과 money 라는 멤버를 만들고 전달받은 인자들로 할당한다.

OOP 에서는 클래스에 묶이는 함수를 행동(behavior), 멤버 함수, 메서드(method)라고 부른다. 파이썬에서는 **메서드**를 사용한다. 또한 멤버와 메서드를 합쳐 속성이라고 부릅니다.

```py
if __name__ == "__main__":
    g = Person('greg', 5000)
    j = Person('john', 2000)

    g.show()
    j.show()

    g.give_money(j, 2000)
    print('')

    g.show()
    j.show()
```

```
greg : 5000
john : 2000

greg : 3000
john : 4000
```

인스턴스 메서드를 호출하면 객체가 자동으로 첫 번째 인자인 self 로 객체 자신을 전달한다.

## 파이썬의 클래스

```py
type(Person.__init__)
=> <class 'function'>

type(Person.give_money)
=> <class 'function'>

type(Person.get_money)
=> <class 'function'>

type(Person.show)
=> <class 'function'>
```

Person 클래스에 있는 것은 모두 함수이다. 클래스는 그저 함수의 모음일 뿐이다.

```py
type(g.give_money)
=> <class 'method'>

type(g.get_money)
=> <class 'method'>

type(g.show)
=> <class 'method'>
```

객체 g 의 메서드는 함수가 아니라 메서드인 것을 알 수 있다. 둘의 차이는 무엇일까?

```py
dir(g.give_money) # g가 가진 give_money()메서드의 속성을 확인한다.

=> ['__call__', '__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__func__', '__ge__', '__get__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__self__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__']

g.give_money.__func__
=> <function Person.give_money at 0x7f09c0b28d90> #Person의 클래스 give_money()함수

g.give_money.__self__
=> <__main__.Person object at 0x7f09c0a98fd0> # Person 객체

g.give_money.__func__ is Person.give_money # __func__가 Person클래스의 give_money()함수이다.
=> True

g.give_money.__self__ is g #__self__가 이 메서드를 가진 객체 자신을 참조하고 있다.
=> True
```

이것이 객체에서 메서드를 호출할 때 맨 처음 인자인 self 를 전달하지 않아도 되는 이유이다. 메서드 내부에 함수와 객체의 참조를 가지고 있으므로 함수에 직접 객체의 참조를 전달할 수 있기 때문이다.

객체가 멤버와 메서드를 가질 수 있는 것처럼 클래스도 멤버와 메서드를 가질 수 있다. 클래스가 가지는 멤버를 클래스 멤버라고 하고, 메서드를 클래스 메서드라고 한다.

```py
class A:
    c_mem = 10 # 클래스 멤버

    @classmethod # 데코레이터. 이를 통해 이 메서드는 클래스 메서드가 된다. 클래스 메서드는 클래스가 가진 메서드이다.
    def cls_f(cls):
        print(cls.c_mem)

    def __init__(self, num):
        self.i_mem = num # 인스턴스 멤버 선언

    def ins_f(self):
        print(self.i_mem)

if __name__ == '__main__':
    print(A.c_mem) # 10
    A.cls_f() # 10
```

클래스 멤버와 클레스 메서드는 클래스가 가진 멤버와 메서드이므로 객체가 없어도 클래스를 통해 접근하거나 호출할 수 있다. 객체 지향 패러다임이 꺼리는 전역 변수와 전역 함수를 클래스 멤버와 클래스 메서드를 이용해 대체할 수 있다. 클래스 멤버와 클래스 메서드의 또 다른 특징은 객체에서도 접근하거나 호출할 수 있다는 점이다.

```py
if __name__ == '__main__':
    print(A.c_mem)
    A.cls_f()

    a = A(20) # 객체 생성
    print(a.c_mem) # 객체를 통해 클래스 멤버에 접근
    a.cls_f() # 객체를 통해 클래스 메서드를 호출
```

클래스 멤버의 아주 중요한 기능은 모든 객체가 클래스 멤버를 공유한다는 점이다. 모든 객체가 같은 데이터를 가진다면 이를 클래스 멤버로 만들어서 공유하면 된다.

## 정보 은닉

연관 있는 변수와 함수를 묶는 것을 캡슐화라고 한다. 캡슐화할 때 ㅓ떤 멤버와 메서드는 공개하여 유저 프로그래머가 사용할 수 있도록 하고, 어떤 멤버와 메서드는 숨겨서 유저 프로그래머가 접근할 수 없도록 할 것인지 정해야 하는데 이러한 개념을 정보 은닉(information hiding)이라고 한다. 캡슐화는 정보 은닉을 포함하는 개념이다. 그런데 멤버와 메서드를 공개하거나 숨긴다는 것은 어떤 의미일까? 파이썬은 기본적으로 정보 은닉을 지원하지 않는다.

### C++의 정보 은닉

```C++
class Account{
public: //#1
  // 생성자
  Account(string name, int money) {
    user = name;
    balance = money;
  }
  // 인스턴스 메서드(멤버 함수)
  int get_balance() {
    return balance;
  }
  // 인스턴스 메서드(멤버 함수)
  void set_balance(int money{
    if(money < 0) {
      return;
    }
  balance = money;
  }
  private: //#2
  // 인스턴스 멤버(멤버 변수)
  string user;
  int balance; #3

}
```

public 과 private 이러한 키워드를 접근 제어 지시자(access modifier)라고 하는데 C++에는 public, protected, private 이라는 세 종류의 접근 제어 지시자가 있다.

public 키워드로 선언한 메서드나 멤버는 객체를 만들어 사용하는 유저 프로그래머가 접근하거나 호출할 수 있다. 반면에 private 키워드로 선언한 메서드나 멤버는 클래스 안에서만 사용할 수 있고 객체를 통해서는 접근하거나 호출할 수 없다.

```C++
#include <iostream>
#include <string>
using namespace std;

class Account{
public://#1
	//생성자 : 파이썬 클래스의 __init__()과 같다
	Account(string name, int money){
		user = name;
		balance = money;
	}
	//인스턴스 메서드(멤버 함수)
	int get_balance() {
		return balance;
	}
	//인스턴스 메서드(멤버 함수)
	void set_balance(int money) {
		if (money < 0) {
			return;
		}

		balance = money;
	}

private://#2
	//인스턴스 멤버(멤버 변수)
	string user;
	int balance;//#3
};

int main(void){
	Account my_acnt("greg", 5000);

	//my_acnt.balance;//#4 -> 오류: "Account::balance : cannot access private member declared in class 'Account'"

	my_acnt.set_balance(-3000); // #5

	cout << my_acnt.get_balance() << endl; // 5000

	return 0;
}
```

balance 에 접근할 수 없다. balance 는 set_balance 함수를 통해서만 값을 변경할 수 있으므로 유저 프로그래머가 직접 접근해 balance 값을 음수로 변경하는 실수를 방지할 수 있다. get_balance() 함수에 인자로 음수값을 전달하면 값을 변경하지 않고 함수를 종료하므로 원천적으로 음수가 입력되는 상황을 막을 수 있다.

-3000 을 입력했지만 원래 값인 5000 이 출력됨

OOP 에서 잘된 정보 은닉은 필요한 메서드만 공개하고 나머지는 모두 숨기는 것이다. 멤버에 접근하거나 변경해야 할 때는 액세스 함수(access function)을 사용하여 접근하거나 변경해야 한다. 숨겨진 balance 멤버에 접근하거나 변경하려면 get_balance()나 set_balance() 메서드를 이용해야 하는데 이 두 함수가 바로 액세스 함수이다.

### 파이썬의 정보 은닉

파이썬은 기본적으로 정보 은닉을 지원하지 않는다.

```py
class Account:
    def __init__(self, name, money):
        self.user = name
        self.balance = money

    def get_balance(self):
        return self.balance

    def set_balance(self, money):
        if money < 0:
            return

        self.balance = money

if __name__ == "__main__":
    my_acnt = Account('greg', 5000)
    my_acnt.balance = -3000   #1

    print(my_acnt.get_balance()) # -3000
```

파이썬에서는 완벽한 정보 은닉이 불가능하다. 하지만 유저 프로그래머의 실수를 막을 수 있는 방법은 제공한다.

1. 숨기려는 멤버 앞에 언더바(\_)를 두 개 붙이기
2. 프로퍼티 기법

**언더바 두 개 붙이기**

```py
class Account:
    def __init__(self, name, money):
        self.user = name
        self.__balance = money

    def get_balance(self):
        return self.__balance

    def set_balance(self, money):
        if money < 0:
            return

        self.__balance = money

if __name__ == "__main__":
    my_acnt = Account('greg', 5000)
    my_acnt.__balance = -3000   #1

    print(my_acnt.get_balance()) # 5000
```

```
my_acnt.__dict__

=> {'user': 'greg', '_Account__balance': 5000, '__balance': -3000}
```

balance 를 모두 `__balance`로 바꾸면 이 멤버는 객체가 만들어질 때 이름이 변한다. '\_클래스 이름'이 멤버 앞에 붙게 된다. 그러나 정말로 은닉된 것이 아니기 때문에 유저 프로그래머의 실수는 막을 수 있지만 의도적인 변경까지는 책임지지 않는다.

**프로퍼티 기법**

```py
class Account:
    def __init__(self, name, money):
        self.user = name
        # 인스턴스 멤버 선언이 아니라 #3의  setter 메서드를 호출
        self.balance = money #1

    @property
    def balance(self): #2
        return self._balance

    @balance.setter
    def balance(self, money): #3
        if money < 0:
            return
        #실제 인스턴스 멤버 선언이 일어난느 부분(#1 실행시(생성자 호출시))
        self._balance = money

if __name__ == "__main__":
    my_acnt = Account('greg', 5000)
    my_acnt.balance = -3000   #4

    print(my_acnt.balance) #5 5000
```

데코레이터 @property 를 함수 정의에 붙였다. 데코레이터를 붙이는 순간 balance() 메서드는 getter 함수가 되어 get_balance()와 같은 메서드 역할을 한다.

getter 함수와 이름이 같은 함수 즉, balance()가 하나 더 있는데 여기에는 @balance.setter 가 붙어 있다. 이 함수는 setter 함수가 되어 set_balance() 메서드와 같은 역할을 한다. 중요한 점은 유저 프로그래머가 객체를 만들어 접근할 때는 getter, setter 함수의 이름인 balance 를 마치 멤버인 것처럼 사용한다. 멤버에 직접 접근하는 것 같지만, 사실은 getter, setter 함수를 호출해 실제 멤버인 \_\_balance 에 접근한다.

my_acnt 객체에는 balance 라는 멤버가 없다. balance 라는 이름의 getter setter 메서드만 있을 뿐이다. #4 는 setter 함수인 balance()를 호출한다.

```py
    print(my_acnt.__dict__)
    my_acnt._balance = -3000 # {'user': 'greg', '_balance': 5000} 출력
    print(my_acnt.balance) # -3000
```

`__dict__`로 멤버를 확인할 수 있고`_balance` 멤버로 접근해 값을 음수로 변경하면 setter 함수를 통해 변경하 것이 아니므로 값이 음수로 바뀐다. 파이썬은 완벽한 은닉은 제공하지 않는다.
