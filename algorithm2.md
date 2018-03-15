# Jewels and Stones
#### algorithm1
#### 풀이과정

1.j와 s를 배열로 만든다.

2.쥬얼리를 변수로 지정한 다음 그 값을 0으로 한다.

3.for문으로 J의 값을 하나 꺼내고 다시 for문으로 s의 모든 값을 하나하나 비교해서 같은 값이 있다면, 쥬얼리의 값을 1씩 늘려준다.

4.S의 for문을 다 돌게 되면 다시 J의 값을 하나 꺼내서 s의 모든 값을 하나하나 비교해서 같은 값이 있다면 쥬얼리의 값을 1씩 늘려준다.

5.이 과정을 J 배열의 숫자만큼 반복한다. 

6.최종적으로 주얼리의 값을 반환해준다.
```
function numJewelsInStones(J, S) {
        var J = J.split("")
        var S = S.split("")
        var jewles = 0
        for (a = 0; a < J.length; a++) {
            for (i = 0; i < S.length; i++) {
                if (J[a] === S[i]) {
                    jewles++
                }
            }
        }
        return jewles
    }

    console.log(numJewelsInStones("aA", "aAAbbbb"));
   
```

+ 이렇게 알고리즘을 짜게 되면 J배열의 길이 * S배열의 길이만큼 반복 해줘야 한다. 

----------------------------------------------------------------------------------------
#### algorithm2
```
function numJewelsInStones(J, S) {
        var J = J.split("");
        var S = S.split("");
        var stones = new Map();
        var jewles = 0;
        for (i = 0; i < S.length; i++) {
            if (J.includes(S[i])) {
                if (stones.has(S[i])) {
                    jewles++
                } else {
                    jewles++
                }
            }
        }
        return jewles
    }

    console.log(numJewelsInStones("aA", "aAAbbbb"));
    ```
 ----------------------------------------------------------------------------------
#### algorithm3

1. stones map을 만든다
2. 만약 stones map에 S배열 첫번째 값을 키로 가지고 있는 객체가 있다면 그 키의 값에 1을 더해준다.
3. 없다면 stones map에 S배열의 첫번째 값을 키로, 그 키의 값은 1인 객체를 추가해준다.
4. 이를 s배열의 길이만큼 반복한다.
5. stones map에 S의 종류와 개수가 키와 값으로 저장되어있다.
6. 최종적인 답인 S안에 들어있는 J의 개수를 변수 jewles로 지정하고 그 값을 0으로 설정한다.
7. stones map안에 J의 첫번째 값이 키로 들어있는지 확인한다.
8. 들어있다면 그 key의 값을 불러와 jewles의 값에 더하고 이를 jewles 변수의 값을 설정한다.
9. 이 과정을 J배열의 길이만큼 반복한다. 
10. jewles의 값이 나오고 끝난다. 


```
function numJewelsInStones(J, S) {
        var J = J.split("")
        var S = S.split("")
        var stones = new Map();
      
        for (i = 0; i < S.length; i++) {
               if (stones.has(S[i])) {
                    var value = stones.get(S[i]) + 1
                    stones.set(S[i], value)
                } else {
                    stones.set(S[i], 1);
                }
            }
        var jewles = 0 
        for(i = 0; i <J.length; i++){
                if(stones.has(J[i])){
                  var jewles = jewles + stones.get(J[i]);
                
                }
            }
            return jewles 

        } 


    console.log(numJewelsInStones("aA", "aAAbbbb"));
    ```
    
**문자열은 내부적으로 배열이기 때문에 split을 쓰지 않아도 된다.**  

--------------------------------------------------------------

```
function numJewelsInStones(J, S) {
        var stones = new Map();
        for (i = 0; i < S.length; i++) {
               if (stones.has(S[i])) {
                    var value = stones.get(S[i]) + 1
                    stones.set(S[i], value)
                } else {
                    stones.set(S[i], 1);
                }
            }
        var jewles = 0 
        for(i = 0; i <J.length; i++){
                if(stones.has(J[i])){
                  var jewles = jewles + stones.get(J[i]);
                
                }
            }
            return jewles 

        } 


    console.log(numJewelsInStones("aA", "aAAbbbb"));
    ```
