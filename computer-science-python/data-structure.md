# 자료 구조

상황에 따라 적절한 자료 구조가 달라질 수 있다. 데이터 검색은 빈번하게 일어나는데 반해 새로운 데이터 삽입이 없다면 배열을 쓰는 것이 가장 합리적이다.

반면 데이터 검색에 비해 새로운 데이터 삽입이나 기존 데이터 삭제가 자주 일어난다면 연결 리스트(linked list)를 사용하는 것이 효율적이다.

- 데이터를 어떻게 삽입하는지?
- 데이터를 어떻게 검색하는지?
- 데이터를 어떻게 삭제하는지?

### 추상 자료형

ADT(Abstract Data Type)은 간단히 말해 자료 구조에서 삽입, 탐색, 삭제 등을 다담당하는 함수들의 사용 설명서이다. '추상'이 들어가는 이유는 추상 자료형은 인터페이스와 구현을 분리했기 때문이다.

```py
help(list.append)
```

```shell
Help on method_descriptor:

append(...)
    L.append(object) -> None -- append object to end
```

함수이름(append), 인자(object), 반환형(None)을 알 수 있다. 이 부분이 인터페이스이다.

하지만 함수가 어떻게 구현되엇는지는 알 수 없다. 이러한 특징을 인터페이스와 구현이 분리되어있다고 말한다. 그리고 이 두가지를 분리하는 것을 '추상화한다'라고 표현한다.

## 연결 리스트

연결 리스트는 데이터와 참조로 구성된 노드가 한 방향 혹은 양방향으로 쭉 이어져 있는 자료 구조이다. 참조는 다음 노드 혹은 이전 노드를 가리킨다.

### 노드

노드란 자료 구조를 구현할 때 데이터를 담는 틀이다.

연결 리스트에서 사용할 노드를 직접 구현해 보자.

### 연결 리스트 구현

- 생성자, empty() 함수, size() 함수

```py
    def __init__(self):
        self.head = None
        self.tail = None
        self.d_size = 0

    def empty(self):
        if self.d_size == 0:
            return True
        else:
            return False

    def size(self):
        return self.d_size

```

- append 함수
  연결 리스트에 tail 다음에 new_node을 이어준 후 tail 을 새 노드로 옮겨준다. 비어있을 경우는 tail 에 new_node 를

```py
    def append(self, data):
        new_node = Node(data)

        if self.empty():
            self.head = new_node
            self.tail = new_node
            self.d_size += 1
            # 연결리스트가 비어있지 않으면 새 노드를 tail 이 가리키는 노드에 이어준다. 그리고 tail을 새 노드로 옮긴다.
        else:
            self.tail.next = new_node
            self.tail = new_node
            self.d_size += 1
```

- search_target(), search_pos() 함수 구현: 데이터 검색(순회)

```py
    def search_target(self, target, start = 0):

        if self.empty():
            return None
        pos = 0
        cur = self.head
        # pos가 탐색 시작 위치 start 보다 클 때만
        # 대상 데이터와 현재 노드의 데이터를 비교
        if pos >= start and target == cur.data:
            return cur.data, pos

        while cur.next:
            pos += 1
            cur = cur.next
            if pos >= start and target == cur.data:
                return cur.data, pos
        return None,  None
```

파이썬의 리스트처럼 인덱싱을 통해 데이터에 한 번에 접근할 수 없고 매번 처음부터 순서대로 순회해야 한다는 점은 연결리스트의 단점이다.
