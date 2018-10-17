# 너비 우선 탐색

## 너비 우선 탐색과 그 활용법

너비우선탐색(Breadth-first-Search)은 BFS 라고도 쓰며, 주어진 소스 정점에서 다른 모든 정점에 이르기까지 거치는 변의 수를 계산해 가장 짧은 경로를 찾는다.

너비 우선 탐색은 각 정점 v 에 다음과 같은 두 개의 값을 할당한다.

- 거리: 소스 정점에서 정점 v 에 이르는 아무 경로에 있는 변의 최소 수를 나타낸다.
- 선행 정점: 소스 정점에서 가장 짧은 경로 내 v 의 선행자 정점. 소스 정점의 선행자는 null 과 같은 특수 값을 가지는데 이는 선행 정점이 없음을 의미한다.

소스 정점에서 정점 v 에 이르는 경로가 없다면, v 의 거리는 무한하며 그 선행 정점은 소스의 선행 정점과 같이 특별한 값을 갖게 된다.

![선행 정점](https://ka-perseus-images.s3.amazonaws.com/3545933c2fca71e45a03f1bb1bf2933b75c60e02.png)

한 번 가보기 전까지는 정점의 거리가 null 일 것이고 가보게 되면 거리에 따라 값이 주어진다. 그렇기 때문에 그 거리가 현재 null 로 되어 있는 정점만 가면 된다.

어떤 정점을 이미 가봤지만 그 곳에서 출발한 적은 없는지 어떻게 확인할 수 있을까? 큐를 사용한다. 그 큐에 가장 오래 있었던 항목이 제거됨 선입선출

- enqueue(obj)는 큐에 객체를 삽입한다.
- dequeue()는 가장 오래 큐에 있었던 객체를 큐에서 제거하고 이 객체를 반환한다.
- isEmpty()는 현재 큐에 객체가 없으면 참을 반환하고 큐에 하나 이상의 객체가 있으면 거짓을 반환한다.

어떤 정점을 처음 가게 되면 그 정점을 enqueue 한다. 소스 정점은 항상 제일 먼저 가는 정점이므로 시작할 때 소스 정점을 큐에 enqueue 한다. 어느 정점을 갈 지 정할 때 queue 에 가장 오래 있었던 정점을 선택하여 큐에서 제거한다.

각 순간에 큐는 같은 거리를 가진 모든 정점을 포함하고 있거나 아니면 거리 k 의 정점 다음 거리 k + 1 의 정점을 포함하고 있다. 이것이 바로 k + 1 의 점점으로 가기 전에, k 의 모든 정점을 가는 것을 보장하는 방법이다.

## 응용: 너비우선탐색 구현하기

```js
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue = obj => {
    this.items.push(obj);
  };
  dequeue = () => {
    return this.items.shift();
  };
  isEmpty = () => {
    return this.items.length === 0;
  };
}

const doBFS = function(graph, source) {
  const bfsInfo = [];
  for (let i = 0; i < graph.length; i++) {
    bfsInfo[i] = {
      distance: null,
      predecessor: null
    };
  }

  bfsInfo[source].distance = 0;
  const queue = new Queue();
  queue.enqueue(source);
  while (!queue.isEmpty()) {
    const v = queue.dequeue();
    for (let i = 0; i < graph[v].length; i++) {
      const predecessor = graph[v][i];
      if (bfsInfo[predecessor].distance === null) {
        queue.enqueue(predecessor);
        bfsInfo[predecessor].distance = bfsInfo[v].distance + 1;
        bfsInfo[predecessor].predecessor = v;
      }
    }
  }
  return bfsInfo;
};

const adjList = [
  [1],
  [0, 4, 5],
  [3, 4, 5],
  [2, 6],
  [1, 2],
  [1, 2, 6],
  [3, 5],
  []
];
const bfsInfo = doBFS(adjList, 3);

for (var i = 0; i < adjList.length; i++) {
  console.log(
    `vertex ${i} : distance = ${bfsInfo[i].distance} predecessor = ${
      bfsInfo[i].predecessor
    }`
  );
}
```

결과

```
vertex 0 : distance = 4  predecessor = 1
vertex 1 : distance = 3  predecessor = 4
vertex 2 : distance = 1  predecessor = 3
vertex 3 : distance = 0  predecessor = null
vertex 4 : distance = 2  predecessor = 2
vertex 5 : distance = 2  predecessor = 2
vertex 6 : distance = 1  predecessor = 3
vertex 7 : distance = null  predecessor = null
```
