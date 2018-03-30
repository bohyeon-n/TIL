# css 

## 1.그리드를 배치하기 위한 배경색 만들기
+ repeating-linear-gradient를 이용하여 배경만들기 

```css
.is-act::before{
    background: repeating-linear-gradient(90deg, hsla(70, 90%, 60%,0.4) 0px,
     hsla(70,90%,60%,0.4) 65px,
     transparent 65px, 
     transparent 85px );
    content: "";
    position: absolute;
    width: 1000px;
    /* 부모크기의 100% */
    height: 100%;
    /* 레이어들의 쌓임 순서를 설정할 때 z-index 사용 엘리먼트들의 기본 쌓임 순서를 다른방식으로 정의하고 싶다면 position속성을 지정하고 z-index 속성을 지정한다.*/
    z-index: 100; 
    left: 50%;
    /* margin-left: -500px;  */
    transform: translateX(-50%);
} 
```
```javascript
cvar container = document.querySelector(".container");
var grid = document.querySelector(".btn-grid");

grid.addEventListener('click',function(){
  console.log("ok")
  container.classList.toggle('is-act');
});

```
## 2.grid-area

[grid area mdn](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout/%EA%B7%B8%EB%A6%AC%EB%93%9C_%ED%85%9C%ED%94%8C%EB%A6%BF_%EC%98%81%EC%97%AD)


## 3.시멘틱 마크업 

**webcafe recommend-book 마크업 예시**

```css
<section class="recommend-book">
                <h2 class="recommend-book-heading">추천서적
                    <span class="en-heading">
                    recommend-book
                </span></h2>
                <figure class="recommend-book-cover">
                    <img src="images/book_rwd.jpg" alt="" aria-labelledby="cover-caption">
                    <figcaption id="cover-caption">반응형웹 핵심 가이드북 도서</figcaption>
                </figure>
                <dl class="recommend-book-detail">
                    <dt class="recommend-book-author">저자</dt>
                    <dd class="recommend-book-author-name">김데레사</dd>
                    <dt class="a11y-hidden">평점</dt>
                    <dd class="recommend-book-grade" aria-label="5점 만점에 4점"> ★★★★☆ </dd>
                </dl>
                <p class="recommend-book-summary">
                        반응형웹 디자인을 위한 핵심 내용을 다루고 있으며 미디어쿼리, 유연한 레이아웃, 반응형 이미지 기법을 학습할 수 있다. 모바일 및 다양한 해상도에 대응이 가능한 웹디자인을 이 책으로 시작해 보자!
                </p>
            </section>
```


+ ```<img src=" " alt=" ">```

  + 장식의 목적으로 이미지를 사용할 경우 alt는 생략해야됨 
  + 그러나 alt가 생략되면 이미지의 경로를 읽어준다.

+ 장식 목적의 태그 
  + 장식목적으로 사용할 때에는 <span>태그를 사용할 수 있다.

+ 강조목적의 태그 
  + `<strong>`굵은 글씨`</storng>`
  + `<em>`기울임꼴 글씨`</em>`

+ figure 태그, figcaption 태그 
  + figure요소는 사진, 도표, 삽화, 오디오, 코드 등을 담는 컨테이너 역할을 하는 태그이고 
  + figcaption요소는 이에 대한 설명하는 문구를 담는 태그이다. 
+ aria 
  + aria는 액세스 가능한 도움말이나 설명 텍스트를 추가할 수 있는 여러가지 메커니즘을 제공한다. 
  + aria-labelledby를 사용하면 어떤 요소의 레이블로서 DOM에 있는 다른 요소의 ID를 지정할 수 있다. 
  + aria-label은 액세스 가능한 레이블로 사용할 문자열을 지정할 수 있다. 
+ dl 
  + 정의형 리스트이다. 
  + **dl**태그는 사전처럼 용어를 설명하는 목록을 만든다.
  + **dt**태그는 용어의 제목을 넣을 때 사용한다. (저자)
  + **dd**태그는 용어를 설명하는 데 사용한다. (김데레사)
  + 용어사전같은 곳에 사용할 수 있다. 

### 기타 

#position:fixed  #boxshadow   #text-align   #align-items

### 참고자료 

 [스크롤](https://beebom.com/best-parallax-scrolling-plugins/) 

 [자바스크립트 스타일 가이드](https://www.vobour.com/%EA%B5%AC%EA%B8%80%EC%9D%80-%EC%9E%90%EB%B0%94-%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%ED%83%80%EC%9D%BC-%EA%B0%80%EC%9D%B4%EB%93%9C%EB%A5%BC-%EB%B0%9C%ED%96%89-%ED%95%A9%EB%8B%88%EB%8B%A4-%EB%8B%A4%EC%9D%8C%EC%9D%80-%EB%AA%87-%EA%B0%80%EC%A7%80-%ED%95%B5%EC%8B%AC)

 [웹접근성 연구소](wah.or.kr)


