# 문제

[717. 1-bit and 2-bit Characters](https://leetcode.com/problems/1-bit-and-2-bit-characters/)
We have two special characters. The first character can be represented by one bit 0. The second character can be represented by two bits (10 or 11).

Now given a string represented by several bits. Return whether the last character must be a one-bit character or not. The given string will always end with a zero.

## 풀이

- 처음 비트가 0이면 1비트 1이면 2비트 이다.
- 마지막 남은 비트의 시작이 0이면 true 아니면 false를 반환한다.

```js
var isOneBitCharacter = function(bits) {
  const length = bits.length
  let i = 0
  while (i < length) {
    if (bits[i] === 0) {
      i += 1
      if (i === length) {
        return true
      }
    } else {
      i += 2
      if (i === length) {
        return false
      }
    }
  }
}
```

## 다른 풀이

```js
const isOneBitCharacter = function(bits) {
  let i = 0
  while (i < bits.length - 1) {
    i += bits[i] + 1
  }
  return i === bits.length - 1
}
```

- 시간 복잡도: bits의 길이 O(N)
- 공간 복잡도: i O(1)
