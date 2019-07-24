# Add Digits

## 문제

[add digits](https://leetcode.com/problems/add-digits/)

Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

> Example:

> Input: 38
> Output: 2
> Explanation: The process is like: 3 + 8 = 11, > 1 + 1 = 2.
> Since 2 has only one digit, return it.

## 문제 풀이

- 주어진 숫자가 10 이상이면 각각 숫자를 분리하여 더한다
- 더한 숫자를 다시 addDigits함수에 인자로 넣는다.
- 10 이하면 숫자를 리턴한다.

```js
var addDigits = function(num) {
  if (num < 10) {
    return num
  } else {
    const sum = String(num)
      .split('')
      .reduce((total, num) => total + Number(num), 0)
    return addDigits(sum)
  }
}
```
