# 문제

[buddy strings](https://leetcode.com/problems/buddy-strings/)

Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.

## 풀이

두 숫자만 서로 바꿔 같은 문자열이 되는 경우 생각해보기

- A와 B가 동일한 경우 같은 문자가 2개 이상있을 때 같은 문자를 바꿀 때 동일한 경우
- 서로다른 A의 문자와 B의 문자를 하나씩 바꿨을 때 동일 한 경우

의사코드

- A와 B의 문자열 길이가 다르면 false를 반환한다.
- A와 B의 문자열이 같고 동일한 문자가 2번이상 있으면 true를 반한다.
- A를 돌면서 맨처음 발견되는 B와 다른 문자 두 개를 찾아서 바꾼다. 바꾼 문자열이 B와 같으면 true 다르면 false를 반환한다.

구현해보기

```js
var buddyStrings = function(A, B) {
  if (A.length !== B.length) {
    return false
  }
  if (A === B) {
    return A.split('').some((number, index) => {
      rgxp = new RegExp(number, 'g')
      return A.match(rgxp).length >= 2
    })
  }
  let i = null
  for (let index = 0; index < A.length; index++) {
    if (A[index] !== B[index]) {
      if (i !== null) {
        // swap 하기
        const swapString =
          A.slice(0, i) +
          A[index] +
          A.slice(i + 1, index) +
          A[i] +
          A.slice(index + 1, A.length)
        return swapString === B
      } else {
        i = index
      }
    }
  }
}
```

## 다른 풀이 보기

```js
var buddyStrings = function(A, B) {
  if (A.length != B.length) {
    return false
  }
  let [dif, chars] = [[], new Set(A)]
  for (i in A) {
    if (A[i] != B[i]) {
      dif.push([A[i], B[i]])
    }
  }
  return (
    (dif.length == 2 && dif[0].join() == dif[1].reverse().join()) ||
    (dif.length == 0 && chars.size != A.length)
  )
}
```

- 정규 표현식을 써서 같은 문자열이 몇 개인지 찾았는데 [`new Set()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)을 하면 중복된 값을 제거한 유일한 값만 저장한다.

- 두 쌍의 값만 서로 다른 문자여야 한다. -> 서로 다른 문자가 2쌍이여야 하고 이 둘을 바꿔도 동일하다면 true를 반환할 수 있다.
  두 문자를 찾아서 저장하고 이를 리버스 해서 동일한지 체크한다.
