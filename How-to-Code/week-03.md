# How to Design Data

이번주는 design of data에 대해 알아보겠습니다!
데이터 디자인은 디자이닝 프로그램을 설계할 때 지렛대 역할을 하는 것으로 나타났습니다. 우리가 데이터를 디자인할 때, 우리는 나중에 데이터를 조작할 모든 function에 대하여 결정을 하기 때문입니다.

그것에 도달하기 전에, 이 비디오는 cond expression에 대해 다룹니다.

## cond expression

```
(require 2htdp/image)

;; cond-starter.rkt

(define I1 (rectangle 10 20 "solid" "red"))
(define I2 (rectangle 20 20 "solid" "red"))
(define I3 (rectangle 20 10 "solid" "red"))

;; Image -> String
;; produce shape of image, one of "tall", "square" or "wide"
(check-expect (aspect-ratio I1) "tall")
(check-expect (aspect-ratio I2) "square")
(check-expect (aspect-ratio I3) "wide")

;(define (aspect-ratio img) "")  ;stub

;(define (aspect-ratio img)      ;template
;  (... img))

(define (aspect-ratio img)
  (if (> (image-height img) (image-width img))
      "tall"
      (if (= (image-height img) (image-width img))
          "square"
          "wide")))


(define (aspect-ratio img)
  (cond [Q A]
       [Q A]
       [Q A]))


(define (aspect-ratio img)
  (cond [(> (image-height img) (image-width img)) "tall"]
       [(= (image-height img) (image-width img)) "square"]
       [else "wide"]))
```

대괄호와 둥근괄호는 racket에서 같게 취급합니다.
cond는 다중 케이스에서 유용하며 읽기 쉽습니다.

```
(cond [<expression> <expression>]
      ...)
```

### cond evaluating

```
(cond [(> 1 2) "bigger"]
      [(= 1 2) "equal"]
      [(< 1 2) "smaller"])
```

< 1 2 는 value가 아닌, expression 입니다. 이것을 evaluate해야 하기 때문에 primitive에 대한 호출입니다.
primitive 룰을 호출합니다. to evaluate primitive call

```
(cond [false "bigger"] ; 첫 번째 질문이 false면 그 질문 쌍을 버린다.
      [(= 1 2) "equal"]
      [(< 1 2) "smaller"])
```

```
(cond [(= 1 2) "equal"]
      [(< 1 2) "smaller"])
```

```
(cond [false "equal"] ; drop the first question
      [(< 1 2) "smaller"])
```

```
(cond [(< 1 2) "smaller"])
```

```
(cond [true "smaller"])
```

```
"smaller" ; done evaluating
```

false 면 드롭하고 다시 시작합니다. true면, 전체 조건을 바꿉니다.

cond를 위한 규칙이 무엇일까요? function call, if 규칙, 모두 같은 방식으로 동작합니다.
그들은 어떤 의미에서 그들의 일을 시도하고 벗어나려고 노력합니다.
마지막에 answer를 도출하면 , cond는 가버립니다. 함수 호출에서 일어난 일과 같습니다.

## Data Definitions

designing data의 일환으로 data definition이라 불리는 새로운 종류의 디자인 엘리먼트를 소개합니다.

## Atomic Non-Distinct

```
;; CityName is String
;; interp. the name of a city
(define CN1 "Boston")
(define CN2 "Vancouver")
```

template for this data definition(Data Driven Templates rules)
템플릿 이름을 상세하게 설명할 수 있도록 정의한다.

```
(define (fn-for-city-name cn)
 (...cn))

;; template rules used:
;;  - atomic non-distinct; String
```

```
;; Functions;
;; CityName -> Boolean
;; produce true if the given city is Hogsmeade

(check-expect (best? "Boston") false)
(check-expect (best? "Hogsmeade") true)

;(define (best? cn) false) ;stub

;took template from CityName

(define (best? cn)
  (if (string=? cn "Hogsmeade")
       true
       false))

```

```
(define (best? cn)
  (string=? cn "Hogsmeade"))

```

atomic data
표현할 정보가 그 자체로 원자 형태일 때 간단한 원자 데이터를 사용하십시오. 애니메이션을 시작한 후 경과한 시간, 자동차의 X좌표, 고양이의 이름 등

### HtDF X Structure of Data Orthogonality

다른 종류의 데이터 정의 디자이닝에 집중합니다.

### Interval

interval data definitions are used for information that is numbers within a certain range.

> how to Design Data (HTDD)
> The first step of the recipe is to identify the inherent > structure of the information.
>
> Once that is done, a data definition consists of four or > five elements:
>
> 1. A possible structure definition (not until compound data)
> 2. A type comment that defines a new type name and describes how to form data of that type.
> 3. An interpretation that describes the correspondence between information and data.
> 4. One or more examples of the data.
> 5. A template for a 1 argument function operating on data > of this type.
>
> In the first weeks of the course we also ask you to
> include a list of the template rules used to form the
> template.

theater 문제

[]의 뜻은 inclusive 포함한다.
Natural 은 0부터 시작하는 interger이다.
[1, 32) => 32는 포함하지 않는다는 의미임

```

;; seat-num-starter.rkt

;
; PROBLEM:
;
; Imagine that you are designing a program to manage ticket sales for a
; theatre. (Also imagine that the theatre is perfectly rectangular in shape!)
;
; Design a data definition to represent a seat number in a row, where each
; row has 32 seats. (Just the seat number, not the row number.)
;



;; SeatNum is Natural[1, 32]
;; interp. seat numbers in a row, 1 and 32 are aisle seats
(define SN1 1) ;aisle
(define SN2 2) ; middle
(define SN3 3) ; aisle
#;
(define (fn-for-seat-nul sn)
  (...sn))

;; Template rules used!
;; - atomic non-distinct; Natural[1, 32]

```

## Enumeration

[Eunmeration ](https://courses.edx.org/courses/course-v1:UBCx+HtC1x+2T2017/courseware/7b6de5c17fdb4ad295a4d5cdafbe1306/0c6595fa0d6347e4b026faa1e2c7cafc/?child=first#transcript-end-1525dd4244954bf2b6ec9d6f6c420116)

```
;; LetterGrade is one of:
;;  - "A"   0
;;  - "B"   1
;;  - "C"   2
;; interp. the letter grade in a course
;;<examples are redundant for enumeration>

(define (fn-for-letter-grade lg)
)

;;Temaplate rules
```

값은 세 개의 개발 정보 값을 나타낸다.
A 는 1, B는 2 C는 3을 나타내는 것이 간단해 보이는 이유는 이 세가지 케이스를 나타내는데 스트링을 사용했기 때문입니다. 스트링은 명백하게 케이스가 무엇인지 나타낼 수 있습니다.

```
(define LG1 "A") ; means A
(define LG2 "B") ; means B
```

위와 같은 예시는 어리석은 예이다.
왜냐하면 이는 열거형(enumeration)이기 때문에, 오직 세 가지 값만 있습니다.
여기서 우리가 쓰는 것은 예제가 열거 형에 대해 중복된다는 것이다.

subclass of the one of? means
세계의 모든 letter grade 는 A, B, C중 하나이다.

```
(define (fn-for-letter-grade lg)
  (cond [Q A]
        [Q A]
        [Q A]))

)
;; Template rules used:
;; - one of: 3 cases
;; - atomic distinct value: "A"
```

```
#;
(define (fn-for-letter-grade lg)
  (cond [(string=? lg "A") (...)]
        [(string=? lg "B") (...)]
        [(string=? lg "C") (...)]))
)
;; - atomic distinct value: "A"
;; - atomic distinct value: "B"
;; - atomic distinct value: "C"
```

so this is an enumeration because the domain information here
여기에 도메인 정보가 있기 때문에 열거형(enumeration)입니다.

A, B, C와 열거 데이터 정의 데이터 값 중 하나를 정보를 나타내는 데 사용합니다.

새로운 템플릿 규칙

- one of rule
- distinct value rule

## itemization

카운트 다운

```

PROBLEM:

Consider designing the system for controlling a New Year's Eve
display. Design a data definition to represent the current state
of the countdown, which falls into one of three categories:

 - not yet started
 - from 10 to 1 seconds before midnight
 - complete (Happy New Year!)

```

카우트 다운이 시작되지 않은 상태 => 명료한 상태 distinct state
카운트 다운 => not a single distinct value
카운트 다운 종료 => distinct state
이 가운데 하나의 distinct value가 아니다. 그래서 imtemizatio일 것이다.

타입 코멘트
countdown은 3개의 subclasses가 있다.
카운트 다운이 시작하지 않았다면, distinct state이다. 이를 나타내기 위해 any piece of atomic, distinct dtata를 사용할 수 있다. boolean value false를 사용할 것이다.

interpertation

```
;;Countdown is one of:
;; - false
;; - Natural(1, 10)
;; - "complete"
;; interp.
;; false means countdown has not yet started
;; Natural(1, 10) means countdown is running and how many seconds left
;; "complete" means coundown is over
(define CD1 false)
(define CD2 10) ; just stared running
(define CD3 1) ; almost over
(define CD4 "complete") ;
```

- quiz
  dinner reservations at a pop up restarurant

```
;; reservation is one of:
;; - Natural[0, 100]
;; - "standby"
;; interp.
;;  Natural[1, 100] means a guaranteed seat for dinner where the number corresponds to which reservation (not which seat);
;; "standby" menas a standby spot, if all the reservations show up the person will not be seated.
```

## Itemization, pt2

coundown
define functions
data driven template recipe 참고 하기!

```
(define (fn-for-coundtdown c)
  (cond [Q A]
        [Q A]
        [Q A]))
#;
(define (fn-for-coundtdown c)
  (cond [(false?  c) (...)]
        [(and (number? c)(<= 1 c) (<= c 10)) (...c)]
        [else (...)]))

;; Template rules used:
;; - one of: 3 cases
;; - atomic distinct: false
;; - atomic non-distinct: Natural(1, 10)
;; - atomic distinct;
```

이것을 mixed data itemization이라고 부른다.
boolean, number, string
그래서 여기서 매우 조심해야 한다. 왜냐하면 이 템플릿을 c라는 문자열이라고 부르기 때문에 여기보다 크거나 같으면 작거나 같아서 날려 버릴 것이다.
이것은 혼합된 데이터 itemization이므로, 우리는 불려지기 보다 작거나 같음을 지켜야 합니다. 숫자가 아닌 값을 부르지 않기 위해
그래서 테스트를 하나 더 넣습니다 (number? c)
두번째 케이스는 숫자이고 1과 10사이이다.

> It is permissible to use else for the last question for itemizations and large enumerations. Normal enumerations should not use else.

## Itemization, pt3

simplify

```
#;
(define (fn-for-coundtdown c)
  (cond [(false?  c) (...)]
        [(number ? c) (...c)]
        [else (...)]))
```

- traffic light
  disable, red, yellow, green state

false의 뜻은 disabled이다. 그리고 string red, yellow, green은 light의 색깔이다.
어떤 면에서 enumeration을 포함하는 itemization이다.
itemization 정의에 더 맞다.

```
;; Data definitions;

;; TLight is one of:
;; - false
;; - "red"
;; - "yellow"
;; - "green"
;; interp. false means the light is disabled, otherwise the color of the light
(define TL1 false)
(define TL2 "red")

(define (fn-for-tlight t1)
  (cond [(false? tl) (...)]
        [(and (string? tl) (string=? tl "red")) (...)]
        [(and (string? tl) (string=? tl "yellow")) (...)]
        [(and (string? tl) (string=? tl "green")) (...)]))

;; Template rules used:
;; - one of: 4 cases
;; - atomic distinct: false
;; - atomic distinct: "red"
;; - atomic distinct: "yellow"
;; - atomic distinct: "green"
```

간단하게 생각해볼 수 있다.
우리가 "red"를 얻으면 더이상 데이터 타입이 남아있지 않다. 문자열이라는 것 외에 (문자열밖에 될 수 없다)
그래서 추가 룰이 있습니다. 만약 남은 케이스가 같은 데이터 타입이라면, 계속 데이터 타입을 체크할 필요가 없습니다.

```
(define (fn-for-tlight t1)
  (cond [(false? tl) (...)]
        [(string=? tl "red") (...)]
        [(string=? tl "yellow") (...)]
        [(string=? tl "green") (...)]))
```

we can eliminate all the guards.

## HtDF with Interval

특정 범위안의 숫자를 표현할 때 사용한다. ex: `interger[0, 10]`

```
;; Data definitions:
;; SeatNumber is Natural[1, 32]
;; Interp. Seat numbers in a row, 1 and 32 are aisle seats
(define SN1 1) ; aisle
(define SN2 12) ; middle
(define SN3 32) ;aisle
#;
(define (fn-for-seat-num sn)
  (... sn))

;; Template rules used:
;; atomic non-distinct: Natural[1, 32]

;; Functions:

;; SeatNum -> Boolean
;; produce true if the given seat number is on the aisle
(check-expect (aisle? 1) true)
(check-expect (middle? 16) false)
(check-expect (aisle? 32) true)

;(define (aisle? sn) false) ;stub

;<use tempalte from SeatNum>

(define (aisle? sn)
  (= sn 1)
  (= sn 32))

```

interval with 2 closed endpoints
suggests 3 tests

interval leads to template
2 closed endpoints suggests 3 tests

2 closed edns interval은 테스트의 구조를 결정했다.
각 끝의 포인트와 가운데 포인트를 테스트 한다.

## HtDF with Enumeration

```
;; <examples are redundant for enumerations>
#;
(define (fn-for-letter-grade lg)
  (cond [(string=? lg "A") (...)]
        [(string=? lg "B") (...)
        ([(string=? lg "C") (...)])]))

;; Template rulles used:
;; one-of: 3 cases
;; atomic distinct: "A"
;; atomic distinct: "B"
;; atomic distinct: "C"

;;Functions:

;; LetterGrade -> LetterGrade
;; produce next highest letter grade (no change for A
(check-expect (bump-up "A") "A")
(check-expect (bump-up "B") "A")
(check-expect (bump-up "C") "B")

; (define [bump-up lg] "A") ;stub
; <use template from LetterGrade>

(define (fn-for-letter-grade lg)
  (cond [(string=? lg "A") "A"]
        [(string=? lg "B") "A"]
        ([(string=? lg "C") "B"])]))
```

3 case enumeration lead to template suggests at least 3 tests

## HtDF with Itemization

countdown 예제

```
(require 2htdp/image)
;; Data definitions:

;; Countdown is one of:
;;  - false
;;  - Natural[1, 10]
;;  - "complete"
;; interp.
;;    false           means countdown has not yet started
;;    Natural[1, 10]  means countdown is running and how many seconds left
;;    "complete"      means countdown is over
(define CD1 false)
(define CD2 10)          ;just started running
(define CD3  1)          ;almost over
(define CD4 "complete")
#;
(define (fn-for-countdown c)
  (cond [(false? c) (...)]
        [(and (number? c) (<= 1 c) (<= c 10)) (... c)]
        [else (...)]))

;; Template rules used:
;;  - one of: 3 cases
;;  - atomic distinct: false
;;  - atomic non-distinct: Natural[1, 10]
;;  - atomic distinct: "complete"

;; Functions:
(check-expect (countdown->image false) (square 0 "solid" "white"))
(check-expect (countdown->image 5) (text (number->string 5) 24 "black"))
(check-expect (countdown->image "complete") (text "happy new year!!" 24 "red"))

;(define (countdown->image c) (square 0 "solid" "white")) ;stub
;<use template from Countdown>

(define (countdown->image c)
  (cond [(false? c)
         (square 0 "solid" "white")]
        [(and (number? c) (<= 1 c) (<= c 10))
         (text (number->string c) 24 "black")]
        [else
         (text "happy new year!!" 24 "red")]))


```

이것이 interval을 포함하는 itemization이다.
3 case itemization, with one interval

## Structure of Information Flow Through

information data template function tests

idenfifying the structure of the information is a key step in program design
