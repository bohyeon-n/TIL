# HTML & CSS 기초

## HTML

- Hyper Text Markup Language

## 공백

기본적으로 HTML 은 두 칸 이상의 공백을 모두 무시한다.

## 이미지 요소

```html
<img src="http://placeholder.it/500x250" alt="" width="" height="" />
```

- 이미지의 크기가 고정적이라면 width와 height 속성을 쓰는 것이 성능적인 측면에서 좋다.
- width/height 속성이 없으면 이미지는 원본 크기대로 노출되며, 둘 중 하나만 선언하면 나머지 한 속성은 선언한 속성의 크기에 맞춰 자동으로 비율에 맞게 변경된다.

## 이미지 파일 형식

- gif
  256색으로 제한적이지만 용량이 작고, 애니메이션과 투명 이미지가 가능한다.
- jpg
  높은 압출률과 자연스러운 색상 표현이 가능하여 사진이나 일반적인 그림에 사용(투명을 지원하지 않음)
- png
  jpg와 비교했을 때, 이미지 손실이 없고 투명과 반투명 모두 지원한다.

## 테이블

```html
<table>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
```

테이블 태그는 작성해야 하는 태그들이 많고 기계도 이해하기 어렵다.
스크린 리더기가 읽기가 어렵다.

표를 구조적으로 파악하는 것을 돕는 태그들이 있다.

```html
<table>
  <caption>
    표의 제목
  </caption>
  <thead>
    <tr>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th></th>
      <th></th>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th></th>
      <th></th>
    </tr>
  </tfoot>
</table>
```

- colspan 속성: 셀을 가로 방향으로 병합 / colspan의 값만큼 셀을 갖게 됨
- rowspan 속성: 셀을 세로 방향으로 병합 / 그 다음 행, 그다음 `<tr>`태그에서 셀 개수를 셀 때 1을 더한 상태로 시작을 해야 한다. (그 다음 행의 셀을 하나 덜 입력함)

`<tfoot>`이 `<tbody>`뒤에 위치해야 한다.

## 테이블 실습

테이블 그림 보고 따라해보기

```html
<table>
  <caption>
    Specification values
  </caption>
  <thead>
    <tr>
      <th rowspan="2">Grade.</th>
      <th rowspan="2">Point.</th>
      <th colspan="2">Strength.</th>
      <th rowspan="2">Percent.</th>
    </tr>
    <tr>
      <td>kg/mm</td>
      <td>lb/in</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hard</td>
      <td>0.45</td>
      <td>56.2</td>
      <td>80,000</td>
      <td>20</td>
    </tr>
    <tr>
      <td>Medium</td>
      <td>0.45</td>
      <td>49.2</td>
      <td>70,000</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Soft</td>
      <td>0.45</td>
      <td>42.2</td>
      <td>60,000</td>
      <td>30</td>
    </tr>
  </tbody>
</table>
```

[table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)

## 폼

### input type

### radio

```html
<input type="radio" name="gender" /> 남자
<input type="radio" name="gender" /> 여자
```

- type radio는 하나만 선택, 상호 배타적인 선택지를 입력할 때 사용한다.
- radio타입은 name 으로 같은 라이오임을 표시해 줘야 한다.

### checkbox

```html
<input type="checkbox" name="hobby" checked /> 등산
<input type="checkbox" name="hobby" checked /> 독서
<input type="checkbox" name="hobby" /> 운동
```

- checked속성은 값이 별도로 존재하지 않는 boolean 속성이다.
- name 속성으로 그룹화 하기

### file

- 내 컴퓨터에 있는 파일을 서버에 올릴 때 사용하는 타입

### submit

- 폼의 값을 전송하는 버튼

```html
<input type="submit" />
```

### reset

- 폼의 값을 초기 상태로 변경함

```html
<input type="reset" value="취소" />
```

### button

- 아무런 기본 동작도 주어지지 않는 타입
- 개발자가 직접 커스텀해서 기능을 제공해야 할 때 쓰인다.

### image

- 이미지를 삽입할 수 있는 버튼 (submit과 동작이 동일함)

```js
function solution(s) {
    var answer = s.length;

    for(let i = 2; i < s.length; i ++) {
        let j = 0;
        let preString = ''
        let count = 1;
        let concatString = ''
        if(s.length % i === 0) {
        while(j < s.length) {
            const string = s.slice(j, j + i);
            if(preString === string) {
                count++
            }else {

            concatString += (count > 1 ? count :'') + preString;
            count = 1;
            preString = string;
        j = j + i
        }
        answer = concatString.length < answer ? concatString.length : answer

        }


    }
    return answer;
}
```

### button 태그 vs input type button

button 태그는 안에 내용을 직접 넣을 수 있기 때문에 스타일적인 측면에서 자유로운 표현이 가능하다.

### LABEL요소

<label>은 form 요소의 이름과 form 요소를 명시적으로 연결시켜주기 위해 사용한다.
모든 form 사용할 수 있다.

```html
<label for="username">이름: </label> <input type="text" id="username" />
```

- id속성의 값과 해당 label요소의 for 속성의 값을 동일하게 적어주어야 한다.
- 아이디 레이블을 클릭해도 마치 입력 요소를 클릭한 것처럼 동작한다.

```html
성별: <label for="male">남자: </label>
<input type="radio" name="gender" id="male" checked />
<label for="female">여자</label>
<input type="radio" name="gender" id="female" />
```

input type 하나 당 label이 하나가 매칭이 되어야 되기 때문에 각각 레이블 태그를 써준다.

### FIELDSET, LEGEND

- `<fieldset>`태그는 여러 개의 폼 요소를 그룹화하여 구조적으로 만들기 위해 사용
- `<legend>`태그는 폼 요소의 제목으로 `<fieldset>`요소 내부에 작성
- legend 태그를 쓸 때는 fieldset요소에 가장 먼저 자식으로 선언되어야 한다.
- `<fieldset>`태그로 폼을 그룹화할 때에는 보통 폼의 성격에 따라 구분한다. 예를 들어 회원가입을 할 때 필수로 입력받는 부분과 부가적으로 입력받는 부분 두 가지로 나누기도 한다. 이벤트 페이지라면, 이벤트에 응모하는 부분과, 개인 정보를 입력하는 부분으로 나눌 수 있다.

```html
<fieldset>
  <legend>기본 정보</legend>
  <label for="username">이름: </label>
  <input type="text" id="username" />
  성별: <label for="male">남자: </label>
  <input type="radio" name="gender" id="male" checked />
  <label for="female">여자</label>
  <input type="radio" name="gender" id="female" />
</fieldset>
<fieldset>
  <legend>부가 정보</legend>
  ...폼 요소들
</fieldset>
```

### FORM

- 폼 데이터를 그룹화하여 서버에 전송한다.
- 데이터를 묶는 다는 것은 한 페이지에 게시글쓰기와 이벤트 응모 폼을 구분하여 원하는 폼들의 값만 서버로 전송하기 위해 form 태그로 감싸줭서 내가 원하는 폼 요소들의 값만 서버에 전송할 수 있다.
- 지금까지 배운 폼 요소들을 가장 크게 감싸주는 태그이다.
- action 속성은 폼 데이터를 처리하기 위한 서버의 주소
- method 속성은 데이터를 전송하는 방식을 지정(get, post)

## 콘텐츠 모델, 시멘틱 마크업, 블록 & 인라인

HTML5에는 요소들이 가지고 있는 성격에 따라 요소의 종류를 정의하는 규칙들이 있다. 요소는 이 규칙들을 준수해야 하며, 반드시 HTML 권고안을 따라야 한다.
이런 규칙에 대해 비슷한 성격의 요소들끼리 그룹화한 것이 콘텐츠 모델이며, 각각의 HTML 요소들은 하나 또는 여러 개의 콘텐츠 모델에 속하게 된다.

### Content Models 의 7분류

- metadata
- flow
- sectioning
- heading
- phrasing
- embedded
- interactive

1. Metadata

'base, link, meta, noscript, script, style, title'

Metadata에는 콘텐츠의 스타일, **동작을 설정하거나 다른 문서와의 관계 등 정보를 포함하는 요소**들이 포함된다.
메타 태그, 타이틀 태그, 스타일 태그, 링크 태그가 이에 해당하며 대부분 <head>에 들어간다는 것이 특징이다.

2. Flow

" a, abbr, address, map>area, article, aside, audio, b, bdo, blockquote, br, button,
canvas, cite, code, datalist, del, details, dfn, div, dl, em, embed,
fieldset, figure, footer, form, h1 ~ h6, header, hgroup, hr, i, iframe, img,
input, ins, kbd, keygen, label, map, mark, math, menu, meter, nav, noscript, object, ol,
output, p, pre, progress, q, ruby, samp, script, section, select, small, span, strong,
style[scoped], sub, sup, svg, table, textarea, time, ul, var, video, wbr "

문서의 자연스러운 흐름에 의해 배치되는 요소들이 포함된다.
Metadata에 해당하는 일부 태그들만 Flow에서 제외되며 **요소 대부분**이 Flow에 포함된다.

3. Sectioning

'article, aside, nav, section' Sectioning에는 **문서의 구조와 관련된 요소**들이 포함된다.
HTML5에서 새로 생긴 <article>, <aside>, <nav>, <section>등이 포함되며 이 태그들은 문서의 구조, 아웃라인에 영향을 주게 된다.

4. Heading

'h1, h2, h3, h4...'
Heading에는 각 **section**의 **header**를 정의하는 heading태그가 포함된다.

5. Phrasing

"a, abbr, map>area, audio, b, bdo, br, button, canvas, cite, code, datalist, del, dfn, em, embed,
i, iframe, img, input, ins, kbd, keygen, label, map, mark, math, meter, noscript, object, output,
progress, q, ruby, samp, script, select, small, span, strong, sub, sup, svg, textarea, time,
var, video, wbr"

**문서의 텍스트 또는 텍스트를 꾸며주는** 문단 내부 레벨로 사용되는 요소들이 포함된다.

6. Embedded
   " audio, canvas, embed, iframe, img, math, object, svg, video "

Embedded에는 **외부 콘텐츠를 표현하는 요소**들이 포함되며 오디오나 비디오, 이미지 등 멀티미디어 관련 요소들이 이에 해당한다.

7. Interactive

" a, audio[controls], button, details, embed, iframe, img[usemap], input, keygen, label, menu,
object[usemap], select, textarea, video[controls] "

**사용자와 상호작용을 하는 요소**들이 포함되며 대표적으로 form요소들이 이에 해당한다.

### 시멘틱 마크업

웹페이지의 내용을 파악하고 검색엔진에 노출이 잘되도록 하기 위해서는 HTML 요소를 적절하게 사용한 시멘틱 마크업이 필요하다.

#### 시멘틱 마크업이란?

의미론적인 마크업, POSH(Plain Old Semantic HTML)
기계(브라우저)가 잘 이해할 수 있도록 하는 것.

- 의미에 맞는 요소를 사용
- 문서의 구조화
- 인간과 기계가 모두 이해할 수 있는 것이 목표

- <b>태그는 굵은 글씨를 만들어주는 태그, 다른 의미는 없음
- <string>태그는 중요한 글자를 나타내는 태그, 브라우저가 의미를 생각해서 글자를 굵게 표현한 것일뿐 글자를 굵게 해달라는 의미는 없었음
- 브라우저에게는 이 두 개가 의미가 다름
- 중요하다는 의미를 가지고 싶을 때는 <stong>태그를 쓴다.

- `<i>` 단순히 기울어진 태그
- `<em>` 강조하는 태그

- `<u>` 밑줄친 태그
- `<ins>` 새롭게 추가된

-`<s>`중간선이 있는 -`<del>`삭제된

- 쇼핑몰에서 할인된 가격을 표시하고자 할 때 `<s>`태그를 쓰면 가격이 두 개가 나왔다고 생각하지만, `<del>`태그를 사용하여 정가 가격을 표시하고 `<ins>`태그를 사용해 새 가격을 쓰면 브라우저는 원래 가격이 삭제되고 새로운 가격이 나왔다는 의미까지 정확하게 파악할 수 있다.

[semantic_elements - w3c ](https://www.w3schools.com/htmL/html5_semantic_elements.asp)

[시멘틱 HTML5 마크업](https://nuli.navercorp.com/sharing/seminar/2014/08)

[semantics - mozilla ](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)

### 블록&인라인

콘텐츠 모델 이전에는 요소들을 크게 블록 레벨과 인라인 레벨로 구분했다.

#### 블록 레벨 요소

부모 요소의 영역을 다 채워서 표현
양옆으로 다른 요소가 배치되지 않게 박스를 생성한다.
한 줄에 하나의 요소 표시

"div, h1 ~ h6, p, ul, li, table..."

#### 인라인 레벨 요소

하나의 라인 안에서 자신의 내용만큼의 박스를 만드는 요소
라인의 흐름을 끊지 않고 요소 앞 뒤로도 줄 바꿈이 되지 않아 다른 인라인 요소들이 자리할 수 있다.
인라인 레벨 요소는 블록 레벨 요소의 자식으로 분류되기 때문에 자손으로 블록 레벨 요소를 가질 수 없다.

다만, HTML5 버전에서 생겨난 한 가지 예외가 있는데 <a>는 안라인 레벨 요소지만, 자손으로 블록 레벨 요소를 가질 수 있다.

"span, i, img, em, string, a..."

## CSS

Cascading Style Sheets

### CSS 문법

- 선택자(selector)
- 속성(property)
- 값(value)
- 선언(declaration)
- 선언부(declaration block)
- 규칙(rule set)

# CSS 정리

## 단위, 배경, 박스모델

### 속성-단위

#### 길이 단위

**절대 길이**

- px - pixels(1px = 1 /96th of 1 inch)
  - 1px은 화면에 한 개의 점과 같다.
  - 컴퓨터 화면 등 장치의 해상도에 따라서 상대적임
  - 픽셀은 화면에서 고정된 크기 갑을 가지고 있기 때문에 절대 길이
  - 여러 환경에서 디자인을 같게 표현하고 브라우저 호환성에 유리한 구조로 되어있다.
- pt(1pt = 1/72 of 1 inch)
  - 컴퓨터가 없던 시절부터 있던 단위
  - 인쇄단위
  - 웹 화면에 인쇄 문서를 위한 스타일을 적용할 떄 유용
  - windows: 9pt = 12px, 9pt = 9px 로 보이게 된다.
  - 포인트는 w3c에서도 웹 개발 시 권장하지 않음
  - 가이드를 pt로 줄 경우, 편의상 같은 값의 편의상 픽셀로 계산을 함

**절대 길이**

- %
  - 부모의 값에 대해서 백분율로 환산한 크기를 갖는다
- em
  - font-size를 기준으로 값을 환산함 . 소수점 3자리까지 표현 가능
- rem
  - root의 font-size를 기준으로 환산함
- vw
  - viewport의 width값을 기준으로 1%의 값으로 계산된다.

[values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

[css Units](https://www.w3schools.com/cssref/css_units.asp)

### 속성-색상

#### 색상 값 지정 방식

- 컬러 키워드
  - css자체에서 사용 가능한 문자 식별자
- 16진법
  - #RRGGBB
- 16진법
  - #RGB
  - 같은 수를 축약하여 표현할 수 있음
- RGB()
  - red, green, blue / 0 ~ 255
- RGBA()
  - red, green, blue, alpha / 0 ~ 255, 0 ~ 1

### 속성 - background

- background-position

  - default value: 0% 0%
  - 값의 선언 순서는 x축, y축으로부터의 간격이다. 만일 한쪽만 지정된다면 나머지는 중앙 값으로 적용된다.
  - px로 한다면 left top값을 기준점을 갖는다(모든 요소들도 left top값을 가짐)

- backgorund-attachment

  - :fixed : 브라우저를 기준으로 상단에 위치함
  - background-position이 바뀌면 계속 센터에 머물러 있음
  - 브라우저 성능에 영향을 미치기 때문에 많이 사용되지는 않음.

- 축약형
  - background: color url no-repeat fixed center;

### 속성 - boxmodel

- margin은 바깥 여백이기 때문에 옆에 다른 요소가 있다면 박스와 박스 사이의 여백을 마진이 정할 수 있다.
- padding은 content 영역과 테두리 사이의 여백. padding은 content의 연장으로 볼 수 있다.
- border은 바깥

### 속성 - border

## font-variant

- font-variant : small-caps 소문자를 대문자로

## 축약형

- font: font-style font-variant font-weight font-size / line-height font-family | initial | inhrerit;

## 웹폰트

- 실무에서 폰트 관련해서 주로 사용되는 명칭으로 '시스템폰트', '이미지 폰트', '웹 폰트'가 있다.
- 시스템 폰트는 font-family로 선언한 글꼴이 사용자 시스템에 기본으로 설치가 되어 있어 사용할 수 있는 경우
- 이미지 폰트는 특정 글꼴을 사용하는 것이 아니고, 글자를 표현함에 있어 시각적인 요소를 많이 넣고 싶을 때 글꼴 대신 이미지를 이용해서 표현하는 경우를 말한다. 이미지 폰트는 폰트가 아니고 이미지이다.
- 웹폰트는 서버에 저장해 제공하거나, 웹 경로를 통해 import 사용하는 폰트를 말한다. 혹은 사용자의 로컬환경에 글꼴을 다운받아 적용(설치형 폰트)
- 설치형과 웹폰트는 유사하기도 하지만, 웹폰트는 최근 들어 클라이언트 단에서 경로를 따라서 제공하는 것.
- 웹폰트는 generic font가 포함되어 있을 수 있기 때ㅐ문에 따로 선언을 하지 않을 수 있다.

- [웹폰트 사용하기](https://wit.nts-corp.com/2017/02/13/4258)
- [웹폰트 최적화](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization?hl=ko)

## vertical-align

- vertical-align 속성으로 수직 정렬을 할 수 있다.
- blobk요소가 아닌 inline 또는 inline-block에서만 사용할 수 있다.
- display이 속성이 변하지 않은 div,p와 같은 블록레벨 요소에는 적용되지 않는다.
- 인라인 레벨에만 적용할 수 있기 때문에 인라인 요소 또는 테이블 셀 상자의 수직 정렬을 사용할 떄 사용함
- div 가 디스플레이 블록 그대로 가지고 있을 때는 아무런 효과가 없음
- 대부분 부모 요소에 상대적으로 정렬됨

- 텍스트라는 문자열이 쭉 나열될 때 텍스트는 기본적으로 라인박스(line box)라는 공간을 생성한다. 텍스트는 인라인 요소이기 때문에 폰트 패밀리 폰트 사이즈, line-height등의 많은 영향을 받는다.
- 그럴 때 소문자 x기준으로, 왔다갔다함. => text인라인 박스를 vertical-align: text-top으로 지정할 때 'x'를 기준으로 왔다갔다 하게 됨
- vertical-align: middle의 경우 이렇게 선언만 하면 부모 요소의 가운데에 위치할 것이라 생각하는데 아님. 부모요소가 갖고 있는 자식 소문자 x의 중간지점에 vertical-align을 선언한 것이기 떄문에 (?)
- [vertical-align - w3schools](https://www.w3schools.com/cssref/pr_pos_vertical-align.asp)
- [vertical-align - mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)

## text-align

vertical-align이 인라인 요소의 수직 정렬이었다면, text-align은 인라인 요소의 수평 정렬에 사용된다.

- 블록 요소에 선언을 하게 되면 블록 요소 안에 있는 인라인 요소들을 정렬함
- 블록 요소 안에서 텍스트 인라인 요소들이 각각 정렬이 되는 것이라고 생각하면 된다. (텍스트를 인라인 요소라고 봄)
- 선언은 블록 레벨에 하고 있지만, text-align은 inline-level에 적용된다.
- block-level을 text-align으로 정렬할 수 없다.
  => div에 텍스트 얼라인 left한다고 하여, div가 브라우저 안에서 왼쪽으로 이동할 수는 없음.

## text-indent

들여쓰기는 문단의 처음 왼쪽 글머리에 빈칸을 만들어 가독성을 향상시킨다.
