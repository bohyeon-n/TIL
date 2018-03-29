# css 
## 1.css background
 

+ background-color: color;

+ background-img: url(img);

+ background-size: contain;


+ background-repeat: no-repeat;
  + 기본값은  repeat 
+ background-position: 100px 50px;

+ background-position: 40% 50%;
  + position의 값을 px로 지정할 때와 백분율로 지정할 때가 다르다. 
  + 백분율로 지정하게 되면 상자의 위치도 체크해야 한다.


+ background-attachment: scroll;
  + 기본값이 sroll 이다 
  + scroll은 스크롤을 하게 되면 배경도 스크롤된다 fixed를 하게 되면 스크롤을 해도 배경은 함께 스크롤되지 않는다.

+ background-img: radial-gradient(circle at 70% 30% ,geen 50%, red 50% );

+ background-img: linear-gradient(90deg red, red 10%, blue 10%, blue 20%);
  + 그리드를 쓸 때 만들어서 배치용도로 쓸 수 있다. 

-------------------
## 2. css animation

### 2-1. transform property

```css
.box:hover{
  border-radius: 50% 0 50% 0;
  transform: rotate(360deg);
  transform: translateX(50px);
  transform: skewX(15deg);
  transform: scale(1.2);
  /* 속기법 */
  tansform: rotate() translate() scale();
}
```
+ transform 만 해주면 중간과정이 보이지 않는다. 
+ transition 이 있어야 한다. 
+ transition 은 속성의 값들을 부드럽게 바꿔주는 역할을 한다. 
### 2-2. transition property
```css
.box{
  transition: all 500ms;
}
```
+ 이렇게 해주면 box 에 선언해 주었던 모든 속성들이  hover했을 때 5초동안의 duration 을 가지고 바뀐다.
+ transition-property
+ transition-delay
  + 순차적으로 애니매이션을 주고싶을 때 쓴다. 
+ transition-duration
+ transition-timing-function 
  + 가속과 감속에 대한 속성이다. 
  + [trnasition-timing-function](http://www.the-art-of-web.com/css/timing-function/)
  + [cuboc-bezier](http://cubic-bezier.com/#.17,.67,.83,.67)

### 2-3. css 애니매이션 규칙 

+ @keyframes은 css문법 중 하나로 애니메이션이 만들어지는 부분이다. 
+ @keyframes 안에서 스테이지들을 정의하고 각 구간마다 다른 스타일을 적용시킬 수 있다. 
+ @keyframes 속성은
  + 정한 이름 text-ani
  + 스테이지 from(0%) to(100%) 
  + css 스타일: 각 구간에 적용시킬 스타일

```css
@keyframes text-ani{
  0%{
    font-size: 20px;
    transform: translate(0,0);
  }
  100%{
    font-size: 40px;
    transform: translate(500px, 150px);
  }
}
```

```css
.element{
  /* block으로 설정되어 있으면 상자 밖으로 나가서 애니매이션이 동작하게 된다.
  inline은 line-height의 영향을 받게 된다.
    */
  display: inline-block;
  animation-name: text-ani;
  animation-duration: 3000ms;
  /* 기본값은 backward 종료시점을 보여줄 것인가 시작점으로 다시 돌아가 끝낼 것인가를 결정하는 속성 */
  animation-fill-mode: forward;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  /* 부드러운 애니매이션을 만들고 싶다면 디렉션을 잘 조절해야한다. */
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  animation-play-state: paused;
  /* 속기법 */
  animation: text-ani 3000ms forwards infinite alternate ease-in-out
}
```
--------------

## 3. font-size
+ em 은 자신의 부모요소의 폰트 사이즈를 받는다. 
+ rem은 뿌리가 되는 html 폰트 사이즈를 받는다. 
+ em을 사용하면 계속해서 부모요소의 크기를 고려해야 하기 때문에 rem을 쓰는 것이 좋은 방법일 수 있다. 
+ 여백 처리를 할 때에는 em을 사용하여 자신의 폰트사이즈 크기에 맞게 여백을 처리할 수 있으므로 필요한 곳에 적절하게 사용할 수 있다. 
---------------------

## 4. line-height
+ line-height란 한줄이 차지하는 높이를 설정하는 것이다. 
+ inline박스는 line-height에 따라 높이가 결정된다. 
+ line-height에 20px을 주면 text의 높이를 뺸 나머지 높이를 를 위 아래로 나눠서 배분한다. 
+ 이 때 line-height의 단위를 px이 아닌 넘버단위를 쓴다. 
+ line-height: 1.5;
+ 이는 자신글자수의 1.5배이다. 
----------------

## 기타 
#cursor: potinter

#text-shadow


## 참고자료
+ [css 애니매이션 mdn](https://developer.mozilla.org/ko/docs/Web/CSS/animation)


+ [codepen](https://codepen.io/)   
  + steps animation 검색 
  + text shadow 검색 

+ [gradient 색상 참고](https://webgradients.com/)

+ [css patterns gallery](http://lea.verou.me/css3patterns/)









