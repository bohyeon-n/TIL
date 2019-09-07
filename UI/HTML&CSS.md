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
<input type="radio" name="gender"> 남자 
<input type="radio" name="gender"> 여자 
```

  - type radio는 하나만 선택, 상호 배타적인 선택지를  입력할 때 사용한다. 
  - radio타입은 name 으로 같은 라이오임을 표시해 줘야   한다. 

### checkbox

```html 
<input type="checkbox"  name="hobby" checked> 등산 
<input type="checkbox"  name="hobby" checked> 독서 
<input type="checkbox"  name="hobby"> 운동
```

  - checked속성은 값이 별도로 존재하지 않는 boolean 속성이다. 
  - name 속성으로 그룹화 하기 

### file 

- 내 컴퓨터에 있는 파일을 서버에 올릴 때 사용하는 타입 

### submit 

- 폼의 값을 전송하는 버튼

```html
<input type='submit'>
```
### reset 

- 폼의 값을 초기 상태로 변경함

```html
<input type="reset" value="취소">
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
### button 태그 vs input  type button 

button 태그는 안에 내용을 직접 넣을 수 있기 때문에 스타일적인 측면에서 자유로운 표현이 가능하다. 

### LABEL요소 

<label>은 form  요소의 이름과 form 요소를 명시적으로 연결시켜주기 위해 사용한다. 
모든 form 사용할 수 있다. 

```html 
<label for="username">이름: </label>
<input type="text" id="username">
```

- id속성의 값과 해당 label요소의 for 속성의 값을 동일하게 적어주어야 한다. 
- 아이디 레이블을 클릭해도 마치 입력 요소를 클릭한 것처럼 동작한다.

```html 
성별: <label for="male">남자: </label> <input type="radio" name="gender" id="male" checked >
<label for="female" >여자</label> <input type="radio" name="gender" id="female"/>
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
  <input type="text" id="username">
  성별: <label for="male">남자: </label> <input type="radio" name="gender" id="male" checked >
  <label for="female" >여자</label> <input type="radio" name="gender" id="female"/>
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
-  method 속성은 데이터를 전송하는 방식을 지정(get, post)


## 콘텐츠 모델, 시멘틱 마크업, 블록 & 인라인 

HTML5에는 요소들이 가지고 있는 성격에 따라 요소의 종류를 정의하는 규칙들이 있다. 요소는 이 규칙들을 준수해야 하며, 반드시 HTML 권고안을 따라야 한다.
이런 규칙에 대해 비슷한 성격의 요소들끼리 그룹화한 것이 콘텐츠 모델이며, 각각의 HTML 요소들은 하나 또는 여러 개의 콘텐츠 모델에 속하게 된다. 

###  Content Models 의 7분류 

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
- 중요하다는 의미를 가지고 싶을 때는  <stong>태그를 쓴다. 

- <i> 단순히 기울어진 태그
- <em> 강조하는 태그 

- <u> 밑줄친 태그 
- <ins> 새롭게 추가된 

- <s>중간선이 있는 
- <del>삭제된 

- 쇼핑몰에서 할인된 가격을 표시하고자 할 때 <s>태그를 쓰면 가격이 두 개가 나왔다고 생각하지만,  <del>태그를 사용하여 정가 가격을 표시하고 <ins>태그를 사용해 새 가격을 쓰면 브라우저는 원래 가격이 삭제되고 새로운 가격이 나왔다는 의미까지 정확하게 파악할 수 있다. 

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

