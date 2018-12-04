# 그래프 표현

## 그래프 설명하기

![khan academy graph image](https://ka-perseus-images.s3.amazonaws.com/faa1c44e1ab848623096b85b9aa32626b8d8d040.png)

이 소셜 네트워크는 그래프이다. 이름은 그래프의 정점(vertices)가 된다. 각 선은 변(edge)으로 두 정점(vertex)를 연결한다. u 와 v 의 정점들을 연결하는 변은 (u,v)쌍으로 나타낸다.
서로 아는 관계는 양방향이기 때문에 이 그래프는 방향성이 없다(undirected). 무방향 그래프에서는 오드리와 게일 간의 변과 같이 두 정점 간의 변이 두 정점을 연결하고(incident) 연결된 정점은 접하고 있다(adjacent)거나 인접해 있다(neighbors)고 한다. 정점을 연결하는 변의 수는 정점의 차수(degree)이다.

오드리와 프랭크는 서로 모른다. 프랭크와 오드리 사이에 세 개의 변으로 이루어진 경로(path)가 있다. 가장 적은 변으로 이루어진 경로를 최단 경로(shortest path)라고 한다.

![출처: 칸 아카데미 - 사이클 이미지 ](https://ka-perseus-images.s3.amazonaws.com/2b4922a8372b82d83bfb5eb416f338fc38b57d96.png)

어떤 정점에서 시작하여 다시 자신에게 돌아오는 경로가 있다면 이를 사이클(cycle)이라고 한다.

어떨 때는 변에 수치를 부여하기도 한다.

![출처: 칸 아카데미 - 가중치 이미지](https://ka-perseus-images.s3.amazonaws.com/8aa21944eef2879cea9080a2ae2fbcb98cec0ddf.png)

변 위에 적은 숫자를 일반적으로 일컫는 용어는 가중치(weight)이며 가중치가 있는 변이 있는 그래프를 가중 그래프(weight graph)라고 한다. 도로 지도의 경우 두 곳 같의 최단 경로를 알고 싶으면 두 정점 간의 모든 경로에서 변의 가중치 합이 최소가 되는 경로를 찾는다. 비가중 그래프에서와 같이 이런 경로를 최단 경로(shortest path)라고 한다.

정점 사이의 관계가 항상 양방향인 것은 아니다.

![출처: 칸아카데미 - 양방향성 그래프](https://ka-perseus-images.s3.amazonaws.com/d3c87b56a86e8b21c2a2814cd6241a809bbe3d00.png)

화살표로 나타난 변은 방향성이 있으므로(directed) 이 그래프는 방향 그래프(directed graph)이다.

이 특정 방향 그래프에는 사이클이 없다. 이런 그래프를 방향성 비순환 그래프(directed acyclic graph) 또는 dag 라고 한다. 물론 가중 방향 그래프(weighted directed graphs)를 만들 수도 있다.

방향이 있는 변에 대해서는 다른 용어를 사용한다. 방향성이 있는 변은 한 정점을 떠나(leave) 다른 정점으로 들어간다(enter)라고 말한다. 방향성 있는 변이 정점 u 를 떠나서 정점 v 로 들어간다면 이를 (u,v)로 표현한다. 이 쌍에서 정점의 순서는 중요하다. 정점을 떠나는 변의 숫자는 이 정점의 출력 차수이며 들어가는 변의 숫자는 입력 차수이다.

**그래프 크기**

그래프를 볼 때는 정점과 변 각각을 묶어서 집합으로 생각하는 것이 좋다. 일반적으로 정점 집합을 V 으로, 변 집합을 E 로 나타낸다. 집합 크기를 나타낼 때는 표기법 ∣⋅∣ 를 이용해야 하지만 번거롭기 때문에 관습적으로 점근법에 한해서 집합 크기 표기를 생략한다. Θ(|V|) 대신 그냥 Θ(V)라고 쓰기도 한다.

## 그래프 나타내기

그래프는 여러 가지 방법으로 나타낼 수 있다. 방법마다 장단점이 있다. 그래프를 입력값으로 어떤 상황이나 알고리즘을 실행하고자 할 때는 상황에 따라 그래프를 다르게 나타낸다.

그래프의 장단점을 측정하는 3 가지 기준

1. 그래프를 나타낼 때 차지하는 메모리나 공간.
2. 주어진 변이 그래프 안에 있는지 결정하는 데 걸리는 시간.
3. 주어진 정점의 이웃을 알아내는 데 걸리는 시간.

### 연결선 리스트(Edge lists)

그래프를 표현하는 간단한 방법 중 하나는 변 |E| 개로 이루어진 리스트나 배열로 나타내는 것이다. 이를 연결선 리스트라고 한다. 변을 나타내기 위해서는 두 정점 번호의 배열이나 변으로 연결된 정점의 정점 숫자가 포함된 객체의 배열을 만든다. 변에 가중치가 있다면 3 번째 요소를 배열에 추가하거나 더 많은 정보를 객체에 추가하여 변에 가중치를 더한다. 각각의 변은 두 개나 세 개의 숫자만을 포함하기 때문에 연결선 리스트에 필요한 총 공간은 Θ(E) 이다.

자바스크립트로 연결선 리스트 나타내기

```js
[
  [0, 1],
  [0, 6],
  [0, 8],
  [1, 4],
  [1, 6],
  [1, 9],
  [2, 4],
  [2, 6],
  [3, 4],
  [3, 5],
  [3, 8],
  [4, 5],
  [4, 9],
  [7, 8],
  [7, 9]
];
```

연결선 리스트는 간단하지만, 그래프에 특정 변이 있는지 알고 싶으면 연결선 리스트를 모두 검색해야 한다. 연결선 리스트에 변이 아무런 순서 없이 무작위로 들어가 있다면 변 |E|개 중에 특정 변을 찾으려면 선형 검색을 해야 한다.

### 인접 행렬

![소셜 네트워크 그래프의 인접 행렬](https://ka-perseus-images.s3.amazonaws.com/549bca1a52774846b25caff86d244d03ee63fd38.png)

```js
[
  [0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 1, 0, 0]
];
```

인접 행렬에서는 어떤 변의 존재 여부를 일정 시간 내에 파악할 수 있다.
graph[i][j]를 탐색해보면 행렬 이름이 graph 변 (i,j)가 그래프에 있는지 알아볼 수 있다.

인접행렬의 단점은 그래프가 변이 몇 개 없는 희소 그래프일 경우라도 공간을 Θ(V^2)만큼 차지한다는 것이다. 둘째로 어떤 정점이 주어진 정점 i 와 인접해 있는지 알기 위해서 i 정점과 인접한 정점들의 수가 적을 때도 i 행의 모든 |V|항목을 찾아봐야 한다는 것이다.

### 인접 리스트

인접 리스트로 그래프를 나타내려면 인접 행렬과 연결선 리스트를 결합해야 한다.

![인접 리스트](https://ka-perseus-images.s3.amazonaws.com/cc82379521bd84738e86d6cf9552738ca9138420.png)

```js
[
  [1, 6, 8],
  [0, 4, 6, 9],
  [4, 6],
  [4, 5, 8],
  [1, 2, 3, 5, 9],
  [3, 4],
  [0, 1, 2],
  [8, 9],
  [0, 3, 7],
  [1, 4, 7]
];
```

각 정점의 인접 리스트는 배열을 찾아보기만 하면 되기 때문에 일정 시간 내에 얻을 수 있따. 변(i,j)가 그래프에 있는지 알아보려면 일정 시간 내에 i 의 인접 리스트로 가서 i 의 인접 리스트에서 j 를 찾아보면 된다. 최악의 경우는 얼마나 걸릴까? Θ(d)다. 여기서 d 는 i 의 차수이다. 왜냐하면 바로 이 수치가 i 의 인접 리스트의 길이를 알려주기 때문이다. 정점 i 의 차수는 |V| -1 만큼 커지거나 0 으로 작아질 수 있다.

```js
for (let i = 0; j < graph[i].length; j++) {
  doStuff(graph[i][j]);
}
```

인접 리스트가 차지하는 공간은 얼마나 될까? 리스트가 |V|개만큼 있고 각 리스트는 |V| -1 개 만큼 정점을 가질 수 있지만 비방향 그래프의 인접 리스트에는 2|E|개의 항목이 있다. 각 변(i,j)는 i 의 리스트에서 한 번, 그리고 j 의 리스트에서 한 번, 모두 합쳐서 두 번 나타나며 리스트에는 |E|개의 변이 있기 때문이다.