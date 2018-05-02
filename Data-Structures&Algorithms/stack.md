# 스택 

리스트는 데이터를 자연스럽게 나열한 구조다. 리스트는 데이터 저장 순서가 중요하지 않거나, 저장된 데이터를 검색할 필요가 없을 때 요긴한 자료구조다. 하지만 일부 애플리케이션에서는 단순한 일반 리스트보다 좀 더 복잡한 자료구조가 필요할 때가 있다. 

리스트와 비슷하면서 보다 다양한 문제를 해결할 수 있는 스택이라는 자료구조가 있다. 
스택은 가장 윗부분에서만 자료의 추가와 삭제가 일어나므로 실행속도가 빠르고 구현이 쉬운 효율적인 자료구조다.

스택의 후입선출이라는 특성 때문에 스택의 탑에 있지 않은 요소에는 접근할 수 없다. 스택의 밑바닥에 있는 요소에 접근하려면 모든 요소를 제거하는 수밖에 없다. 

```js
class Stack{
  constructor(){
    this.dataStore = [];
    this.top = 0;
  }
  push(element){
    this.dataStore[this.top++] = element;
  }
  pop() {
    return this.dataStore[--this.top];
  }
  peek() {
    return this.dataStore[this.top -1]
  }
  length() {
    return this.top;
  }
  clear() {
    this.top = 0;
  }
}
const s = new Stack();
s.push('bohyeon');
s.push('david');
s.push('raymond');
s.push('bryan')
console.log(s.length())
let popped = s.pop();
console.log(popped);
s.peek();
s.push('sewoon');
console.log(s.peek())
s.clear();
s.length();
console.log(s.peek());// undefined

```
## stack 클래스 이용하기

### 진법변환
n이라는 숫자를 b라는 진법으로 변환할 때(2진수에서 9진수까지)
1 n의 가장 오른쪽 숫자는 n%b다. 이 값을 스택에 추가한다.
2 n을 n/b으로 치환한다.
3 n = 0이 되고 나머지가 없을 때까지 1번, 2번 과정을 반복한다.
4 스택에 저장된 숫자를 모두 꺼내 변환된 숫자 문자열을 만든다. 

```js
function mulBase(num, base) {
  let s = new Stack();
do {
  s.push(num % base);
  num = Math.floor(num /= base)
  } while (num > 0);
  let converted = '';
  while (s.length() > 0) {
    converted += s.pop();
  }
  return converted;
}
mulBase(12,2)
```
## 재귀

팩토리얼 함수의 재귀 구현
```js
function fac(num) {
  if(num === 0) {
    return 1;
  }else {
    return num* fac(num-1);
  }
}
fac(5)
```
스택을 이용한 팩토리얼 함수 구현 

```js
function fact(n) {
  let s = new Stack();
  while (n > 1) {
    s.push(n--)
  }
  let product = 1;
  while(s.length() > 0) {
    product *= s.pop();
  }
  return product;
}
fact(5)
```

## 연습문제 
1. 수식을 열고 닫는 괄호 쌍이 제대로 갖춰졌는지 확일할 때도 스택을 이용할 수 있다. 수식을 인자로 받아 수식에 열거나 닫느 괄호가 없을 때 그 위치를 반환하는 함수를 구현하시오
예를 들어 '2.3 + 23 / 12 + (3.14159 * .24' 에는 닫는 괄호가 없다.
2. 다음과 같은 형식을 갖는 후위 연산 표기를 처리하는 후위 연산 평가자를 구현하시오.
3. 우리 주변에 페즈 디스펜서는 스택과 같은 방식으로 동작한다. 페즈 디스펜서에 빨간색, 노란색, 흰색 사탕이 섞여 있는데 노란색 사탕은 우리가 싫어하는 맛이다. 스택을 이용하여 디스펜서의 다른 사탕 순서는 바꾸지 말고 노란색 사탕만 제거하는 프로그램을 구현하시오. 한 개 이상의 스택을 사용할 수 있다. 