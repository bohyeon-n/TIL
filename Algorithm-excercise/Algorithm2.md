```javascript
function hide_numbers(s){
  for(var i = 0;i<s.length-4 ;i++){
  s = s.replace(s[i],"*");
  }
 return s
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));
```
```javascript
function hide_numbers(s){

 return "*".repeat(s.length-4) + s.slice(-4) 
  
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));
```

slice();
slice(begin, end);
slice(begin);


