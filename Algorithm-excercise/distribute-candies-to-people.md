# Distribute Candies to People

## 문제 
[Distribute Candies to People](https://leetcode.com/problems/distribute-candies-to-people/)

We distribute some number of candies, to a row of n = num_people people in the following way:

We then give 1 candy to the first person, 2 candies to the second person, and so on until we give n candies to the last person.

Then, we go back to the start of the row, giving n + 1 candies to the first person, n + 2 candies to the second person, and so on until we give 2 * n candies to the last person.

This process repeats (with us giving one more candy each time, and moving to the start of the row after we reach the end) until we run out of candies.  The last person will receive all of our remaining candies (not necessarily one more than the previous gift).

Return an array (of length num_people and sum candies) that represents the final distribution of candies.


### 풀이 

```js
var distributeCandies = function(candies, num_people) {
  const result = []
  let time = 0; 
  while(candies > 0) {
    for(let i = 0; i < num_people; i++) {
      let toAdd = (time * num_people) + (i + 1); 
      toAdd = toAdd > candies ? candies : toAdd
      result[i] = (time === 0 ? 0 : result[i]) + toAdd
      candies -= toAdd
    }
    time++
  }
  return result;   
};

```

```js
var distributeCandies = function(candies, num_people) {
  const result = new Array(num_people).fill(0); 
  return dfs(candies, result, 1, num_people)
};

const dfs = (candies, result, i, n) => {
  while(candies > 0) {
  const cur = Math.min(candies, i)
  result[(i -1) % n] += cur; 
  candies -= cur;
  return dfs(candies, result, i + 1, n)
  }
  return result; 
}

```
