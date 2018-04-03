# 생활코딩
## WEB2-JavaScript

-------------------------------------
###  객체 
 객체란 이름이 있는 정리정돈 상자이다.

#### 객체를 만드는 방법 
+ 배열이 index라는 주어진 이름을 사용하는 것과는 다르게 key를 설정하여 이름을 부여할 수 있다.
```
	var coworkers = {
    "programmar": "egoing",
    "designer": "leesche"
    }
```

#### cowerkers 객체의 programmar 키(key)의 값(value)을 가져오는 방법 
 + coworkwers.programmar

#### 객체에 데이터를 추가하는 방법 
 + coworkwers.bookkeeper = "drue"
 + coworkers["data scientist"] = "taeho"

#### 객체의 데이터를 순회하는 방법

+ 추천검색어 javascript object iteratate
+ for in 문 
+ for( var key in coworkers){

  }
  
  coworkers 객체에 있는 data들의 수만큼 중괄호에 있는 코드들이 샐행된다. 
  실행될 때마다 key값이 하나하나 변수값으로 세팅된다.

```
	for(var key in coworkers){
	document.write(key+":"coworkers[key]+"<br>");
	}
```

-----------------------------------------------------------------------------------------

#### 프로퍼티와 매소드 
매소드: 객체에 소속된 함수
프로퍼티: 객체에 소속된 변수 

```
	coworkers.showAll = function(){
    	for(var key in this){
        document.write(key+":"+this[key] +"<br>")
        }
    }
    coworkers.showAll();
    ```


#### 객체 활용
```
	var body{
		setcolor: function(color){
			document.queryselector("body").style.color = color;
		},
		setbackgroundcolor: function(color){
			document.queryselectior("body").style.backgroundcolor=color;
		}
	}
    body.setbackgroundcolor("black");
    
```
여기서 document는 객체이고 queryselector("body")는 함수이면서 객체에 소속되어 있기 때문에 매소드이다. 

----------------------------------------------------------------------------------------

+ 함수는 코드가 많아지면 정리정돈하는 도구이다.
+ 객체는 함수와 변수가 많아지면 연관된 것들을 서로 그룹핑해서 정리하는 것이다.
+ 객체가 많아지면 ** 파일 **로 묶어서 그룹핑한다. 

``<script color src = "colors.js"></script>``

한번 다운로드 후 저장하므로(cache) 효율적이다. 


----------------------------------------------------------------------------------------
#### 라이브러리와 프레임워크 

+ 라이브러리는 소프트웨어의 부폼이 되는 것을 가져와서 쓰기 위해 정돈되어 있는 곳 

+ 프레임워크는 만들고자 하는 것이 무엇이느냐에 따라서 그것을 만드려고 할 때 공통적인 부분이 있는데 이것을   가져와서 만들고자 하는 기능에 따라 수정하는 것이다. 








