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
