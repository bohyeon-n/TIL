# 객체와 객체지향 프로그래밍 

객체는 생성자 함수를 이용해 정의한다.
생성자 함수는 객체의 프로퍼티, 함수선언, 함수 정의를 포함한다. 

```js
function Checking(amount) {
  this.balance = amount;
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.toString = toString;
}

function deposit(amount){
  this.balance += amount;
}
function withdraw(amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
  }
  if(amount > this.balance) {
    console.log("insufficient funds");
  }
}
function toString(){
  return `balance ${this.balance}`;
}

let account = new Checking(500);
console.log(account.toString()); // balance 500
account.deposit(1000);
account.withdraw(750);

console.log(account.toString()); // balance 750 
account.withdraw(800); // insufficient funds

```




