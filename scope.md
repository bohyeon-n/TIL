# 생활코딩 
## 언어- javascript 

#### scope 유효범위

+ 지역변수(local variables): 함수의 중괄호 안에서만 접근 가능한 변수 

+ 전역변수(global variables): 전역에서 접근 가능한 변수 

+ 함수 안에서 정의된 변수를 함수 밖에서 불렀을 시 undefined 실행

+ 함수 안에서 var을 쓰지 않고 선언하게 되면 전역변수가 된다.

```
 var vscope = "global"
 function fscope () {
  var vscope = "local"
  vscope = "local"
  alert(vscope)
}
```
함수안 이미 지역변수가 생성된 상태에서 var없이 선언을 하여도 지역변수가 있다면 지역변수에 할당되게 된다.

그러므로 global이 출력된다. 

#### 전역변수의 사용 

```
var myapp ={}
myapp.calculator = {
"left":null
"right":null 
}
myapp.coordinate = {
"left":null
"right":null 
}
myapp.calaulator.left = 10;
myapp.calculator.right = 20;

function sum(){
	return myapp.calculator.left + myapp.calculator,right;
}
 document.write(sum())
 ```

젼역 변수인 myapp을 사용하여 sum을 출력할 수 있게된다.
여기서 전역변수를 사용하고 싶지 않다면 익명함수를 호출할 수 있다.  

```
(function(){var myapp ={}
myapp.calculator = {
"left":null
"right":null 
}
myapp.coordinate = {
"left":null
"right":null 
}
myapp.calaulator.left = 10;
myapp.calculator.right = 20;

function sum(){
	return myapp.calculator.left + myapp.calculator,right;
}
 document.write(sum())
 }())
 
 ```

위와 같은 방법은  자바스크립트에서 로직을 모듈화하는 일반적인 방법이다.

#### 유효범위의 대상 

자바스크립트는 다른 언어와는 달리 함수 안에서만 선언된 변수만이 지역변수이다. 
for문이나 if문의 중괄호 안에서 선언된 변수는 지역변수로서의 의미를 갖지 않는다. 

### 정적 유효범위

자바스크립트는 함수가 선언된 시점에서의 유효범위를 갖는다. 
이러한 유효범위의 방식을 정적유효범위(static scoping, lexical scoping)라고 한다. 

```
var i = 5;
function a(){
var i = 10;
b()
}
function b(){
document.write(i);
}
a();

```
함수 b를 호출하는 함수는 a이므로 a가 가지고 있는 지역변수에 접근해 10이 출력될까
이 함수 b가 현재 정의된 시점에서 전역변수인 5가 출력될까 

답은 5가 출력된다.

b가 선언된 시점에서 i의 전역변수가 사용된다.

함수 b가 호출된 시점에서 b가 담겨있는 지역변수가 사용되는 것이 아니다.

사용될 때(a()안에 지역변수i)가 아닌 정의될 때의(b라는 함수가 정의될 때) 전역변수가 사용되게 된다. 