# css layout
## 1. box model
### box-sizing
+ box-sizing은 박스의 크기를 화면에 표시하는 방법을 변경하는 속성이다.  
+ default값은 content-box 이다.
+ content-box는 width와 height가 오직 content만 포함한다.
+ border-box는 width와 height가 content, padding, border를 포함한다. 
  + border-box로 지정하면 테두리를 포함한 element크기를 지정할 수 있기 때문에 예측하기가 더 쉽다.  

[box-sizing w3c 참고](https://www.w3schools.com/cssref/css3_pr_box-sizing.asp)

## 2.flex
### 2-1.flex
+ item과 그것을 담을 container가 필요하다.
+ container 속성에 dispkay: flex;
### 2-2property
#### property for the flex container
+ flex-basis
  + item 의 두 번째 child의 크기가 200px
 ```css
.item: nth-child(2){
  flex-basis:200px;
}
```
+ flex-wrap
  + container크기보다 item들의 크기의 합이 더 크다면 그 아이템은 줄바꿈이 되어 아래로 내려가게 하는 속성
+ flex-direction 
  + 정렬할 방향을 지정함 
+ align-items 
  + flex element를 세로선 상에서 정렬
  + container안에서 어떻게 모든 요소들이 정렬하는지 정하는 property
+ justify-content 
  + 수평선상의 이동(가로선상에서) 
+ align-contetnt
  + 세로선상에서 이동 
  + 여러줄 들 사이의 간격을 지정한다. 한 줄만 있다면 작동하지 않는다. 
+ flex-flow
  + flex-direction 과 flex-wrap을 함께 써주는 property

#### property for the flex items 
+ align-self
+ flex-grow
+ flex-grow
  + flew-grow는 같은 container안에 item이 다른 item과 상대적으로 얼만큼 차지하는지를 정하는 속성이다.
+ flex-shrink
+ flex  
  + .item{flex: flex-grow[flex-shrink][flex-basis]}
+ order

## 참고사이트
[css reference w3c](https://www.w3schools.com/cssref/)

[css 레이아웃을 배웁시다!](http://ko.learnlayout.com/)

[flex box 게임 개구리를 구해라!](http://flexboxfroggy.com/)

[flex game](https://preview.webflow.com/preview/flexbox-game?preview=d1a26b027c4803817087a91c651e321f&m=1)



## 3. Float

### 3-1 Float property

```css
float: reight;
float: left;
float: none; 
```

### 3-2 clear property
```css
clear: none;
clear: left;
clear: right;
clear: both;
clear: inherit;
```

+ float 속성을 써준 후 clear 속성은 float 엘리먼트 다음일 수 있는지 또는 그 아래로 내려가 clear 해야 하는 지를 정한다. 
 
+ clear 속성에 left값을 쓰면 이 요소의 위쪽 끝이 float:left 속성을 쓴 어떤 요소보다 아래에 있어야 한다는 뜻이다. 
+ right와 both도 같은 맥락이다.
+ inherit값을 지정하면 부모 요소로부터 clear의 속성을 물려받는다는 것이다 


### 3-3 float을 clear하는 4가지 방법 

**float된 자식 엘리먼트의 높이를 부모 엘리먼트에 반영되게 하는 방법**

1. float에 float로 대응하는 방법 
+ 부모에게도 float 속성을 부여한다. 
+ issue: 부모의 엘리먼트의 너비는 float된 자식의 너비를 담을만큼만 작게 줄어든다.

2. overflow 속성으로 대응하는 방법
+ 부모 엘리먼트에 overflow: hidden 속성을 부여하여 float된 자식 엘리먼트의 높이를 계산하게 할 수 있다.
+ issue: float 자식의 너비가 넘치는 경우 넘치는 부분이 잘리게 된다.
  
3. float을 빈 엘리먼트로 clear하는 방법
+ container 영역이 끝나기 직전 빈 엘리먼트를 넣고 빈 엘리먼트에 clear: both 속성을 부여하여
부모가 자식의 높이를 인식하도록 하는 방법이다. 

4. float을 가상 선택자 ::after 로 clear하는 방법
+ 가상의 엘리먼트를 생성하여 main에 부여한다. 
```css
.clearfix::after{
     content:"";
     display: block;
     clear: both;
 }
```

[float를 clear하는 방법]( http://naradesign.net/wp/2008/05/27/144/)


## 4.Grid 

### 4-1 grid property
+ container와 같은 부모요소에 가로세로 격자를 만들어서 그 안에 디자인 요소를 배치한다 
```css
.container{
  display: grid;
  display-template-column: 20% 20% 20% 20% ;
  display-template-row: repeat(4, 25px);
}
.item{
  grid-column: 1 / 3;
  grid-row: 1 / span 2;
}
```

### 4-3 gird-system
+ grid를 사용하는 목적으로 grid를 사용하여 정보에 질서와 구조를 부여하는 시스템이다. 

+ 화면에 그리드를 사용하기 위해 가상 컨텐츠를 삽입하여 구조를 설계할 수 있다. 

```css
header::after{
  content: "";
  background: repeating-linear-gradient(to right, rgba(255, 0, 0, 0.2), rgba(255, 0, 0, 0.2) 65px, transparent 65px, transparent 85px);
  width: 100% ;
  height: 100% ;
  position: absolute;
  top:0;
  left:0; 
}
```

## 5.Position

### 5-1. position property
+ position
  + 기본값은 static이다. 원래 위치해야 되는 곳, normal flow을 따라 배치된다. 이때는 offset을 지정할 수 없다.  
+ absolute 
  + 부모기준으로 위치가 선정된다. 이는 static이 아닌 부모가 나타날때까지 계속 상위로 올라간다. 
  + absolute를 쓰고 싶다면 위치하고 싶은 부모에 position: relative 를 써줘야 원하는 위치에 배치할 수있다. 
+ fixed
  + 특정 element를 스크롤로부터 독립되게 한다.


## 6. 숨김 콘텐츠 
**보조장치가 읽기 위해 쓰여진 콘텐츠를 화면에 보이지 않도록 하는 방법**

[clip 참고자료]
어떻게 사용하는지 잘 이해하지 못했다. 
다시 공부해야겠다.
