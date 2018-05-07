# 연결리스트 

연결 리스트에서는 두 클래스를 만들어야 한다. 우선 연결 리스트에 추가할 수 있는 Node 클래스와  LinkedList클래스는 노드의 삽입, 리스트 출력, 기타 연결리스트에 필요한 기능을 제공한다.

```js
// Node 클래스

class Node{
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
// 연결 리스트 클래스 
class LList {
  constructor() {
    this.head = new Node('head');
  }

// 초기에는 head노드의 next 프로퍼티를 null로 설정한다. 그리고 리스트에 노드가 추가되면 나중에 next프로퍼티의 값을 바꾼다.
// 기존 노드의 뒤에 새 노드를 추가하려면 기존 노드를 찾아야 한다. 따라서 연결리스트에서 특정 데이터를 포함하는 노드를 검색하는 헬퍼 함수 find() 를 구현한다. 
  find(item) {
    let currNod = this.head;
    while(currNod.element != item) {
      currNod = currNod.next;
    }
    return currNod;
  }
  // 우선 새 노드를 만들고 head노드로 설정한다. 그리고 다음 노드로 반복 이동하면서 현재 노드의 element프로퍼티가 탐색하려는 값과 같은 값을 포함하는지 확인한다. 원하는 데이터를 찾았으면 해당 노드를 반환한다. 찾지 못하면 null을 반환한다.
  // 기존 노드를 찾았으면 새 노드의 next프로퍼티를 기존 노드의 next 프로퍼티 값으로 설정한다. 그리고 기존 노드의 next프로퍼티를 새 노드의 next프로퍼티로 설정한다. 
  insert(newElement, item) { 
  let newNode = new Node(newElement);
  let current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
    }
  // 연결 리스트의 요소를 출력할 함수 
  display() {
    let currNod = this.head;
    while (!(currNod.next === null)){
      console.log(currNod.next.element);
      currNod = currNod.next;
    }
  }
  // 연결 리스트에서 노드 삭제하기
  // 연결 리스트에서 노드를 삭제하려면 삭제하려는 바로 이전 노드를 찾아야 한다. 이전 노드를 찾았으면 이전 노드의 next프로퍼티를 삭제하려는 노드의 다음 노드로 설정해야 한다. 
  findPrevious(item) {
    let currNod = this.head;
    while(!(currNod.next === null) && (currNod.next.element !== item)) {
      currNod = currNod.next;
    }
    return currNod;
  }
  remove(item) {
    let prevNode = this.findPrevious(item);
    if(!(prevNode.next === null)) {
      prevNode.next = prevNode.next.next;
    }
  }
}

let cities = new LList();
cities.insert('conway', 'head');
cities.insert('russellville','conway')
cities.insert('alma','russellville');
cities.display();
cities.insert('carlisle', 'alma')
cities.display();
cities.remove('alma')
cities.display();
```
## 양방향 연결리스트 
```js
class Node{
  constructor(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
  }
}
// 연결 리스트 클래스 
class LList {
  constructor() {
    this.head = new Node('head');
  }
  find(item) {
    let currNod = this.head;
    while(currNod.element != item) {
      currNod = currNod.next;
    }
    return currNod;
  }
  insert(newElement, item) { 
  let newNode = new Node(newElement);
  let current = this.find(item);
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
    }
  remove(item) {
    let currNod = this.find(item);
    if(!(currNod.next === null)) {
      currNod.previous.next = currNod.next;
      currNod.next.previous = currNod.previous;
      currNod.next = null;
      currNod.previous = null;
    }
  }
  // 양방향 연결리스트의 마지막 노드로 이동하는 유틸리티 함수를 이용해 역순으로 연결리스트를 출력하는 동작을 수행할 수 있다.
  findLast() {
    let currNod = this.head;
    while(!(currNod.next === null)){
      currNod = currNod.next;
    }
    return currNod;
  }
  dispReverse() {
    let currNod = this.head;
    currNod = this.findLast();
    while (!(currNod.previous === null)) {
    console.log(currNod.element);
      currNode = currNod.previous;
    }
  }
   display() {
    let currNod = this.head;
    while (!(currNod.next === null)){
      console.log(currNod.next.element);
      currNod = currNod.next;
    }
  }
}
let cities = new LList();
cities.insert('conway', 'head');
cities.insert('russellville','conway')
cities.insert('alma','russellville');
cities.display();
cities.dispReverse()
// 오류...??? 
```
## 기타 연결 리스트 함수

+ `advance(n)`
  + 연결리스트에서 n 노드만큼 전진 
+ `back()`
  + 양방향 연결리스트에서 n 노드만큼 뒤로 후진 
+ `show()`
  + 현재 노드만 출력 

연결형 리스트가 잘 이해가 되지 않는다.
