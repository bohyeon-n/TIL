# 하노이의 탑

세 개의 축과 n 개의 원반이 주어진다. n 개의 원반이 크기 순서대로 위에서 아래로, 1 이 가장 위에 그리고 n 이 가장 아래인 상태로 축 A 에 놓여있다.
목표는 모든 n 개의 원반을 축 A 에서 B 로 옮기는 것이다.

1. 한 번에 하나의 원반만 움직일 수 있다.
2. 자신보다 작은 원반이 그 아래에 놓일 수 없다. 예를 들어 원반 3 이 축에 있다면 원반 3 밑에 있는 원반은 모두 3 보다 큰 숫자로 되어 있어야 한다.

## 응용: 재귀를 활용한 하노이의 탑 풀기

#### 탈출 조건

solveHamoi(numDisk, fromPeg, toPeg)를 호출하면 numDisks 원반이 fromPeg 축에서 toPeg 축으로 옮겨지게 된다.

```js
const solveHanoi = function(numDisks, fromPeg, toPeg) {
  // base case: 원반이 없는 탈출 조건
  if (numDisks === 0) {
    return true;
  }
  // recursive case:
  const sparePeg = hanoi.getSparePeg(fromPeg, toPeg); // 비어있는 축
  solveHanoi(numDisks - 1, fromPeg, sparePeg); // 가장 밑에 있는 원반이 노출 됨
  hanoi.moveDisk(fromPeg, toPeg);
  solveHanoi(numDisks - 1, sparePeg, toPeg);
};
```
