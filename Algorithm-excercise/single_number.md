# Single Number

[leetCode single-number](https://leetcode.com/problems/single-number/)
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

- O(n^2)
- 먼저 인자로 받은 배열 nums를 반복문을 돌 때 O(n)시간이 걸린다. 그리고 no_duplicate_num 배열에서 num 이 있는지 확인하는 작업이 필요하다. 이 때도 indexOf() 메소드를 사용하는데 이 때도 최대 n 이기 때문에 실행시간은 O(n)이다. 그래서 이 풀이의 시간복잡도는 O(n^2)이다.

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

- O(n)
- 인자로 받은 배열 nums를 반복문을 돌 떄 O(n) 시간이 걸리고 num이 hash_table에 있는지 확인할 때 O(1)걸린다. 시간복잡도는 O(n)이다.

- 해시 공부하기

### Approach 3

a ^ b

- 비트 단위 배타적 논리합
- 두 피연산자의 각 자리 비트의 값이 같을 경우 해당하는 자리에 0을 반환한다.
- 두 피연산자의 각 자리 비트의 값이 다를 경우 해당하는 자리에 1을 반환한다.

---

## [Python]Single Number

### Approach 1

```py
class solution():
    def singleNumber(slelf, nums):
        return 2 * sum(set(nums)) - sum(nums)
```

**시간 복잡도**

- O(n + n) = O(n)
- sum 을 할 때 `sum(list(i , for i in nums))`와 같다. nums를 순회해야 하므로 O(n + n ) = O(n) 이다.

**공간 복잡도**

- O(n + n) = O(n)
- set은 nums 요소만큼 공간이 필요하다.

#### 집합 자료형 - python

집합(set)자료형은 집합에 관련된 것들을 쉽게 처리하기 위해 만들어진 자료형이다.

집합 자료형은 set 키워드를 이용해 만들 수 있다.

```py
s1 = set([1,2,3,3,2])
s1
{1,2,3}
```

set 자료형 특징

- 중복을 허용하지 않는다.
- 순서가 없다.

set 자료형은 교집합, 차집합, 합집합을 구할 때 유용하게 사용된다.
