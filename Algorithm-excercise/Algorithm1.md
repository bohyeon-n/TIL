# 1.Find maximum in array algorithm

* Algorithm

1.  배열중 첫번 째 값을 masimumValue 변수로 설정한다.
2.  maximumVlue 가 배열의 두 번째 값보다 작다면 배열의 두 번째 값을 maximumvalue 로 설정한다.
3.  maximumVlue 가 배열의 세 번째 값보다 작다면 배열의 세 번째 값을 maximumValue 로 설정한다.
4.  이를 배열의 길이( arr.length) 만큼 반복한다.
5.  최종적으로 가장 큰 최댓값인 maximumValue 가 나온다.

```javascript
function findMax(arr) {
  var maximumValue = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (maximumValue < arr[i]) {
      var maximumValue = arr[i];
    }
  }
  return maximumValue;
}
var maximumValue = findMax(arr);
arr = [1, 2, 3, 4];
console.log(maximumValue);
```

---

# 2.Jewels and Stones

* Algorithm1

1.  j 와 s 를 배열로 만든다.

2.  쥬얼리를 변수로 지정한 다음 그 값을 0 으로 한다.

3.  for 문으로 J 의 값을 하나 꺼내고 다시 for 문으로 s 의 모든 값을 하나하나 비교해서 같은 값이 있다면, 쥬얼리의 값을 1 씩 늘려준다.

4.  S 의 for 문을 다 돌게 되면 다시 J 의 값을 하나 꺼내서 s 의 모든 값을 하나하나 비교해서 같은 값이 있다면 쥬얼리의 값을 1 씩 늘려준다.

5.  이 과정을 J 배열의 숫자만큼 반복한다.

6.  최종적으로 주얼리의 값을 반환해준다.

```javascript
function numJewelsInStones(J, S) {
  var J = J.split("");
  var S = S.split("");
  var jewles = 0;
  for (a = 0; a < J.length; a++) {
    for (i = 0; i < S.length; i++) {
      if (J[a] === S[i]) {
        jewles++;
      }
    }
  }
  return jewles;
}

console.log(numJewelsInStones("aA", "aAAbbbb"));
```

* 이렇게 알고리즘을 짜게 되면 J 배열의 길이 \* S 배열의 길이만큼 반복 해줘야 한다.

---

* Algorithm2

```javascript
function numJewelsInStones(J, S) {
  var J = J.split("");
  var S = S.split("");
  var stones = new Map();
  var jewles = 0;
  for (i = 0; i < S.length; i++) {
    if (J.includes(S[i])) {
      if (stones.has(S[i])) {
        jewles++;
      } else {
        jewles++;
      }
    }
  }
  return jewles;
}

console.log(numJewelsInStones("aA", "aAAbbbb"));
```

---

* Algorithm3

1.  stones map 을 만든다
2.  만약 stones map 에 S 배열 첫번째 값을 키로 가지고 있는 객체가 있다면 그 키의 값에 1 을 더해준다.
3.  없다면 stones map 에 S 배열의 첫번째 값을 키로, 그 키의 값은 1 인 객체를 추가해준다.
4.  이를 s 배열의 길이만큼 반복한다.
5.  stones map 에 S 의 종류와 개수가 키와 값으로 저장되어있다.
6.  최종적인 답인 S 안에 들어있는 J 의 개수를 변수 jewles 로 지정하고 그 값을 0 으로 설정한다.
7.  stones map 안에 J 의 첫번째 값이 키로 들어있는지 확인한다.
8.  들어있다면 그 key 의 값을 불러와 jewles 의 값에 더하고 이를 jewles 변수의 값을 설정한다.
9.  이 과정을 J 배열의 길이만큼 반복한다.
10. jewles 의 값이 나오고 끝난다.

```javascript
function numJewelsInStones(J, S) {
  var J = J.split("");
  var S = S.split("");
  var stones = new Map();

  for (i = 0; i < S.length; i++) {
    if (stones.has(S[i])) {
      var value = stones.get(S[i]) + 1;
      stones.set(S[i], value);
    } else {
      stones.set(S[i], 1);
    }
  }
  var jewles = 0;
  for (i = 0; i < J.length; i++) {
    if (stones.has(J[i])) {
      var jewles = jewles + stones.get(J[i]);
    }
  }
  return jewles;
}

console.log(numJewelsInStones("aA", "aAAbbbb"));
```

**문자열은 내부적으로 배열이기 때문에 split 을 쓰지 않아도 된다.**

---

```javascript
function numJewelsInStones(J, S) {
  var stones = new Map();
  for (i = 0; i < S.length; i++) {
    if (stones.has(S[i])) {
      var value = stones.get(S[i]) + 1;
      stones.set(S[i], value);
    } else {
      stones.set(S[i], 1);
    }
  }
  var jewles = 0;
  for (i = 0; i < J.length; i++) {
    if (stones.has(J[i])) {
      var jewles = jewles + stones.get(J[i]);
    }
  }
  return jewles;
}

console.log(numJewelsInStones("aA", "aAAbbbb"));
```

# 3.Judge Route Circle

* algorithm

1.  x 와 y 를 key 로 하는 coordinate 객체를 만든다.이것이 로봇의 좌표가 된다.

2.  움직임의 배열 중 첫 번 째 값을 꺼내온다.

3.  첫 번 째 값이 L 이면 왼쪽으로 한 칸 이동한 것이므로 -1 을 X 값에 더해준다.

4.  R 이면 오른쪽으로 한 칸 이동한 것이므로 +1 을 X 값에 더해준다.

5.  U 이면 위로 한 칸 이동한 것이므로 Y 값에 +1 을 더해준다.

6.  D 이면 아래로 한 칸 이동한 것이므로 Y 값에 -1 을 더해준다.

7.  x 와 Y 의 값은 첫 번 째 값이 좌표를 알려준다.

8.  로봇의 움직임이 끝날때 까지 반복해준다.

9.  최종 좌표가 나온다.

10. X 축과 Y 축이 둘 다 0 이라면 로봇은 원점으로 돌아온 것이므로 true 가 출력되고 아니라면 false 가 출력된다.

```javascript
function judgeCircle(moves) {
  var coordinate = { x: 0, y: 0 };
  for (i = 0; i < moves.length; i++) {
    if (moves[i] == "L") {
      coordinate.x--;
    } else if (moves[i] == "R") {
      coordinate.x++;
    } else if (moves[i] == "U") {
      coordinate.y++;
    } else {
      coordinate.y--;
    }
  }
  return coordinate.x == 0 && coordinate.y == 0;
}
```

---

# 4.역삼각형 출력하기

[문제보기](https://programmers.co.kr/learn/challenge_codes/113)

```javascript
function printReverseTriangle(num) {
  var result = "";
  for (i = num; i > 0; i--) {
    result = result.concat("*".repeat(i) + "\n");
  }
  return result;
}
```

1.  num 의 수 만큼 \*을 result 변수에 concat 한다.
2.  num-1 의 수 만큼 \*을 result 변수에 concat 한다.
3.  result 가 0 보다 클 때까지만 반복한다.

## issue

result = result.concat(~~~)
이렇게 기존 string 을 변경하는 식으로 하면 수가 커질수록 더 무거워진다. 다 만들고 마지막에 합치는 것이 더 좋다.

```javascript
function printReverseTriangle(num) {
  var result = [];
  for (i = num; i > 0; i--) {
    result.push("*".repeat(i));
  }
  var resultstr = result.join("\n");
  return resultstr;
}
```

**join()**

* 배열의 모든 요소를 연결하여 하나의 문자열로 만든다.
* 구분자를 넣을 수 있음
* 기본값은 , 이다
* string.split() 매서드와 반대되는 기능이다.

---

## push 와 concat 의 차이

### push()

* push 는 둘 이상의 요소를 합칠 때 사용한다.

```javascript
var a = ["a", "b", "c"];
var b = ["d", "e", "f"];

a.push(b);

console.log(a);
// ["a","b","c",["d","e","f"]]
```

* 변수 a 배열에 b 배열을 push 한다.
* 변수 a 가 변화한 것을 볼 수 있다.
* 또한 변수 b 를 하나의 요소로 보기 때문에 b 를 push 한 a 의 길이는 4 가 된다.

### concat()

* concat 은 둘 이상의 배열을 합칠 때 사용한다.

```javascript
var a = ["a", "b", "c"];
var b = ["d", "e", "f"];

console.log(a.concat(b));
//["a", "b", "c", "d", "e", "f"]
console.log(a);
//["a", "b", "c"]
```

* concat 매소드를 사용하여 배열 a 에 b 를 concat 하면 배열과 배열이 합쳐진다.
* 기존에 있던 a 변수에 영향을 주지 않는다.

### push vs concat

* push 매서드가 concat 매서드보다 더 빠르게 계산된다.
* 둘의 차이점을 이해하고 필요에 따라 적절하게 사용해야 한다.

---

# 5. fibonacci 수열 구현하기

* 재귀함수를 이용하여 fibonacci 수열 구현하기

```javascript
function fibonacci(num) {
  if (num === 2) {
    return 1;
  }
  if (num === 1) {
    return 0;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}
```

* 반복문을 사용하여 fibonacci 수열 구현하기

```javascript
function fibonacci(num) {
  if (num == 1) {
    return 0;
  }
  if (num == 2) {
    return 1;
  }
  var pre = 0;
  var prepre = 1;
  var fib;
  for (var i = 1; i < num; i++) {
    fib = pre + prepre;
    prepre = pre;
    pre = fib;
  }
  return fib;
}
```

## 문제 푸는 방법 tip

* 필요한 변수를 선언한다.
* 처음에 예외적인 것을 생각해서 제거한다.
* 변수가 상태에 따라 어떻게 변하는지 써본다.
* 순서대로 값이 어떻게 변하는지 안다.
* 스케치만 하고 코드를 짜본다.
