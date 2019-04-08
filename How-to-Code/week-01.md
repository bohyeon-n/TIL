# Beginning student language

## Expression

### Expressions, pt 1

(<primitive><expression>...)

```
(+ 3 4)
(+ 3 (* 2 3))
(/ 12 (* 2 3))
```

- 규칙

  - 여는 괄호, 기본 연산자 예) 더하기, 곱하기 , 슬래시를 입력한 다음 임의의 수를 입력한다.

  - expression은 actual value이다. numbers 그 자체는 expression이다.

  - 세미콜론;을 앞에 각 라인 앞에 붙이면 주석이 된다. (racket에게 이 줄을 무시하라고 알려주는 것.)

- more primitive operations

  - sqrt
    square

  ```
  (sqrt 16)
  ;4
  ```

  - sqr
    square root

  ```
  sqr(3)
  ;9

  ```

### Expressions , pt2

square root of 2 is an irrational number.

```
(sqrt 2)
;#i1.4142135623730951
```

irrational number은 숫자를 쓰려면 무한한 공간이 필요하다는 것이다. 컴퓨터는 크기는 무한하지 않다. 한정되어 있다.

\#i1 의 의미는 inexact number이다. 매우 close하지만 정확하지는 않다. 걱정할 필요는 없다. 일반적으로 그래픽 프로그램에서 발생하지만, 두 숫자의 차이를 볼 수 없다.

## Evaluation

```
(+ 2 (* 3 4) (- (+ 1 2) 3))

```

### step-by-step evaluation

상세한 단계별 프로세스를 살펴보기
racket은 expression을 evaluate할 때 14를 사용한다.

용어 설명

여는 괄호와 primitive operaion을 가지고 primitive call이라 부른다. primitive call에서 +와 같은 것들을 operator라고 부른다. 그리고 primitive call에서 operator 뒤에 뒤따라 오는 모든 expression을 위 경우 `2, (* 3 4), (- (+ 1 2 ) 3)`을 operands라고 부른다.

이제 단계별 프로세스를 살펴봅니다.

가장 먼저 일어나는 일은 racket이다. 이 expression 전체를 evaluate하라는 메시지가 나타난다.
그리고 이것을 primitive call이라고 본다. 여는 괄호와함께 시작됩니다. 따라서 primitive call을 평가하는 규칙은 먼저 모든 피연산자 값으로 축소해야 한다.
따라서 evaluation 작업이 필요없다. 그것은 이미 value이다.

operand는 expression이다. value가 아니다.
해야할 작업은 여기이다.
처음 operand는 이미 value이다. 작업이 필요 없다.
두 번째 operand는 이미 값이므로 작업이 필요 없다.
(3 4 는 각각 value이다.)
이 primitive call에 있는 두 operand는 value로 축소되었다.
그리고 mutiplication이 일어났고 전체 는 12가 되었다.

전체 expression은

```
(+ 2 12 (- (+ 1 2 ) 3))
```

```
(+ 2 12 (- 3 3 ))
```

```
(+ 2 12 0)
```

```
14
```

- evaluation order
  왼쪽에서 오른쪽으로 안에서 바깥으로

  \- 에 대한 피연산자는 모두 값이 되어야 하기 때문에 - 가 proceed하기 전에

beginning student language에서 가장 위대한 것들 중 하나는 식제로 많은 evaluation 규칙이 없는 것이다.

## String and Images, pt1

지금까지, 숫자에 적용하는 expression을 작성하는 법을 배웠다. 그리고 primitive call rule for evaluating those expressions을 배웠다.

그러나 racket에서 number가 유일한 primitve가 아니다.

## String Primitives

```
"apple"

;"apple"
```

```
(string-append "Ada" "Lovelace")

;"AdaLovelace"
```

"123"과 123은 같지 않다.

```
(+ 1 "123")

;: expects a number as 2nd argument, given "123"

```

### operaion

- string length

```
(string-length "hi")

;2
```

- substring

```
(substring "bohyeon" 2 4)
;"hy"
```

zero-based indexing

## Image Primitives

```
(require 2htdp/image)

(circle 10 "solid" "red")
(rectangle 30 60 "outline" "blue")
(text "hello" 24 "orange")
```

이것이 이미지를 만들기 위한 유용한 기본 요소이다.
일단 이미지를 만들면 이미지로 할 수 있는 일에 대해 이야기 하겠다.

유용한 primitive하나는 above이다.

```
(above (circle 10 "solid" "red")
       (circle 20 "solid" "orange")
       (circle 30 "solid" "pink"))

```

string-append의 이미지 버전

beside, overlay...등 다양한 functions가 있다.

## Constant Definitions , pt 1

```
(define WIDTH 400)
(define HEIGHT 400)

( * WIDTH HEIGHT)
(* 400 HEIGHT)
(* 400 600)
24000
```

Racket이 constant definition을 만날 떄, expression을 평가합니다. 그리고 결과 값을 값으로 사용합니다.

evaluation이 name constant를 만나면 name constant는 정의한 값으로 단순히 값으로 평가됩니다.

```
(define CAT  .)

(rotate -10 CAT)
(rotate 10 CAT)
```

(define name expression)

## Function Definitions, pt. 1

unchanging, varying

```
(require 2htdp/image)
(define (bulb c)
  (circle 40 "solid" c))

(bulb "purple")

```

parameter인 c는 변화하는 값을 나타낼 것이고 function의 바디는 그 장소에서 그 매개 변수를 사용할 것이다.

```
(above (bulb "red")
       (bulb "yellow")
       (bulb "green"))
```

## Function Definitions, pt. 2

the rules forming function definitions and function calls

[all the rules for the BLS language](https://courses.edx.org/courses/course-v1:UBCx+HtC1x+2T2017/a24b7341216346f2a5c99c6391f64229/)

- To form a function definition:

```
  (define (<name> <name>...)
  <expression>)

  (define (bulb c)
    (circle 40 "solid" c))
```

- evaluating a function call
  함수 호출을 평가하는 규칙은 먼저, operand(피연산자)를 값으로 줄이는 것이다.

```
(bulb (string-append "re" "d"))
(bulb "red")

```

string 're'와 'd'는 이미 value이므로 append ptrimitive를 적용할 수 있다.

첫 번째 operand를 value로 줄였다.

- to evaluate primitive call
  - reduce operands to values (called the arguments)
  - then apply primitive to the values

## Booleans and if Expressions, pt 1

```
(define WIDTH 100)
(define HEIGHT 100)

(> WIDTH HEIGHT)
;false
(>= WIDTH HEIGHT)
```

```
(string=? "foo" "bar")
;false
```

```
(require 2htdp/image)
(define I1 (rectangle 10 20 "solid" "red"))
(define I2 (rectangle 20 10 "solid" "blue"))
(< (image-width I1)
   (image-width I2))

```

## Booleans and if Expressions, pt 2

(if <expression> <expression> <expression>)

```
(if (< (image-width I1)
       (image-height I1))
       "tall"
       "wide")
;true
```

"wide"가 검은색으로 하이라이트된다.
이것이 의미하는 것이 무엇일까?

## Booleans and if Expressions, pt 3

- evaluate the question expression

question expression은 primitive less-than을 호출하고 피연산자들을 값으로 줄여야 한다.

처음 operand(image-width I2)는 value가 아니다. expression이다.
I2가 실제 이미지, image value가 된다.

```
(if (< (image-width I2)
       (image-height I2))
       "tall"
       "wide")

(if (< (image-width 실제이미지)
       (image-height I1))
       "tall"
       "wide")

(if (< 20
       (image-height I1))
       "tall"
       "wide")

(if (< 20
       (image-height 실제 이미지))
       "tall"
       "wide")

(if (< 20 10)
       "tall"
       "wide")

(if false
       "tall"
       "wide")

"wide"
; 만약에 string value가 아니라 expression이라면 여기서 expression을 다시 값으로 reduce한다.
```

## Booleans and if Expressions, pt 4

new primitive 'and'

```
(and (> (image-height I1) (image-height I2)
     (> (image-width I1 ) (image-widht I2))))
```

and는 첫 번째를 평가하고 true면 계속한다. 그리고 모든 표현이 true일 경우 전체가 true가 된다.

false일 경우 즉시 중단하고 false를 produce한다.

## Using the Stepper

## Discovering Primitives, pt 1

오른쪽 마우스 search in help desk 검색할 수 있음!
