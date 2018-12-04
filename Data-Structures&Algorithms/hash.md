# 해싱

- 해싱은 데이터를 단기간에 삽입하거나 저장된 데이터를 가져올 때 주로 사용하는 기법이다. 해싱은 해시 테이블이라는 자료구조를 이용한다.
  해싱을 이용하면 데이터를 빠르게 삽입하고, 삭제하고, 가져올 수 있지만 최솟값이나 최댓값 찾기 등 검색 동작은 효율이 떨어진다.
  따라서 검색이 필요한 상황이라면 이진 탐색 트리 같은 자료구조를 사용하는 것이 좋다.

## 해시 테이블 클래스

- 해시 테이블 클래스는 해시 값 계산, 해시 테이블에 데이터를 삽입하는 함수, 해시 테이블의 데이터를 가져오는 함수, 해시 테이블에 포함된 데이터를 출력하는 함수, 그 밖에 유틸리티 함수 등을 포함한다.

```js
class HashTable {
  table = new Array(137)

  put = data => {
    const pos = this.simpleHash(data)
    this.table[pos] = data
  }
  simpleHash = data => {
    let total = 0
    for (let i = 0; i < data.length; i++) {
      total += data.charCodeAt(i)
    }
    return total % this.table.length
  }
  showDistro = () => {
    let n = 0
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] != undefined) {
        console.log(`${i} : ${this.table[i]}`)
      }
    }
  }
}
const someNames = [
  'david',
  'bohyeon',
  'se',
  'jennifer',
  'donnie',
  'Raymond',
  'Clayton',
  'mike',
  'kitty',
  'harry'
]

const hTable = new HashTable()
for (let name of someNames) {
  hTable.put(name)
}
hTable.showDistro()
```

```
2 : harry
11 : mike
17 : kitty
27 : jennifer
45 : Clayton
71 : bohyeon
79 : se
89 : donnie
109 : david
```

Crayton과 Raymond 가 충돌되어서 하나만 출력되었다.

## 더 좋은 해시 함수

우선 충돌을 피하려면 해시 테이블에서 사용하는 배열의 크기가 소수여야 한다. 이는 해시값을 계산할 때 모듈로 연산을 사용하기 때문이다.

테이블에서 배열의 크기는 100이상이어야 한다. 전 예제에서 100보다 큰 소수로 137을 선택했지만, 그래도 충돌이 발생할 수 있음을 확인하였다.

해시 테이블의 크기를 결정했으면 해싱 충돌을 회피할 수 있는 해시 값 계산 방법을 만들어야 한다.
호너의 메소드라는 알고리즘을 이용할 수 있다.

```js
class HashTable {
  table = new Array(137)

  put = data => {
    const pos = this.betterHash(data)
    this.table[pos] = data
  }

  betterHash = string => {
    const H = 37
    let total = 0
    for (let i = 0; i < string.length; i++) {
      total += H * total + string.charCodeAt(i)
    }
    total = total % this.table.length
    if (total < 0) {
      total += this.table.length - 1
    }
    return parseInt(total)
  }
  showDistro = () => {
    let n = 0
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] != undefined) {
        console.log(`${i} : ${this.table[i]}`)
      }
    }
  }
}

const someNames = [
  'david',
  'bohyeon',
  'se',
  'jennifer',
  'donnie',
  'Raymond',
  'Clayton',
  'mike',
  'kitty',
  'harry'
]

const hTable = new HashTable()
for (let name of someNames) {
  hTable.put(name)
}
hTable.showDistro()
```

```
3 : harry
22 : Raymond
57 : mike
58 : Clayton
87 : se
89 : david
106 : kitty
111 : bohyeon
112 : jennifer
123 : donnie
```

## 정수 키 해싱
