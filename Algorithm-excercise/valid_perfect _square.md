# Valid Perfect Square

## 문제

[valid perfect square](https://leetcode.com/problems/valid-perfect-square/)
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

## 풀이

```js
var isPerfectSquare = function(num) {
  let limit = Math.ceil(num / 2)
  while (limit > 0) {
    if (num === limit * limit) {
      return true
    }
    limit--
  }
  return false
}
```

## 다른 사람 풀이 보기

```js
var isPerfectSquare = function(num) {
  if (num === 0 || num === 1) {
    return true
  }
  return search(num, 2, num - 1)
}

function search(num, i, j) {
  if (j <= i) {
    return i * i === num
  }
  var mid = Math.floor((i + j) / 2)
  var sqmid = mid * mid
  if (sqmid === num) {
    return true
  }
  return sqmid > num ? search(num, i, mid - 1) : search(num, mid + 1, j)
}
```
