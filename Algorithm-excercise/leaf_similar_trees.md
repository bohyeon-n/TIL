 # Leaf-Similar Trees
 ## 문제 

 [leaf similar trees](https://leetcode.com/problems/leaf-similar-trees/)

 ## 풀이 

- 트리노드의 맨 마지막 잎을 찾는다. 
- root1 과 root2의 마지막 잎이 같은 지 비교한다. 

```js
var leafSimilar = function(root1, root2) {
    return findSequence(root1) === findSequence(root2)  
};

findSequence = (root) => {
    let sequence = [];
    searchNode(root, sequence)
    return sequence.join(',')
}

searchNode = (root, sequence)  => {
    if(!root) return sequence; 
    if(!root.left && !root.right) {
        sequence.push(root.val)
    }   
    searchNode(root.right, sequence)
    searchNode(root.left, sequence)
}
```

## 다른 풀이 

```js
function leafSimilar(root1, root2) {
  const deque = [];
  dfs(root1, true);
  dfs(root2, false);
  return deque.length === 0;
  
  function dfs(v, isPushing) {
    if (!v) return;
    
    if (!v.left && !v.right) {
      if (isPushing) {
        deque.push(v.val);
      } else {
        if (v.val !== deque.shift()) {
          deque.push(Number.MAX_VALUE);
        }
      }
    }
    dfs(v.left, isPushing);
    dfs(v.right, isPushing);
  }
}
```

```js
function leafSimilar(root1, root2) {
  const deque = [];
  dfs(root1, true);
  dfs(root2, false);
  return deque.length === 0;
  
  function dfs(v, isPushing) {
    if (!v) return;
    
    if (!v.left && !v.right) {
      if (isPushing) {
        deque.push(v.val);
      } else {
        if (v.val !== deque.shift()) {
          deque.push(Number.MAX_VALUE);
        }
      }
    }
    dfs(v.left, isPushing);
    dfs(v.right, isPushing);
  }
}
```
