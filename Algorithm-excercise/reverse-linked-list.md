# reverse linked list

[reverse linked list 문제](https://leetcode.com/problems/reverse-linked-list/)

```
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

```

```js
var reverseList = function(head) {
  let pre = null;
  while (head) {
    next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
};
```
