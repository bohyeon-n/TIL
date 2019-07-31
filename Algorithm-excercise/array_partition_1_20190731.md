# Array Partition I

## 문제

[array partition](https://leetcode.com/problems/array-partition-i/)

Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

Example 1:

```
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
```

## 풀이

- 숫자들을 작은 수부터 정렬한다.
- 정렬한 숫자들 중 홀수들만 더해준다.

```js
var arrayPairSum = function(nums) {
  const sorted = nums.sort((a, b) => a - b)
  return sorted.reduce((preAcc, currentValue, currentIndex) =>
    currentIndex % 2 === 0 ? currentValue + preAcc : preAcc
  )
}
```
