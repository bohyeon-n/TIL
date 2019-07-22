# Add Strings

[add-string leetcode](https://leetcode.com/problems/add-strings/submissions/)

Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

# 풀이

- num1 num2 스트링 배열을 뒤에서 부터 빼서 계산한다.(pop)
- 각 자리수를 더한다.
- 자리올림될 숫자는 변수에 대입한다.(stack변수)
- 자리수를 더할 때 올림한 숫자가 있으면 더해준다.
- num1, num2둘 다 더 이상 pop할 문자가 없을 때까지 반복한다.
- 마지막에 올림한 숫자가 있으면 더해준다.

```js
var addStrings = function(num1, num2) {
  num1 = num1.split('')
  num2 = num2.split('')
  let result = ''
  let stack = 0
  while (num1.length > 0 || num2.length > 0) {
    const sum =
      Number(num1.pop() || 0) + Number(num2.pop() || 0) + Number(stack)
    result = (sum % 10) + result
    stack = sum >= 10 ? Math.floor(sum / 10) : 0
  }

  return stack !== 0 ? stack + result : result
}
```
