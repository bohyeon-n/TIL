# Valid Anagram

Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

```js
Input: (s = "anagram"), (t = "nagaram");
Output: true;
```

Example 2:

```js
Input: (s = "rat"), (t = "car");
Output: false;
```

## 나의 풀이[JavaScript]

### 의사코드

1. s, t 문자열을 정렬한다.
2. 정렬한 문자열을 서로 비교한다.
3. 문자열이 서로 일치하면 true
4. 일치하지 않으면 false를 반환한다.

### 코드

```js
const isAnagram = function(s, t) {
  const arr1 = s.split("").sort();
  const arr2 = t.split("").sort();

  return arr1.join("") === arr2.join("");
};
```

### 시간복잡도

- split()메서드 시간복잡도는 O(n)

- sort() 메서드는 v8 엔진에서는 QuickSort 와 InsertionSort로 구현되어있다. 시간복잡도는 ...ㅎ

  - O(nlog2n)

- join() 메거드는 O(n) ? 이지 않을 까..?

```js
var QuickSort = function QuickSort(a, from, to) {
  var third_index = 0;
  while (true) {
    // Insertion sort is faster for short arrays.
    if (to - from <= 10) {
      InsertionSort(a, from, to);
      return;
    }
    if (to - from > 1000) {
      third_index = GetThirdIndex(a, from, to);
    } else {
      third_index = from + ((to - from) >> 1);
    }
    // Find a pivot as the median of first, last and middle element.
    var v0 = a[from];
    var v1 = a[to - 1];
    var v2 = a[third_index];
    var c01 = comparefn(v0, v1);
    if (c01 > 0) {
      // v1 < v0, so swap them.
      var tmp = v0;
      v0 = v1;
      v1 = tmp;
    } // v0 <= v1.
    var c02 = comparefn(v0, v2);
    if (c02 >= 0) {
      // v2 <= v0 <= v1.
      var tmp = v0;
      v0 = v2;
      v2 = v1;
      v1 = tmp;
    } else {
      // v0 <= v1 && v0 < v2
      var c12 = comparefn(v1, v2);
      if (c12 > 0) {
        // v0 <= v2 < v1
        var tmp = v1;
        v1 = v2;
        v2 = tmp;
      }
    }
    // v0 <= v1 <= v2
    a[from] = v0;
    a[to - 1] = v2;
    var pivot = v1;
    var low_end = from + 1; // Upper bound of elements lower than pivot.
    var high_start = to - 1; // Lower bound of elements greater than pivot.
    a[third_index] = a[low_end];
    a[low_end] = pivot;

    // From low_end to i are elements equal to pivot.
    // From i to high_start are elements that haven't been compared yet.
    partition: for (var i = low_end + 1; i < high_start; i++) {
      var element = a[i];
      var order = comparefn(element, pivot);
      if (order < 0) {
        a[i] = a[low_end];
        a[low_end] = element;
        low_end++;
      } else if (order > 0) {
        do {
          high_start--;
          if (high_start == i) break partition;
          var top_elem = a[high_start];
          order = comparefn(top_elem, pivot);
        } while (order > 0);
        a[i] = a[high_start];
        a[high_start] = element;
        if (order < 0) {
          element = a[i];
          a[i] = a[low_end];
          a[low_end] = element;
          low_end++;
        }
      }
    }
    if (to - high_start < low_end - from) {
      QuickSort(a, high_start, to);
      to = low_end;
    } else {
      QuickSort(a, from, low_end);
      from = high_start;
    }
  }
};
```

## 다른 사람 풀이

1. 위 풀이를 좀 더 짧게 작성하는 방법

- 시간 복잡도

- 코드

```js
const isAnagram = function(s, t) {
  return (
    s
      .split("")
      .sort()
      .join("") ===
    t
      .split("")
      .sort()
      .join("")
  );
};
```

2. 처음에 길이가 같은지 판별하여 문자열의 길이가 서로 다를 경우 불필요한 코드 실행을 줄이는 방법

- 시간 복잡도
  문자열의 길이가 서로 다르다면 시간복잡도 O(1)

- 코드

```js
const isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  return (
    s
      .split("")
      .sort()
      .join("") ===
    t
      .split("")
      .sort()
      .join("")
  );
};
```

3. 문자별 개수를 서로 비교하는 방법

문자열의 특정 문자가 몇 개 들어있는지 객체 셋으로 표현한 후 비교한다.

- 의사 코드

  1. s문자열을 돌면서 문자열에 특정 문자가 몇 번 들어있는지 1씩 증가시키면서 객체에 넣는다.
  2. t문자열을 돌면서 위 문자열과 숫자 셋에서 숫자를 1씩 차감한다.
  3. 객체의 모든 요소 값이 0인지 확인한다.

- 시간 복잡도
- 코드

```js
const isAnagram = function(s, t) {
  const map = {};
  s.split("").map(c => (map[c] = map[c] ? map[c] + 1 : 1));
  t.split("").map(c => (map[c] = map[c] ? map[c] - 1 : -1));
  return Object.keys(map).every(k => map[k] === 0);
};
```
