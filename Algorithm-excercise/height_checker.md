# Height Checker

## 문제

Students are asked to stand in non-decreasing order of heights for an annual photo.

Return the minimum number of students not standing in the right positions. (This is the number of students that must move in order for all students to be standing in non-decreasing order of height.)

[height checker](https://leetcode.com/problems/height-checker/)

## 풀이

```js
var heightChecker = function(heights) {
  const sortedHeights = [...heights].sort((a, b) => a - b)
  return heights.reduce(
    (acc, height, index) => (height !== sortedHeights[index] ? acc + 1 : acc),
    0
  )
}
```

시간 복잡도 O(N)
