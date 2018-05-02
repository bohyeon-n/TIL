### 문제 1

두 정수 `start`, `end`를 입력받아, `start`부터 `end`까지의 모든 정수를 배열로 반환하는 함수를 작성하세요.

예:
```
range(3, 6); -> [3, 4, 5, 6]
```

### 문제 2

수 타입의 값으로만 이루어진 배열을 입력받아, 그 값들의 합을 구하는 함수를 작성하세요.

### 문제 3

배열을 입력받아, falsy인 요소가 제거된 새 배열을 반환하는 함수를 작성하세요.
```js
function toNotFalsy(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i]){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
toNotFalsy([0,false,"java",2,null, undefined])
```
```js
function newArr (arr) {
  newArr.filter
}
```
### 문제 4

배열을 입력받아, 중복된 요소가 제거된 새 배열을 반환하는 함수를 작성하세요.

```js
function newArr (arr) {
  newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(!newArr.includes(arr[i])){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
```



### 문제 5

수 타입의 값으로만 이루어진 두 배열을 입력받아, 다음과 같이 동작하는 함수를 작성하세요.
- 두 배열의 같은 자리에 있는 요소를 더한 결과가 새 배열의 요소가 됩니다.
- 만약 입력받은 두 배열의 길이가 갖지 않다면, 긴 배열에 있는 요소를 새 배열의 같은 위치에 포함시키세요.

예:
```
addArray([1, 2, 3], [4, 5, 6, 7]) -> [5, 7, 9, 7]
```

### 문제 6

배열을 입력받아, 배열의 요소 중 두 개를 선택하는 조합을 모두 포함하는 배열을 작성하세요.

예:
```
combination([1, 2, 3]); -> [[1, 2], [1, 3], [2, 3]]
```

### 문제 7

'금액'과 '동전의 종류가 들어있는 배열'를 입력받아, 최소한의 동전을 사용해서 금액을 맞출 수 있는 방법을 출력하는 함수를 작성하세요.
(단, 동전의 종류가 들어있는 배열에는 큰 동전부터 순서대로 들어있다고 가정합니다.)

예:
```
coins(263, [100, 50, 10, 5, 1]);
// 출력
100
50
10
1
1
1
```

```js
function coins(money, coins){
  //배열일 때는 복수로 써줘야 한다. 
  for (let i = 0; i < coins.length; i++) {
    while (money / coins[i] >= 1) {
      console.log(coins[i]);
      money -= coins[i];
    }
    }
  }
coins(263, [100, 50, 10, 5, 1]);
```
```js
function coins(money, coinTypes){
  let currentMoney = money; 
  let coinIndex = 0;
  while(currentMoney > 0){
    if (currentMoney - coinTypes[coinIndex] >= 0){
      console.log(coinTypes[coinIndex])
      currentMoney  -= coinTypes[coinIndex];
    } else {
      coinIndex++;
    }
  }
}
coins(263, [100, 50, 10, 5, 1]);
```


### 문제 8

수 타입의 값만 들어있는 배열을 입력받아, 해당 배열을 오름차순 정렬하는 함수를 작성하세요. (`Array.prototype.sort`를 사용하지 않고 작성해보세요. [선택 정렬](https://ko.wikipedia.org/wiki/%EC%84%A0%ED%83%9D_%EC%A0%95%EB%A0%AC)을 참고하세요.)