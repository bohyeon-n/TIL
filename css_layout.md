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

