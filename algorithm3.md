# Judge Route Circle
-------------------------------------------------------------
#### algorithm 

 1.x와 y를 key로 하는 coordinate객체를 만든다.이것이 로봇의 좌표가 된다.
 
 2.움직임의 배열 중 첫 번 째 값을 꺼내온다.
 
 3.첫 번 째 값이 L이면 왼쪽으로 한 칸 이동한 것이므로 -1을 X값에 더해준다.
 
 4.R이면 오른쪽으로 한 칸 이동한 것이므로 +1을 X값에 더해준다.
 
 5.U이면 위로 한 칸 이동한 것이므로 Y값에 +1을 더해준다.
 
 6.D이면 아래로 한 칸 이동한 것이므로 Y값에 -1을 더해준다.
 
 7.x와 Y의 값은 첫 번 째 값이 좌표를 알려준다. 
 
 8.로봇의 움직임이 끝날때 까지 반복해준다.
 
 9.최종 좌표가 나온다.
 
 10.X축과 Y축이 둘 다 0이라면 로봇은 원점으로 돌아온 것이므로 true가 출력되고 아니라면 false가 출력된다. 




```
function judgeCircle(moves) {
    var coordinate = { x: 0, y: 0 }
    for (i = 0; i < moves.length; i++) {
        if (moves[i] == "L") {
            coordinate.x--
        } else if (moves[i] == "R") {
            coordinate.x++

        } else if (moves[i] == "U") {
            coordinate.y++

        } else {
            coordinate.y--

        }
    }
    return (coordinate.x == 0 && coordinate.y == 0)
}
```


# Fibonacci

피보나치 구현 완료
