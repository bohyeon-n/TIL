# Palindrome Number 

## 문제 

[palindrome number](https://leetcode.com/problems/palindrome-number/)

Coud you solve it without converting the integer to a string?

## 풀이 

- 모든 음수는 palindrome 숫자가 아니다.
- x가 10으로 나눈 나머지가 0이고 x가 0이 아닐 때, palindrome이 아니다. (100, 200...)
- rev가 x보다 작다면 계속해서 10으로 나눠 마지막 자리수를 계산하여 rev 숫자를 완성한다. 
- x와 rev 의 숫자를 비교한다. 
- x와 rev가 같거나 rev를 10으로 나눈 소수 부분을 제외한 정수 부분이 x와 같으면 true 를 반환한다. (홀수 자리수 일 때 가운데 숫자를 제외한 양 옆의 숫자만을 계산해야 하므로 ex)12321) 

```js
var isPalindrome = function(x) {
    if(x < 0 || (x % 10 === 0 && x != 0)) {
      return false
    }
    let rev = 0;
    while(rev < x) {
      rev *= 10;
      rev += x % 10; 
      x = Math.trunc(x / 10)
    }
    return rev === x || Math.trunc(rev/10) === x; 
};

```
- 시간 복잡도 
  10으로 계속 나누므로 
  O(log10(n))
- 공간 복잡도 
  O(n)