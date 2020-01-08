# Ugly Number

## 문제

[ugly number - leetcode](https://leetcode.com/problems/ugly-number/)

Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

## 풀이

- 재귀함수로 풀기
- num을 받아서 2, 3, 5 중 하나로 나눠지면 몫을 다시 함수에 넣어 실행한 값을 리턴한다.
- 2, 3, 5 로 나눈 값이 1이 되면 true를 반환한다.
- 더 이상 나눌 수 없으면 false를 반한다.

```js
var isUgly = function(num) {
  if (num === 0) return false
  if (num === 1) return true
  if (num % 2 === 0) {
    if (num / 2 === 1) {
      return true
    } else {
      return isUgly(num / 2)
    }
  } else if (num % 3 === 0) {
    if (num / 3 === 1) {
      return true
    } else {
      return isUgly(num / 3)
    }
  } else if (num % 5 === 0) {
    if (num / 5 === 1) {
      return true
    } else {
      return isUgly(num / 5)
    }
  }

  return false
}
```

재귀 함수를 사용하여 변수에 값을 변화시키는 것이 아니라 값을 다시 함수에 인자로 넣어 반환함

## 다른 풀이 보기

while문으로 풀기

- 재귀함수와 진행 과정은 같음
- 위에는 재귀 함수를 사용하여 풀었는데 아래는 반복문으로 품

```js
var isUgly = function(num) {
  while (true) {
    if (num % 2 === 0) {
      num /= 2
    } else if (num % 3 === 0) {
      num /= 3
    } else if (num % 5 === 0) {
      num /= 5
    } else if (num === 1) {
      return true
    } else {
      return false
    }
  }
}
```

- 2, 3, 5 차례대로 각각 나누어 떨어질 때까지 계속 나눈다.
- 마지막에 num이 1인지 체크한다.
- num이 14라면 마지막 num은 7이므로 1이 아니다 -> false 반환

```js
function isUgly(num) {
  if (num <= 0) return false
  while (parseInt(num / 2) === num / 2) {
    num /= 2
  }
  while (parseInt(num / 3) === num / 3) {
    num /= 3
  }
  while (parseInt(num / 5) === num / 5) {
    num /= 5
  }
  return num === 1
}
```

## 비교

재귀함수로 풀면 스택에 현재 실행중인 메서드가 쌓이므로 너무 많이 스택에 쌓일 수 있다.
이럴때는 while문으로 써야 한다.

## 시간 복잡도

O(log n) (???)
number가 50이고 2로 나눈다고 하면 log n
최대 log n O(log n)

## Tail Call Optimization(TCO)

콜스택은 함수 호출을 통해 프로그램을 탐색하고 해당 함수의 로컬 변수를 저장하는 데 사용되는 스택 데이터 구조를 구현한 것이다.

꼬리 호출 최적화는 마지막 함수 표현식이 다른 함수를 부르면, 엔진이 호출 스택이 커지지 않도록 최적화한다.

최적화란 반환할 때 함수를 호출하면 '호출이 된'함수에서 '호출을 한'함수로 돌아오는 반환 지점을 가지고 있어야 한다. 만약 '호출을 한'함수가 메모리를 가지지 않는다면 '호출을 한' 함수로 돌아올 필요가 없으며, 함수들이 한 번씩 '호출이 되고' 마지막으로 '호출이 된' 함수는 최초 함수 호출 지점으로 값을 반환하는 것을 뜻한다.
