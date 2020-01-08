# 문제

[arranging coins](https://leetcode.com/problems/arranging-coins/submissions/)

You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

Given n, find the total number of full staircase rows that can be formed.

n is a non-negative integer and fits within the range of a 32-bit signed integer.

## 풀이

- conins 값에서 row 값을 뺀다.
- 한 번 반복할 때 마다 row 값이 1씩 증가한다.
- conins가 0보다 작아지기 전까지 반복한다.
- 최종 row -1 값을 반환한다.

```js
var arrangeCoins = function(n) {
  let row = 0
  while (n >= 0) {
    n = n - ++row
  }
  return row - 1
}
```
