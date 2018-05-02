### 문제 1

양수를 입력받아 이 수를 반지름으로 하는 원의 넓이를 반환하는 함수를 작성하세요.

### 문제 2

두 정수 `min`, `max` 를 입력받아, `min` 이상 `max` 미만인 임의의 정수를 반환하는 함수를 작성하세요.

### 문제 3

정수를 입력받아, 5 단위로 올림한 수를 반환하는 함수를 작성하세요.

예:
```
ceilBy5(32); -> 35
ceilBy5(37); -> 40
```
```js
function ceilBy5(num){
  let mod = num % 5;
  let x = 5 - mod 
  return num + x;
}
ceilBy5(37);
```


### 문제 4

배열을 입력받아, 요소들의 순서를 뒤섞은 새 배열을 반환하는 함수를 작성하세요.
```js
function newArr(arr){
  let newArr =[]
  let a = arr.length;
  for(i = 0; i < a; i++){
    console.log(i);
  let x = Math.floor(Math.random() *arr.length)
  newArr.push(arr[x]);
  arr.splice(x,1)
  console.log(newArr)
}
return newArr;
}
newArr([1,2,3,4,5]);
```

### 문제 5

임의의 HTML 색상 코드를 반환하는 함수를 작성하세요.

### 문제 6

양수를 입력받아, 그 수만큼의 길이를 갖는 임의의 문자열을 반환하는 함수를 작성하세요.

### 문제 7

수 타입의 값으로만 이루어진 배열을 입력받아, 그 값들의 표준편차를 구하는 함수를 작성하세요.

```js
function standard_deviation(arr){
  let average = 0
  let result = 0 
  for(let item of arr){
    average += item / arr.length;
  }
  for(let item of arr){
    result += Math.pow(item - average,2) / (arr.length-1); 
  }
  return Math.sqrt(result)
}
standard_deviation([1,2,3,4,5]);

```

