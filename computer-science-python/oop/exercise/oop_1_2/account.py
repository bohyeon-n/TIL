class Account:
    num_acnt = 0  # 개설된 계좌 수 를 클래스 멤버로 만들어준다.

    @classmethod
    def get_num_acnt(cls):  # 클래스 멤버를 반환하는 클래스 메서드 정의
        '''

        cls.get_num_acnt(cls) -> integer
        '''
        return cls.num_acnt

    # __init__안에 있는 self.user와 slef.balance는 객체마다 다른 갑슬 가지는 인스턴스 멤버이다.
    def __init__(self, name, money):
        self.user = name
        self.balance = money
        Account.num_acnt += 1  # 클래스 멤버인 계좌수를 하나씩 늘려준다.

    def deposit(self, money):
        if money < 0:
            return
        self.balance += money

    def withdraw(self, money):
        if money > 0 and money <= self.balance:
            self.balance -= money
            return money
        else:
            return None

    # 객체가 없으면 인스턴스 메서드는 호출할 수 없다. 첫 번째 인자로 전달할 객체가 없기 때문이다. 그러므로 대부분 객체를 사용해서 인스턴스 메서드를 호출한다.
    # #6처럼 클래스를 사용해서 호출할 수도 있다. 주의할 점은 클래스로 호출하는 것은 메서드가 아니라 함수라는 점이다. 함수이므로 첫 번째 인자 self를 넘겨주어야 한다.
    def transfer(self, other, money):  # transfer()메서드는 메시지 패싱을 하는 함수고
        '''
        obj.transfer(other, money) -> bool
        other: The object to ineract with
        money: money the user wants to send

        returns the if the balance is enough to transfer
        return false if not

        '''

        mon = self.withdraw(money)
        if mon:
            other.deposit(mon)
            return True
        else:
            return False

    # __str__() 메서드는 파이썬이 예약한 함수이다. 객체 obj를 만들고 pirnt(obj)를 실행하면 __str__() 메서드에서 반환된 문자열이 출력된다.
    def __str__(self):  # 6
        return 'user: {}, balance: {}'.format(self.user, self.balance)


if __name__ == '__main__':
    # 객체 생성
    my_acnt = Account('bohyeon', 5000)
    your_acnt = Account('john', 1000)

    # 생성 확인
    print('object created')
    print(my_acnt)
    print(your_acnt)
    print()

    '''
    object created
    user: bohyeon, balance: 5000
    user: john, balance: 1000
    ()
    '''

    # 인스턴스 메서드를 호출하는 방법
    # 1. by object

    my_acnt.deposit(500)

    # 2. by class
    # Account.deposit(my_acnt, 500)

    # deposit 확인
    print('deposit')
    print(my_acnt)
    print()
    '''
    deposit
    user: bohyeon, balance: 5500
    ()
    '''

    # withdraw 함수 사용법
    print('withdraw')
    money = my_acnt.withdraw(1500)
    if money:
        print('withdrawn money: {}'.format(money))
    else:
        print('Not enough to withdraw')
    print()
    '''
    withdraw
    withdrawn money: 1500
    ()
    '''

    # 클래스 멤버에 접근하는 방법
    print('class member')

    # 1.by class
    print(Account.num_acnt)  # 2

    # 2. by object
    # orunt(my_acnt.num_acnt)
    print()

    # 클래스 메서드를 호출하는 방법
    print('class method')

    # 1.by class
    n_acnt = Account.get_num_acnt()

    # 2. by object
    # n_acnt = my_acnt.get_num_acnt()

    print('the number of accounts : {}'.format(n_acnt))
    print()

    '''
    class method
    the number of accounts : 2
    '''
    # 메시지 패싱
    print('message passing')
    print(my_acnt)
    print(your_acnt)
    res = my_acnt.transfer(your_acnt, 2000)
    if res:
        print('transfer succeede')
    else:
        print('transfer failed')
    print(my_acnt)
    print(your_acnt)
    '''
    message passing
    user: bohyeon, balance: 4000
    user: john, balance: 1000
    transfer succeede
    user: bohyeon, balance: 2000
    user: john, balance: 3000
    '''
