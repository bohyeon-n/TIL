# JS interview.1



### `==`와 `===`의 차이 
---------------------------------------------
+ `==`(identity operator): 동등 연산자 
 
+ `===`(equality operator): 일치 연산자
 
+ `==`와 `===`는 두 개의 값을 비교하는 연산자이다.
 
+ `==`연산자는 type전환을 한 후에 비교를 한다.
 
+ `===`연산자는 type전환을 하지 않고 비교를 한다. 

---------------------------------------------

### `===`&`!==` 와  `==`&`!=` 의 차이 
----------------------------------------------


+ 두개의 연산자가 같은 값(value)과 같은 type을 가지고 있다면 `===` 은 true 그리고 `!==`은 false이다. 
+ `==`와 `=!`은 같은 type일 경우 제대로 작동하지만 다른 type일 경우 같은 type으로 전환시키려 하기 때문에 이과정에서 당신이 예상한대로 작동되지 않을 수 있다. 

**interesting case**
<pre><code>
	" " == "0"   	    //false
        0 == " "             //true 
	0 == "0"             //true

	false == "false"     //false
	flase == "0"         //true

	false == undefined   //false
	false == null        //false
	null == undefined    // true

	" \t\r\n " == 0      //true 
</code></pre>



---------------------------------------------------------------------------------
### 어떻게 사용해야 할까? 
**evil twins**
+ 변환가능성이 부족하다는 것은 위험하다. 
+ **항상 `===`와 `!==`을 사용하는 것을 권장한다.** 
 




