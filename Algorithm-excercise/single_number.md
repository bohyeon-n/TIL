# Single Number

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

```
Input: [2,2,1]
Output: 1
```

Example 2:

```
Input: [4,1,2,1,2]
Output: 4
```

## [JavaScript]Single Number

### Approach 1

```js
const singleNumber = (nums)  => {
      const no_duplicate_num = []
  for (let num of nums) {
    const index = no_duplicate_num.indexOf(num)
    index >= 0
        no_duplicate_num.splice(index, 1)
      : no_duplicate_num.push(num)
  }
  return no_duplicate_num.pop()
};
```

**풀이**

1. nums 배열 반복문을 돈다.
2. no_duplicate_num 배열안에 같은 숫자가 있을 경우, no_duplicate_num에 있는 숫자를 삭제한다.
3. 없는 경우 num을 푸시한다.
4. 마지막에 no_duplicate_num배열에 남은 하나의 숫자를 꺼낸다.

**시간 복잡도**
O(n^2)

먼저 인자로 받은 배열 nums를 반복문을 돌 때 O(n)시간이 걸린다. 그리고 no_duplicate_num 배열에서 num 이 있는지 확인하는 작업이 필요하다. 이 때도 indexOf() 메소드를 사용하는데 이 때도 최대 n 이기 때문에 실행시간은 O(n)이다. 그래서 이 풀이의 시간복잡도는 O(n^2)이다.

### Approach 2

```js
const singleNumber = nums => {
  const hash_table = {}
  for (let num of nums) {
    hash_table.hasOwnProperty(num)
      ? delete hash_table[num]
      : (hash_table[num] = num)
  }
  return parseInt(Object.keys(hash_table)[0])
}
```

1. nums 배열을 돈다.
2. hash_table에 num이 있을 경우, delete 한다.
3. 없을 경우 hash_table에 num 을 넣는다.
4. 마지막에 남은 hash_table의 키값을 리턴한다.

**시간 복잡도**
인자로 받은 배열 nums를 반복문을 돌 떄 O(n) 시간이 걸리고 num이 hash_table에 있는지 확인할 때 O(1)걸린다.

- 해시 공부하기

### Approach 3
