# Contains Duplicate

## 문제

[contains duplicate](https://leetcode.com/problems/contains-duplicate/)
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

```
Input: [1,2,3,1]
Output: true
```

Example 2:

```
Input: [1,2,3,4]
Output: false

```

## 풀이

- nums를 수가 작은 순서대로 정렬한다.
- 차례대로 같은 숫자가 있는지 확인한다.
- 같은 숫자가 있으면 즉시 true 반환
- 없으면 false 반환

```js
var containsDuplicate = function(nums) {
  const sortedNums = nums.sort((a, b) => a - b)
  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] === sortedNums[i + 1]) return true
  }
  return false
}
```

## leet code 제공 솔루션

### approach #1

- linear serach altorithm
- linear search는 리스트의 특정값을 찾는 방법으로 원하는 값을 찾을 때 까지 각각의 속성들을 확인하는 것이다.

- 시간 복잡도: O(n^2)

- 공간 복잡도 O(1)

```js
var containsDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] === nums[i]) return true
    }
  }
  return false
}
```

## approach #2

- sorting
- 처음 풀이와 같음
- 시간 복잡도 O(n log n)
- 공간 복잡도 O(1)
