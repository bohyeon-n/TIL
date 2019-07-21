# 3Sum

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

```
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
[-1, 0, 1],
[-1, -1, 2]
]
```

```js
function solution(numbers) {
  numbers.sort((a, b) => {
    const splitedA = a.toString().split('')
    const splitedB = b.toString().split('')
    // 작은 길이
    for (let i = 0; i < splitedA.length; i++) {
      if (!splitedB[i]) {
        return splitedA[i] > splitedB[i - 1] ? -1 : +1
      } else if (splitedB[i + 1]) {
        return splitedA[i] > splitedB[i + 1] ? -1 : +1
      }
      if (splitedA[i] === splitedB[i]) {
        continue
      } else if (splitedA[i] > splitedB[i]) {
        return -1
      } else {
      }
    }

    return 0
  })
  return numbers.join('')
}
```
