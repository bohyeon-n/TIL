# closure
+ 클로저란 내부함수가 외부함수의 맥락에 접근할 수 있는 것을 가리킨다. 



```javascript
function outter(){
  function inner(){
  var title = 'coding everybody';
  alert(title);
  }
inner();
}
outter();
inner(); // 실행이 안된다.
```
+ outter 라는 함수 안에 inner라는 함수를 만든것과 같다. 
`var inner = function(){ }`

+ inner함수는 outter함수 안에서만 사용이 가능하다.
+ 어떠한 함수는 그 함수 안에서만 사용해야 하는 함수가 있을 수 있다. 
+ 함수 바깥에 선언하게 되면 응집성이 떨어진다. 
----------------------------------------------------------------

```javascript
function outter(){
  var title = 'coding every body';
  function inner(){
    alert(title);
  }
  inner();
}
outter();
```
+ 내부 함수가 외부함수에 접근하여 coding every body를 출력하고 있다. 
--------------------------------------------------------

```javascript
function outter(){
  var title = "coding every body";
  return function(){
    alert(title);
  }
}
  var inner = outter();
  inner();

```
+ 외부함수가 더 이상 사용되지 않는 경우에도, 내부함수가 외부함수에 접근할 수 있다. 

+ return을 한 함수는 종료된다. 
+ 그럼에도 불구하고 inner변수에 담겨있는 변수를 호출한 순간에는 이미 outter라는 함수는 실행이 끝나서 생이 마감되어도
+ 외부함수로 파생된 내부함수에서 이미 사라진 외부함수에 접근 할 수 있다. 

위와 같은 개념을 어디에 사용할 수 있을까?

+ pprivate variable 
+ 어떠한 정보를 아무나 수정하는 것을 방지할 수 있다. 

```javascript
function factory_movie(title){
  return{
    get_title: function(){
      return title;
    },
    set_title: function(_title){
      title = _title;
    }
  }
}
gohst = factory_movie('ghost in the shell');
matrix = factory_movie('matrix');
```
+ ghost 와 matrix변수에 객체를 담았다. 
+ ghost와 matrix는 똑같은 객체이지만 그 객체가 가지고 있는 get_title 라고 하는 매소드가 접근하는 title이라고 하는 외부함수에 담겨있는 값은 서로 다르다. 


`ghost.set_title('공각기동대')`

+ ghost객체의 set_title 매소드 key에 공각기동대를 인자로 주었다. 
+ title = _title 이므로  변수 matrix의 title의 값을 바꿔준다.

`alert(ghost.get_title()); // 공각기동대가 출력된다.`

`matrix.set_title("매트릭스");`
`alert(matrix.get_title()); // 매트릭스가 출력된다.` 

+ ghost.set_title('')은 ghost 접근한 title의 값만 바꿀 뿐 matrix 객체가 접근할 수 있는 title의 값에는 영향을 미치지 않는다. 

+ private variable이 가능하다. 

+ factorial_movie는 return할 때 생을 마감한다. 
+ title은 내부함수인 get_title과 set_title을 통해서만 접근할 수 있는 변수가 된다. 

+ title을 아무나 수정할 수 없다. 외부에서 어떻게 사용하던 맥락에 영향을 주지 않는다. 
