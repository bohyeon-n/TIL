# Relative Sort Array

## 문제

Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

## 풀이

- 배열의 숫자와 숫자의 순서를 담은 객체의 배열을 생성한다.
- 두 번 째 인자로 준 배열에 없는 숫자면 그 숫자를 마지막에 오름차순으로 배열해야 하므로 그 숫자의 길이에 숫자를 더한 값을 순서값에 넣는다.
- 이 배열을 숫자의 순서대로 sorting 한다.
- 이 배열을 다시 숫자만 담은 배열로 바꾼다.

bubble sorting 알고리즘을 사용함

```js
var relativeSortArray = function(arr1, arr2) {
  let swap = true;
  const array = arr1.map((number, index) => {
    const order = arr2.indexOf(number);
    return {
      number: number,
      order: order === -1 ? arr1.length + number : order
    };
  });
  return sortArray(array).map(numberInfo => numberInfo.number);
};

const sortArray = array => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i].order > array[i + 1].order) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  }
  return array;
};
```

시간 복잡도는 O(N2)
array1의 모든 요소를 돌면서 체크한다. 최악의 경우 이를 배열의 길이만큼 반복해야 한다.
