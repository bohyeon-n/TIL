# Valid Palindrome

## 문제

[valid palindrome](https://leetcode.com/problems/valid-palindrome/)

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

## 풀이

- 알파벳, 숫자만 걸러낸다.
- 소문자로 변환한다.
- 빈 문자열이면 true 를 반환한다.
- 문자의 맨 처음과 마지막을 비교한다.
- 두번째와 마지막 두번째를 비교한다.
- 문자가 다르면 false를 반환
- 이 과정을 반복한다.
- 모두 같으면 true를 반환한다.

```js
var isPalindrome = function(s) {
  const onlyAlpha = s.toLowerCase().match(/[a-z0-9]/g)
  if (!onlyAlpha) return true
  const length = onlyAlpha.length
  for (let i = 0; i < Math.ceil(length / 2); i++) {
    if (onlyAlpha[i] !== onlyAlpha[length - i - 1]) {
      return false
    }
  }
  return true
}
```

- while 문 사용

```js
var isPalindrome = function(s) {
  const onlyAlpha = s.toLowerCase().match(/[a-z0-9]/g)
  if (!onlyAlpha) return true
  let r = 0
  let l = onlyAlpha.length - 1
  while (r < l) {
    if (onlyAlpha[r] !== onlyAlpha[l]) return false
    r++
    l--
  }
  return true
}
```
