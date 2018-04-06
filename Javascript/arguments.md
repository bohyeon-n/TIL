# arguments 

## argumenst란 
+ arguments는 함수안에서 사용할 수 있도록 그 이름이나 특성이 약속되어 있는 일종의 배열이다.
+ arguments[0]은 함수로 전달된 첫번째 인자를 알아낼 수 있다. 
+ arguments.length를 이용해서 함수로 전달된 인자의 개수를 알아낼 수도 있다. 
+ 이러한 특성에 반복문을 결합하면 함수로 전달된 인자의 값을 순차적으로 가져올 수 있다.
+ 그 값을 더해서 리턴하면 인자로 전달된 값에 대한 총합을 구하는 함수를 만들 수 있다.

+ arguments는 사실 배열은 아니다. 실제로는 arguments 객체의 인스턴스다.

## 매개변수와 인자의 차이 

```javascript
function a(매개변수 parameter){

}
a(arguments)

```
+ 자바스크립트는 매개변수를 정의하지 않거나 다르더라도 인자의 수를 마음대로 정의해도 에러를 발생하지 않는다. 

```javascript
function sum(){
var i,_sum = 0;
for(i = 0; i<arguments.length; i++){
  document.write(i + ":" + arguments[i] + "<br/>");
  _sum += arguments[i];
}
return _sum;
}
document.write('result:'+ sum(1,2,3,4));
```

