# Sort Array By Parity II

## 문제

[Sort Array By Parity II](https://leetcode.com/problems/sort-array-by-parity-ii/)

Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

You may return any answer array that satisfies this condition.

## 풀이

- 짝수 인덱스 변수와 홀수 인덱스 변수를 생성한다.
- 여기에 현재 넣어야 할 짝수, 홀수의 엘리먼트 인덱스를 저장한다.
- 배열을 돌면서 짝수면 짝수 인덱스에 넣고 짝수 인덱스를 다음에 넣어야할 인덱스로 재대입한다. (+2 )
- 홀수도 마찬가지임

```js
var sortArrayByParityII = function(A) {
  const sorted = []
  let evenIndex = 0
  let oddIndex = 1
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      sorted[evenIndex] = A[i]
      evenIndex += 2
    } else {
      sorted[oddIndex] = A[i]
      oddIndex += 2
    }
  }
  return sorted
}
```

- 시간 복잡도
  O(N)

## 다른 사람 풀이 보기

- filter를 사용하여 먼저 짝수와 홀수를 분리한 다음 배열에 하나씩 넣는 방법

```js
let evenArray = A.filter(x => x % 2 === 0)
let oddArray = A.filter(x => x % 2 === 1)
return A.map((x, index) => (index % 2 === 0 ? evenArray.pop() : oddArray.pop()))
```

- 시간복잡도
  3번 반복 -> O(N)

---

```py
class Solution(object):
  def sortArrayByParityII(self, A):
      """
      :type A: List[int]
      :rtype: List[int]
      """
      res = [0]*len(A)
      i = 0
      j = 0
      for a in A:
          if a % 2 == 0:
              res[i] = a
              i += 2
          else:
              res[j] = a
              j += 2
          return res
```
