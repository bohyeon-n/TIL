# String Compression

## 문제

[string compression - leetcode](https://leetcode.com/problems/string-compression/)

## 풀이

```js
function compress(chars) {
  let i = chars.length - 1;
  while (i >= 0) {
    let curr = chars[i];
    let c = 1;
    while (curr === chars[--i]) c++;
    if (c > 1) chars.splice(i + 2, c - 1, ...c.toString());
  }
}
```

- 시간 복잡도 O(N) chars의 길이
- 공간 복잡도 O(1)
  - i, curr, c;
