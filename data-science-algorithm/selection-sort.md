# 선택 정렬

## 정렬이란?

리스트의 항목을 오름차순 또는 내림차순으로 정렬해 놓으면 사람이나 컴퓨터가 리스트에서 어떤 항목을 찾을 때 이진검색 등과 같은 알고리즘을 이용해서 빠르고 편리하게 찾을 수 있다. 자바스크립트에는 정렬 방법이 내장되어 있다. 이는 숫자의 배열이나 문자열 배열에 사용할 수 있다.

```js
const animals = ["gnu", "zebra", "antelope", "aardvark", "yak", "iguana"];
animals.sort();
console.log(animals);
```

자바스크립트에 내장된 정렬법이 있다고 해도, 정렬은 똑같은 문제를 해결하는데 많은 방법이 있다는 것을 보여주는 훌륭한 예이다. 이 방법 중 어느 것이 더 뛰어난지도 말이죠. 정렬법을 이해하는 것은 알고리즘과 컴퓨터 과학을 공부하기 위한 첫 단계이다.

## 응용: 스왑 함수 구현

**스왑 함수**

정렬 알고리즘의 중요한 단계는 배열 내 두 개 항목의 위치를 바꾸는 것이다.

```js
const swap = function(array, firstIndex, secondIndex) {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};
```

## 응용: 하위 배열에서 최솟값 찾기

```js
const indexOfMinimum = function(array, startIndex) {
  let minValue = array[startIndex];
  let minIndex = startIndex;
  for (let i = minIndex + 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }
  return minIndex;
};
```

## 응용: 선택 정렬 구현

```js
const selectionSort = function(array) {
  for (let i = 0; i < array.length; i++) {
    let min = indexOfMinimum(array, i);
    swap(array, min);
  }
};
```

## 선택 정렬 분석하기

선택 정렬은 배열의 인덱스를 반복한다. 각 인덱스마다 indexOfMinimum 과 swap 을 호출한다.
배열의 길이가 n 이라면 배열에는 요소가 n 개 있다.

선택 정렬은 반복문을 실행할 때마다 코드 두 줄을 실행하므로 총 2n 줄의 코드를 실행한다고 생각할 수 있다. 하지만 사실은 다릅니다. indexOfMinimum 과 swap 은 함수이다. 함수가 호출된다는 것은 여러 줄의 코드가 실행되는 것이다.

swap 을 한 번 호출할 때마다 몇 줄의 코드가 실행될까? 일반적인 구현 방법에는 세 줄이 실행된다. 따라서 swap 은 호출 때마다 항상 같은 시간이 소요된다.

그렇다면 indexOfMinimum 은 한 번 호출할 때마다 몇 줄의 코드가 실행될까?
indexOfMinimum 의 호출에 반복문이 몇 번 실행되는지 알려면 하위 배열 구간의 크기를 알아야 한다. 만일 하위 배열의 범위가 배열 전체라면 루프는 n 번 실행된다.

배열의 크기가 8 이라면...

1. 첫 번 째 indexOfMinimum 호출에서는 배열의 모든 값을 봐야 하기 때문에 총 8 번 실행된다.
2. 두 번 째 indexOfMinimum 호출에서는 하위 배열의 인덱스 1 번부터 7 번까지 봐야 하기 떄문에 idnexOfMinimum 의 반복문 내부는 총 7 번 반복된다.

...

이렇게 나오는 반복문의 실행되는 총 횟수는 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 36 번이다.

**알아두기: 1 부터 n 까지 수의 합 계산하기**

수를 더하기 쉽게 다시 배열하면 계산이 더욱 쉬워진다.

연속하는 정수의 합을 쉽게 계산하는 방법을 일반화시켜 보자면

1. 가장 작은 수와 가장 큰 수끼리 짝지어 서로 더한다.
2. 짝지은 수의 개수로 곱해준다.

1 부터 n 까지 수의 합은 어떻게 구현할까? 이와 같은 수열은 수학에서 **등차급수** 라고 부른다.
여기서 가장 작은 수와 가장 큰 수의 합은 n + 1 이다. 수가 총 n 개 만큼 있으므로 n/2 개의 쌍을 만들 수 있다. 따라서 1 부터 n 까지 수의 합은 (n + 1)(n/2) 으로 나타내며 n^2/2 + n/2 으로도 바꿔서 쓸 수 있다.

### 선택 정렬에 대한 점근적 실행 시간 분석하기

선택 정렬에 소요되는 총 실행 시간은 세 부분으로 나눌 수 있다.

1. 모든 indexOfMinimum 호출에 대한 실행시간.
2. 모든 swap 호출에 대한 실행시간.
3. selectionSort 함수 내 남아있는 나머지 반복문의 실행시간.

swap 은 n 번 호출되고 그때마다 같은 시간이 소요된다. 점근적 표기법을 사용하면 swap 을 호출하는데 Θ(n) 시간이 걸린다. slectionSort 에 있는 나머지 반복문은 단지 반복문 변수를 비교하여 약간씩 변화를 주거나 indexOfMinimum 와 swap 을 호출하는 것밖에 없으므로
n 번 반복되는 루프는 Θ(n) 만큼의 시간이 걸릴 것으로 예측 가능하다.

indexOfMinimum 의 반복문은 매번 같은 시간이 소요된다. 첫 번쨰 호출에서 이 루프는 n 번만큼 반복되며 그 다음부터는 n - 1, n - 2 이렇게 줄어든다. 등차급수이다. 따라서 indexOfMinimum 의 모든 호출에 따른 소요시간은 어떤 상수와 n^2/2 + n/2 을 곱한 만큼이다.
Θ 표기법에서는 곱해주는 상수값이나 일반항에 들어간 1/2 이나 하위항은 무시한다. 결과적으로 모든 indexOfMinimum 호출에 대한 실행시간은 Θ(n^2)이다.

위의 실행시간을 모두 더해보면, Θ(n^2), Θ(n), Θ(n)으로 Θ(n^2)은 그중에서도 가장 유효한 항이므로 선택 정렬의 실행시간은 Θ(n^2)으로 정의할 수 있다.

선택 정렬에서는 특별히 값이 바뀔만한 경우가 존재하지 않는다. 따라서 선택 정렬의 실행시간은 모든 경우에 Θ(n^2) 라고 할 수 있다.
