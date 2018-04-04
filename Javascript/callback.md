# 값으로서의 함수와 함수 콜백 
## 값으로서의 함수 
```javascript
var a = function(){}
```
이란 변수 a라고 하는 자바스크립트에 담겨진 일종의 값이다. 
함수가 **값**이다

```javascript
var a = {
    b:function(){

    }
}
```
b는 key/변수/속성prrperty이고 b의 값은 함수이다. 이 함수는 value로서 객체안에 저장될 수 있다. 
함수가 **값**이다. 
이 때  b라고 하는 속성이 담겨 있는데 속성의 값이 함수이다. 
이 함수의 값을 **메소드**라고 한다.

함수는 값이기 때문에 다른 함수의 인자로도 전달될 수 있다. 

```javascript
function cal(func, num){
    return func(num);
}
alert(cal(increase, 1));

function increase(num){
    return num+1;
}
```
cal 함수의 인자로 함수를 넣었다. 

```javascript
    var process = [
        function(input){return input + 10},
        function(input){return input * input},
        function(input){return input / 2},
    ]
for(i = 0; i <process.length ; i++){
    var input = 1;
   input =  process[i](input);
}
alert(input);

```
process 라는 변수에 담긴 함수들을 인덱스 번호로 호출하여 인자값을 주면
반복문을 돌면서 계산할 수 있다. 

## 콜백 
함수는 [first-class-citizen](https://ko.wikipedia.org/wiki/%EC%9D%BC%EA%B8%89_%EA%B0%9D%EC%B2%B4) 이다 
자바스크립트에서 모든 것은 객체이다 
그 중 일급객체가 되기 위해서는 다음과 같은 조건을 만족해야한다. 
+ 변수나 데이터 구조 안에 담을 수 있다.
+ 파라미터로 전달 할 수 있다.
+ 반환값으로 사용 할 수 있다.
+ 런타임에 생성될 수 있다


출처: http://yubylab.tistory.com/entry/자바스크립트의-콜백함수-이해하기 [Yuby's Lab.]

콜백함수는 값으로서의 함수와 밀접하게 연관되어 있다. 

```javascript
var numbers = [20,10,100,11,40,50,4,6,9,19]
number.sort();
```
어떠한 함수 앞에 무언가가 있다면 객체이다. 
배열, 객체를 만들어서 numbers에다 넣어준다.
배열이 가지고 있는 명령어 sort를 호출할 수 있게 된다. 
sort는 객체에 속해있기 때문에 메소드이다. 

sort()를 이용해서 사용자 정의 객체, 사용자 정의 함수를 만들어 보자면 

```javascript
var sortfunc = function(a,b){   
    if(a>b){
        return 1;
    }else if(a<b){
        return -1;
    }else{
        return 0;
    }
}
console.log(numbers.sort(sortfunc));
```
여기서 콜백함수는 sortfunc 이다 
콜백함수는 내가 부르는 것이 아닌 sort가 필요할 때 콜백함수를 호출하여 사용하는 것이다.  
이런 식으로 sortfunc를 함수를 만들어서 sort함수에 인자로 넣을 수 있다. 
callback 함수를 수신받는 sort라는 매소드가 콜백함수의 내용을 인자로 전달받아서 내부적으로 호출하는 것을 통해서 이 sort라는 함수가 동작하는 기본적인 동작방법을 변경할 수 있게 된다. 
값으로서 함수를 사용할 수 있기 때문에 오리지널 함수의 동작방법 값을 전달해서 완전하게 바꿀 수 있다 
만약 함수를 일회성으로만 사용하고 싶다면 이름을 주지 않고 익명함수로 sort(function(){})이런식으로도 가능하다. 






































function log(a, b, func) {
    console.log(func(a, b));
}

hifunc = function(a,b) {
    return a + 'hi' + b;
}

byefunc = fucntion(a, b) {
    return a + 'bye' + b;
}

log('1', '2', hifunc);
log('1', '2', byefunc);

function sort(func) {

}

a = {
    x: 1,
    y: 2
}

b = {
    x: 3,
    y: 4
}

[a,b].sort()
[a,b].sort(function(a,b) {
    if (a.x > b.x) {
        return 1;
    }

    ...
})

[a.b].sort(function(a,b) {
    if ((a.x+a.y) > (b.x+b.y)) {
        return 1;
    }
    ...
})


```s