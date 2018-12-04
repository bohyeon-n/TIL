# 점근적 표기법

상수 계수와 중요하지 않은 항목을 제거한 것을 점근적 표기법(asymptotic notation)이라고 한다. 중요하지 않은 항과 상수 계수를 제거하면 이해를 방해하는 불필요한 부분이 없어져서 알고리즘의 실행 시간에서 중요한 부분인 성장률에 집중할 수 있다.

점근적 표기법의 세 가지 형태

- big Ө (theta)
- big O
- big Ω (omega)

## Big-Ө (빅세타) 표기법

```js
const doLinearSearch = function(array, targetValue) {
  for (let guess = 0; guess < array.length; guess++) {
    if (array[guess] === targetValue) {
      return guess; // 찾은 경우
    }
  }
  return -1; // 찾지 못한 경우
};
```

배열의 크기를 n 이라고 하고 c1 은 반복 한 번에 걸리는 시간이며 guess 를 0 으로 초기화하고, 필요할 때 -1 을 반환하는 것처럼, for 문을 만드는 데에도 추가적으로 시간이 필요하다. 이 추가적인 시간을 c2 라고 한다면, 최악의 경우 선형 검색에 걸리는 시간은 c1·n + c2 이다.

상수 인자 c1 과 c2 를 안다고 해서 실행 시간이 커지는 비율을 알 수는 없다. 중요한 것은 선형 검색의 최악의 경우의 실행 시간은 배열의 크기인 n 에 따라 커진다는 것이다. 여기서 실행 시간을 표시하기 위해 사용하는 표기법은 Θ(n) 이다. 그리스어인 '세타'로 'n 의 빅 세타' 또는 그냥 'n 의 세타'라고 읽는다.

특정 실행시간이 Θ(n) 이라고 하는 것은 n 이 충분히 크다면 실행 시간이 어떤 상수 k1 과 k2 에 대하여 최소 k1·n 이며 최대 k2·n 이 된다는 뜻이다.
보통 상수 인자와 낮은 차원의 항목은 생략하고 사용한다.

big-Θ 표기법을 사용하는 것은 실행 시간에 대한 점근적으로 근접한 한계값이 있다고 표현하는 것이다. '점근적으로'라는 말을 쓰는 이유는 큰 값의 n 에 대해서만 적용하기 때문이다. '근접한 한계값'이라는 말은 위, 아래로 상수값 내에서 실행 시간을 좁힐 수 있다는 뜻이다.

## Big-O (빅 오) 표기법

Big-Θ 표기법은 실행 시간에 대하여 위아래에 점근적으로 근접한 한계가 있다. 하지만 한계를 위에만 둘 때도 있다.

예를 들어 이진 검색 실행 시간 최악의 경우는 Θ(log 2 n) 이지만, 이진 검색이 모든 경우에 Θ(log 2 n)이라고 할 수는 없다.

"실행 시간은 최대한 이만큼 커지지만 더 천천히 커질 수도 있다"는 의미인 점근접 표기법 형태를 사용하는 것이 더 편리할 수도 있다. 이런 경우를 위해 "big-O"표기법을 사용한다.

실행 시간이 O(f(n))이라면 충분히 큰 값인 n 와 상수 k 에 대해 실행 시간은 최대 k⋅f(n)가 된다. 여기서는 실행시간이 " f(n)의 big-O"거나, 그냥 " f(n) 의 O"라고 표현한다. 점근적 상한선에 대해서는 big-O 표기법을 사용하는데 이는 충분히 큰 입력 크기에 대하여 실행 시간에 상한값을 두고 제한하기 때문이다.

big-O 표기법이 점근적 상한선만 제공하고 점근적으로 근접한 한계를 주지 않는다. 예를 들어 이진 검색의 실행 시간이 O(n)이라고 하는 것은 옮다. 샐행 시간이 n 에 상수를 곱한 것보다 느리게 커지기는 하기 때문이다.

O(n)도 이진 검색 실행 시간의 상한선이다. 다른 정확하지 않은 상한선에는

## Big-Ω (빅 오메가) 표기법

때로는 알고리즘이 상한선 없이 최소한 어느 정도 걸린다고 해야 할 때도 있다. 그럴때는 Big-Ω (빅 오메가) 표기법을 사용한다.

실행 시간이 Ω(f(n))라면 n 이 충분히 클 때 실행 시간은 어떤 상수 k 에 대해 최소 k⋅f(n)이다. 여기서 실행 시간은 " f(n)의 big-Ω"라고 한다. 점근적 하한선을 표현하기 위해 big-Ω 표기법을 사용하는데, 그 이유는 점근적 하한선은 충분히 큰 입력 크기에서 실행 시간을 밑에서 제한하기 때문이다.

Θ(f(n)) 이 자동적으로 O(f(n))을 의미하는 것처럼 자동적으로 Ω(f(n))도 의미한다. 따라서 이진 검색 실행 시간 최악의 경우는 Ω(log 2 n) 이라고 할 수 있다.

- big-Ω 표기법의 예를 들면, 주머니에 백만달러가 있을 때 적어도 10 달러는 된다고 말하는 것이 진실이다. 이진검색은 최소한의 상수의 시간이 걸리므로 이진 검색 최악의 경우 실행시간은 Ω (1)라고 말할 수 있다.
- big-O 표기법은 10 달러를 가지고 있는데, 확실히 100 만달라보다는 적게 있어 라고 말한다면 정확하다고는 할 수 없지만 명백한 사실이다.