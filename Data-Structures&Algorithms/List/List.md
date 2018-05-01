# 리스트 
순서가 있는 일련의 데이터 집합

```js
// list를 클래스로 구현 
class List {
constructor(){
  
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  
}
// 리스트의 listSize에 새 요소를 추가하는 함수
append(element) {
  this.dataStore[this.listSize++] = element
 }
 //dataStore에 element가 있는지 반복문으로 확인하고 있으면 삭제 할 요소의 위치를 반환한다. 없으면 -1을 반환한다. 
find (element) {
  for(let i = 0; i < this.dataStore.length; ++i){
    if(this.dataStore[i] === element) {
      return i;
    }
  }
  return -1;
 }
 //find함수로 element를 찾고 splice 함수로 해당 element를 자른다.
 remove(element) {
   let foundAt = this.find(element);
   if(foundAt > -1) {
     this.dataStore.splice(foundAt,1);
     --this.listSize;
     return true;
   }
   return false;
 }
 //length 리스트 요소 개수 
 length () {
   return this.listSize;
 }
 //리스트의 요소를 확인하는 함수
 toString () {
   return this.dataStore;
 }
 // find함수로 기존 요소(after)뒤에 요소를 삽입한다.
 insert (element, after) {
  let insertPos = this.find(after);
  if(insertPos > -1) {
    this.dataStore.splice(insertPos+1, 0, element);
    //dataStore에 요소를 추가하고 listSize를 +1해준다.
    ++this.listSize;
    return true; 
  }
  return false;
}
// 리스트의 모든 요소 삭제 
  clear () {
    delete this.dataStore;
    this.dataStore.length = 0;
    this.listSize = this.pos = 0;
  }
  //어떤 값이 리스트에 포함되어 있는지 확인 할 때 사용하는 함수
  contains(element) {
    for(let i = 0; i < this.dataStore.length; ++i){
      if(this.dataStore[i] === element) {
        return true;
      }
    }
    return false;
  }
  //리스트 탐색 
  front() {
    this.pos = 0;
  }
  end() {
    this.pos = this.listSize-1;
  }
  prev() {
    if(this.pos > 0) {
      --this.pos;
    }
  }
  next() {
    if(this.pos < this.listSize-1) {
      ++this.pos;
    }
  }
  currPos() {
    return this.pos;
  }
  moveTo(position) {
    this.pos = position;
  }
  // 이동한 pos 로 리스트 요소 가져오기 
  getElement() {
    return this.dataStore[this.pos];
  }
 }
 
 //test
 const names =  new List();
 console.log(names.dataStore);
 names.append('bohyeon');
 names.append('juyeong');
 names.append('heesu');
 names.append('miyoung')
 console.log(names.toString())
names.remove('heesu');

console.log(names.toString());
//bohyeon뒤에 haha insert 
names.insert('haha','bohyeon')
console.log(names.toString())
names.contains('bohyeon') // true 
// 리스트 탐색 pos이동하여 리스트를 탐색할 수 있다. 
names.front() // pos 맨 앞으로 이동 
console.log(names.getElement())
names.next();
console.log(names.getElement())
names.end();
console.log(names.getElement())
names.prev();
console.log(names.getElement())

// 리스트와 반복
console.log('반복 테스트') 
// for(let i = names.front(); names.currPos() < names.length(); names.next()) {
//   console.log(names.getElement())
// }
//이렇게 하면 무한루프를 돌게된다.next()하게 되면  names.currPos는 항상 names.length보다 작기 때문에 ! 조건문에서 listSize-1보다 작을 때 pos++ 해주기 때문이다. 책에는 이렇게 나와있는데... 뭔가 내가 잘못한것 같다... 


```
## 리스트 기반 애플리케이션 


