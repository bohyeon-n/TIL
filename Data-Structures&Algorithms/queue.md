# 큐

* 큐는 리스트의 일종으로 끝부분으로 데이터가 삽입되고 앞부분에서는 데이터가 삭제되는 자료구조다. 큐는 일어난 순서대로 데이터를 저장하는 자료구조로 가장 나중에 들어간 데이터가 가장 먼저 처리되는 스택과 정반대 순서로 데이터를 처리한다.
* 큐는 선입선출 자료구조다.

## 배열 기반의 queue 클래스 구현

`push()`
`shift()`

queue 생성자 구현

```js
class Queue {
  constructor() {
    this.dataStore = [];
  }
  enqueue(element) {
    this.dataStore.push(element);
  }
  dequeue() {
    this.dataStore.shift();
  }
  front() {
    return this.dataStore[0];
  }
  back() {
    return this.dataStore[this.dataStore.length - 1];
  }
  toString() {
    let retStr = "";
    for (let i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i] + "\n";
    }
    return retStr;
  }
  empty() {
    if (this.dataStore.length === 0) {
      return true;
    }
    return false;
  }
}

const q = new Queue();
q.enqueue("bohyeon");
q.enqueue("sewoon");
q.enqueue("david");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log(`fornt of queue: ${q.front()}`);
console.log(`back of queue: ${q.back()}`);
console.log(q.empty());
```

## 큐로 데이터 정렬하기

```js
// 1의 자리숫자인지 10의 자리 숫자인지 구분해 큐에 숫자를 추가하는 함수이다.

function distribute(nums, queues, n, digit) {
  for(let i = 0; i < n; ++i){
    if(digit === 1) {
      queues[nums[i]%10].enqueue(nums[i]);
    }
  }
  else {
    queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
  }
}

// 큐에 저장된 숫자를 수집하는 함수이다.

function collect(queues, nums) {
  let i = 0;
  for(let digit = 0; digit < 10; ++digit) {
    while (!queues[digit].empty()) {
      nums[i++] = queues[digit].dequeue();
    }
  }
}

function dispArray(arr) {
  for (let i = 0; i < arr.length; ++i) {
    putstr(arr[i] + '');
  }
}

// 메인프로그램

let queues = [];
for(let i = 0; i < 10; ++i) {
  queues[i] = new Queue();
}
  let nums =[];
  for(let i = 0; i < 10; ++i) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
  }
  console.log('before radix sort: ');
  dispArray(nums);
  distribute(nums, queues, 10, 1);
  collect(queues, nums);
  distribute(nums, queues, 10, 10);
  collect(queues, nums);
  console.log('\n\nafter radix sort: ');
  dispArray(nums);
```

## 우선순위 큐

선입선출 방식이 아닌 우선숭위와 같은 다른 기준으로 요소를 삭제해야 하는 애플리케이션도 있다. 이럴때는 우선순위 큐라는 자료구조를 사용해야 한다.

```js
//큐에 저장할 요소 객체 정의
class Patient {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
}
//가장 높은 우선순위를 가진 요소를 삭제하도록 depueue()함수를 고쳐야 한다. 

class Queue {
  constructor() {
    this.dataStore = [];
  }
  enqueue(element) {
    this.dataStore.push(element)
  }
  // dequeue() 함수는 단순한 순차검색 방법으로 우선순위가 가장 높은 코드를 찾는다. dequeue() 함수는 큐에서 제거된 요소를 반환한다. 
  dequeue() {
    let entry = 0;
    for(let i = 0; i < this.dataStore.length; ++i){
      if(this.dataStore[i].code < this.dataStore[entry].code) {
        entry = i;
      }
    }
    return this.dataStore.splice(entry,1);
  }
  toString() {
    let retstr = '';
    for(let i = 0; i < this.dataStore.length; ++i) {
      retstr += this.dataStore[i].name + 'code: ' +
      this.dataStore[i].code + '\n';
    }
    return retstr;
    
  }
}

let p = new Patient('smith', 5);
let ed = new Queue();
ed.enqueue(p);
p = new Patient('jones', 4);
ed.enqueue(p);
p = new Patient('ho' , 6);
ed.enqueue(p);
p = new Patient('brown', 1);
ed.enqueue(p);
console.log(ed.toString());
let seen = ed.dequeue();
console.log(seen[0].name)
seen = ed.dequeue();
console.log(seen[0].name);
console.log(ed.toString());

```
