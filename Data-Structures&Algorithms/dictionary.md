# 딕셔너리

딕셔너리는 전화번호부에 이름과 전화번호로 데이터를 저장하는 것처럼 데이터를 키와 값 쌍으로 저장하는 자료구조다. 
자바스크립트  Object 클래스는 딕셔너리 형식으로 동작하게 설계되었다. 
하지만 Dictionary 클래스를 만들면 같은 작업을 좀 더 쉽고 재미있게 해결할 수 있다. 예를 들어 [] 보다는 () 를 이용해 키를 찹조하는 편이 훨씬 쉽다.
또한 딕셔터리의 모든 항목을 출력하는 유용한 함수를 정의해놓으면 어디서든 쉽게 딕셔너리의 모든 항목을 확인할 수 있다. 

```js
class Dictionary {
  constructor() {
    this.datastore = new Array();
  }
  add(key, value) {
    this.datastore[key] = value;
  }
  find(key) {
    return this.datastore[key];
  }
  remove(key) {
    delete this.datastore[key];
  }
  showAll() {
    for(let key of Object.keys(this.datastore)) {
      console.log(`${key} -> ${this.datastore[key]}`)
    }
  }
    count() {
    let n = 0;
    for (let key of Object.keys(this.datastore)) {
      n++
    }
    return n;
  }
  clear() {
    for (let key of Object.keys(this.datastore)) {
      delete this.datastore[key];
    }
  }

}
let pbook = new Dictionary();
pbook.add('mike','123');
pbook.add('david','345');
pbook.add('ynthia','678');
console.log(`david's extension : ${pbook.find('david')}`)
pbook.remove('david');
pbook.showAll()
pbook.count();
pbook.clear();
console.log(pbook.showAll());


```
+ count함수에서 length를 쓰지 않는 이유
  + length 프로퍼티는 문자열 키에서는 제대로 동작하지 않는다. 

```js
let nums = new Array();
nums[0] = 1;
nums[1] = 2;
console.log(nums.length) //2
let pbook = new Array();
pbook['david'] = 1;
pbook['jennifer'] = 2;
console.log(pbook.length) //0

```
## dictionary 클래스에 정렬 기능 추가하기 
키를 이용해 값을 얻는 것이 딕셔너리의 핵심 기능이다. 딕셔너리에 저장된 항목의 순서는 중요하지 않다. 하지만 딕셔너리의 항목을 정렬된 순서로 확인해야 할 때가 있다. 

다음 코드에서 확인할 수 있는 것처럼 배열을 쉽게 정렬할 수 있다. 
```js
let a = new Array();
a[0] = 'mike';
a[1] = 'david';
console.log(a)
a.sort();
console.log(a)
```
하지만 문자열 키에는 앞과 같은 방식을 이용할 수 없다. 문자열 키에서는 아무 결과도 출력되지 않는다. 
하지만 이 문제는 쉽게 해결할 수 있다. 사용자가 어떤 데이터를 저장하든 출력 결과를 정렬할 수 있다. 
Object.keys() 함수를 이용해 임 문제를 해결한다. 

```js
showAll() {
  for (let key of Object.keys(this.datastore).sort()){
    console.log(`${key} -> ${this.datastore[key]}`)
  }
}
```
