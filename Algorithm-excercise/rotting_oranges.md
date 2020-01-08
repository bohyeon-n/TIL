#  Rotting Oranges

## 문제 

[rotting oranges](https://leetcode.com/problems/rotting-oranges/)

In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

## 풀이 

- 오렌지의 배열을 돌면서 썩은 오렌지를 찾는다.
- 썩은 오렌지를 찾으면 인접한 오렌지를 썩게 한다.
- 이 과정을 한 번 반복한다. 
- 썩은 오렌지가 하나 이상 나오면 똑같은 과정을 다시 반복하고 time 을 + 1 해준다. 
- 썩은 오렌지가 없고 배열에서 정상인 오렌지가 없으면 time을 반환하고 정상 오렌지가 있으면 -1을 반환한다. 

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */

var orangesRotting = function(grid) {
  return rottingOneTime(grid, 0)
};

rottingOneTime = (grid, time) => {
  let freshOrange = false;
  let newGrid = JSON.parse(JSON.stringify(grid))
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      if( grid[i][j] === 2) {
        if(grid[i -1] &&  grid[i-1][j] === 1) {
          newGrid[i-1][j] = 2;
          freshOrange = true; 
        }
        if(grid[i + 1] &&  grid[i+1][j] === 1) {
          newGrid[i+1][j] = 2
          freshOrange = true; 
        }
        if( grid[i][j-1] && grid[i][j-1] === 1) {
          newGrid[i][j-1]  = 2 
          freshOrange = true; 
        }
        if(grid[i][j+1] && grid[i][j+1] === 1) {
          newGrid[i][j+1] = 2 
          freshOrange = true; 
        }
      }
    }
  }
  if(!freshOrange){
    const allRotten =  newGrid.every((line, index) => {
      return line.indexOf(1) === -1 
    })
    return allRotten ? time : -1  
  }else {
    return rottingOneTime(newGrid, time + 1)
  }
}
```