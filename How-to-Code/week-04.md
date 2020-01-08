# How to Design

## The big-bang Mechanism

## Domain Analysis

1. sketch proram scenarios
2. identify constant information
3. identify changing information
4. identify big-bang options

네모 상자 안에 고양이가 왼쪽에서 오른쪽으로 이동하기

constant information

- width
- height
- ctr-y (y 좌표는 항상 일정함)
- mts (background)
- cat image

변하지 않는 것 , 상수를 정의하도록 노력해야 합니다.
복잡한 프로그램에서, 이를 모두 정의하기가 어렵습니다. 하지만 후에 생각하지 못했던 것을 발견하고 다시 목록에 추가하는 것은 괜찮습니다.

changing information

- x coordinate of the cat

big-bang options

- on-tick
- to-draw

다음에는 이를 코드로 바꾸는 작업을 한다.

## Program through main Function

data-driven template는 함수가 consume하는 데이터의 타입을 알고 있다.

어려운 문제가 생기면 어떻게 해야 할 지 모릅니다. 먼제 세부사항을 알기 전에 프로그램의 기본 구조를 알 수 있나요? 이것은 놀랍게도 파워풀한 아이디어입니다. 그리고 그것은 비기너를 위한 것이 아닙니다.

1. Domain analysis
2. Build the actual program

- constants
- data definitions using HtDD
- Function using HtDF
  - main first
  - wish list entriesfor big-bang handlers
  - work through wish list until done

**템플릿 중요함**
정말 말하고 싶은 것은 레시피가 구조화되는 방식이다.
템플릿이 솔루션의 조각뿐 아니라 디자인 프로세스를 프로세스 단계로 쪼갠다.
그래서 이 함수와 저 함수는 솔루션의 두 조각이 된다.
그러나 템플릿은 프로세스의 단계이다, 왜냐하면 마지막 함수를 가지고 있기 때문에, 템플릿은 중간단계(?) 이다.
두 가지 해결책과 과정의 단계들을 얻을 수 있다.
전체 작업을 더 작고 관리하기 쉬워진다.

더 나은 프로그래머가 될 떄, 매우 간단한 함수에느 템플릿을 사용하지 않거나 템플릿이 머리속에 있을 수 있다. 그러나 템플릿에 대한 아이디어, 세부 사항에 도달하기 전에 코드 조각의 기본 구조에 대한 생각을 항상 가질 것이다. 그리고 너무 어려워서 즉시 솔루션을 적을 수 없을 때 항상 사용하게 될 것이다.

- 첫 번째 라인은 프로그램의 짧은 정리
- constant name 을 사용하면 변화가 쉽다.
- 코드와 분석 사이의 명확한 추적성을 가짐

!!! => 아직 끝나지 않은 것 마킹

**고양이 지나기기 프로그램 템플릿**

```
(require 2htdp/image)
(require 2htdp/universe)

;; My world program  (make this more specific)

;; =================
;; Constants:


;; =================
;; Data definitions:

;; WS is ... (give WS a better name)



;; =================
;; Functions:

;; WS -> WS
;; start the world with ...
;;
(define (main ws)
  (big-bang ws                   ; WS
            (on-tick   tock)     ; WS -> WS
            (to-draw   render)   ; WS -> Image
            (stop-when ...)      ; WS -> Boolean
            (on-mouse  ...)      ; WS Integer Integer MouseEvent -> WS
            (on-key    ...)))    ; WS KeyEvent -> WS

;; WS -> WS
;; produce the next ...
;; !!!
(define (tock ws) ...)


;; WS -> Image
;; render ...
;; !!!
(define (render ws) ...)
Depending on which other big-bang options you are using you would also end up with wish list entries for those handlers. So, at an early stage a world program might look like this:

(require 2htdp/universe)
(require 2htdp/image)

;; A cat that walks across the screen.

;; Constants:

(define WIDTH  200)
(define HEIGHT 200)

(define CAT-IMG (circle 10 "solid" "red")) ; a not very attractive cat

(define MTS (empty-scene WIDTH HEIGHT))


;; Data definitions:

;; Cat is Number
;; interp. x coordinate of cat (in screen coordinates)
(define C1 1)
(define C2 30)

#;
(define (fn-for-cat c)
  (... c))


;; Functions:

;; Cat -> Cat
;; start the world with initial state c, for example: (main 0)
(define (main c)
  (big-bang c                         ; Cat
            (on-tick   tock)          ; Cat -> Cat
            (to-draw   render)))      ; Cat -> Image

;; Cat -> Cat
;; Produce cat at next position
;!!!
(define (tock c) 1)  ;stub

;; Cat -> Image
;; produce image with CAT-IMG placed on MTS at proper x, y position
; !!!
(define (render c) MTS)
```

```
(require 2htdp/image)
(require 2htdp/universe)

;; My world program  (make this more specific)
;; A cat that walk from left to right across the screen.
;; =================
;; Constants:
(define WIDTH 600)
(define HEIGHT 400)

(define CTR-Y (/ HEIGHT 2)

(define MTS (empty-scene WIDTH HEIGHT))

(define CAT-IMG .)


 ;; =================
;; Data definitions:

;; Cat is ... (give Cat a better name)

;; Cat is Number
;; interp. x position of the cat in screen coordinates
(define C1 0)              ;left edge
(define C2 (/ width 2))    ;middle
(define C3 WIDTH)          ;right edge

(define (fn-for-cat c)
   (...c))

;; Template rule used:
;; - atomic non-distinct: Number




;; =================
;; Functions:

;; Cat -> Cat
;; start the world with ...
;;
(define (main c)
  (big-bang c                        ; Cat
            (on-tick   advance-cat)  ; Cat -> Cat
            (to-draw   render)       ; Cat -> Image

;; Cat -> Cat
;; produce the next cat, by advancing it 1 pixel to right
;; !!!
(define (advance-cat c) 0)


;; Cat -> Image
;; render the cat image at appropriate place on MTS
;; !!!
(define (render c) MTS)
Depending on which other big-bang options you are using you would also end up with wish list entries for those handlers. So, at an early stage a world program might look like this:

(require 2htdp/universe)
(require 2htdp/image)

;; A cat that walks across the screen.

;; Constants:

(define WIDTH  200)
(define HEIGHT 200)

(define CAT-IMG (circle 10 "solid" "red")) ; a not very attractive cat

(define MTS (empty-scene WIDTH HEIGHT))


;; Data definitions:

;; Cat is Number
;; interp. x coordinate of cat (in screen coordinates)
(define C1 1)
(define C2 30)

#;
(define (fn-for-cat c)
  (... c))


;; Functions:

;; Cat -> Cat
;; start the world with initial state c, for example: (main 0)
(define (main c)
  (big-bang c                         ; Cat
            (on-tick   tock)          ; Cat -> Cat
            (to-draw   render)))      ; Cat -> Image

;; Cat -> Cat
;; Produce cat at next position
;!!!
(define (tock c) 1)  ;stub

;; Cat -> Image
;; produce image with CAT-IMG placed on MTS at proper x, y position
; !!!
(define (render c) MTS)
```

## Working through the Wish List

체계적으로 작업함으로써 순간에 작업이 매우 집중되어 있다. 많은 일을 했지만 매 순간에 한 가지 일을 했다.

우리는 constant information , 그리고 changing information을 작업했다. 그리고 빅뱅 옵션을 사용하여 domain analysis를 하였다.

- constant
- changing
- main function and wishlist for our big-bang option handler

```
(require 2htdp/image)
(require 2htdp/universe)

;; My world program  (make this more specific)
;; A cat that walk from left to right across the screen.
;; =================
;; Constants:

(define WIDTH 600)

(define HEIGHT 400)

(define CTR-Y (/ HEIGHT 2))

(define MTS (empty-scene WIDTH HEIGHT))

(define CAT-IMG .)


 ;; =================
;; Data definitions:

;; Cat is ... (give Cat a better name)

;; Cat is Number
;; interp. x position of the cat in screen coordinates
(define C1 0)              ;left edge
(define C2 (/ WIDTH 2))    ;middle
(define C3 WIDTH)          ;right edge
#;
(define (fn-for-cat c)
   (...c))

;; Template rule used:
;; - atomic non-distinct: Number

;; =================
;; Functions:

;; Cat -> Cat
;; start the world with (main 0)
;;

(define (main c)
  (big-bang c                        ; Cat
            (on-tick   advance-cat)  ; Cat -> Cat
            (to-draw   render)))       ; Cat -> Image

;; Cat -> Cat
;; produce the next cat, by advancing it 1 pixel to right
(check-expect (advance-cat 3) 4)
;(define (advance-cat c) 0) ;stub

;;<use template from Cat>
(define (advance-cat c)
 (+ c 1))

;; Cat -> Image
;; render the cat image at appropriate place on MTS
(check-expect (render 4) (place-image CAT-IMG 4 CTR-Y MTS))


;(define (render c) MTS) ;stub
;<user template from Cat>

(define (render c)
  (place-image CAT-IMG c CTR-Y MTS))
;; Depending on which other big-bang options you are using you would also end up with wish list entries for those handlers. So, at an early stage a world program might look like this:


```

## Improving a World Program - Add SPEED

프로그램은 항상 변한다.

the analysis is a model of the program. 왜냐하면 이는 정확하게 프로그램의 구조를 설명한다.

문제는 고양이가 너무 느리다는 것이다. 고양이의 스피드는 알 수 없는 상수이다.
고양이의 움직임은 clock tick 마다 1 픽셀이다.

스피드를 on-tick 핸들러 함수에 쓴다면 그런 다음 그 상수 값을 변경하면 고양이의 속도가 제어됩니다.

- speed 상수가 필요합니다.

```
(require 2htdp/image)
(require 2htdp/universe)

;; cat-v1.rkt

;; A cat that walks from left to right across the screen.

;; =================
;; Constants:

(define WIDTH 600)
(define HEIGHT 400)

(define CTR-Y (/ HEIGHT 2))

(define SPEED 3)

(define MTS (empty-scene WIDTH HEIGHT))

(define CAT-IMG .)




;; =================
;; Data definitions:

;; Cat is Number
;; interp. x position of the cat in screen coordinates
(define C1 0)           ;left edge
(define C2 (/ WIDTH 2)) ;middle
(define C3 WIDTH)       ;right edge
#;
(define (fn-for-cat c)
  (... c))

;; Template rules used:
;;  - atomic non-distinct: Number



;; =================
;; Functions:

;; Cat -> Cat
;; start the world with (main 0)
;;
(define (main c)
  (big-bang c                       ; Cat
            (on-tick   advance-cat) ; Cat -> Cat
            (to-draw   render)))    ; Cat -> Image

;; Cat -> Cat
;; produce the next cat, by advancing it SPEED pixel(s) to right
(check-expect (advance-cat 3) (+ 3 SPEED))

;(define (advance-cat c) 0) ;stub

;<use template from Cat>

(define (advance-cat c)
  (+ c SPEED))


;; Cat -> Image
;; render the cat image at appropriate place on MTS
(check-expect (render 4) (place-image CAT-IMG 4 CTR-Y MTS))

;(define (render c) MTS) ;stub

;<use template from Cat>

(define (render c)
  (place-image CAT-IMG c CTR-Y MTS))


```

사람들은 항상 더 나은 것을 원하기 때문에 프로그램은 변합니다.
그래서 프로그램을 쉽게 바꿀 수 있어야 합니다.

모델 레벨에서, 먼저 이 분석 그림을 사용한다음 프로그램을 신속하게 실행하여 새로운 분석을 캐치합니다.

## Improving a World Program - Add key handler

스페이스 키를 누르면 고양이가 뒤로 리셋된다.
how to use the on-key option to big-bang
domain analysis을 프로그램과 동기화된 상태로 유지하는 것이 좋습니다.
빅뱅 옵션을 하나 더 (on-key option)추가할 예정이다.
chaning information은 변하지 않았으므로 추가되는 바뀌는 정보는 없습니다.

[edx How To Design World(HtDW) 디자인 레시피](https://courses.edx.org/courses/course-v1:UBCx+HtC1x+2T2017/77860a93562d40bda45e452ea064998b/#HtDW)

템플릿 for world programs!

```
(define (main ws)
  (big-bang ws                   ; WS
            (on-tick   tock)     ; WS -> WS
            (to-draw   render)   ; WS -> Image
            (stop-when ...)      ; WS -> Boolean
            (on-mouse  ...)      ; WS Integer Integer MouseEvent -> WS
            (on-key    ...)))    ; WS KeyEvent -> WS
```

가능한 키들의 전체 묶음은 매우 큰 enumeration 이다 (string)
하나하나 모든 케이스를 테스트할 필요 없다.

대규모 열거형에서 템플릿 함수가 어떻게 작동하는지 이야기 합시다. 템플릿 단계로 넘어가서, 적은 수의 테스트 케이스를 작성하는 것이 좋은지 알게 됩니다.
핸드 키 함수 템플릿을 가져오는 방법은 How to Design Wolrds page를 가는 것이다.

[handle-key handle-mouse](https://courses.edx.org/courses/course-v1:UBCx+HtC1x+2T2017/77860a93562d40bda45e452ea064998b/#HtDF)

handle-key handle-mouse 모두 KeyEvent, 매우 큰 열거형, 모든 가능한 마우스 이벤트를 consume한다.

몇 가지 특수한 케이스가 있고 다른 경우에는 유사하게 다룹니다.

the white-box test takes advantage of knowing the cond has just two cases.

analysis에서 새로운 옵션을 정의하였다. 상수나, 변수가 변하지 않고, 빅뱅 옵션에 새롭게 추가하여 새로운 핸들러를 만들었다.

새로운 옵션이 추가된 코드

```
(require 2htdp/image)
(require 2htdp/universe)

;; cat-v2.rkt

;; A cat that walks from left to right across the screen.

;; =================
;; Constants:

(define WIDTH 600)
(define HEIGHT 400)

(define CTR-Y (/ HEIGHT 2))

(define SPEED 3)

(define MTS (empty-scene WIDTH HEIGHT))

(define CAT-IMG .)




;; =================
;; Data definitions:

;; Cat is Number
;; interp. x position of the cat in screen coordinates
(define C1 0)           ;left edge
(define C2 (/ WIDTH 2)) ;middle
(define C3 WIDTH)       ;right edge
#;
(define (fn-for-cat c)
  (... c))

;; Template rules used:
;;  - atomic non-distinct: Number



;; =================
;; Functions:

;; Cat -> Cat
;; start the world with (main 0)
;;
(define (main c)
  (big-bang c                       ; Cat
            (on-tick   advance-cat) ; Cat -> Cat
            (to-draw   render)      ; Cat -> Image
            (on-key    handle-key)))          ; Cat KeyEvent -> Cat

;; Cat -> Cat
;; produce the next cat, by advancing it SPEED pixel(s) to right
(check-expect (advance-cat 3) (+ 3 SPEED))

;(define (advance-cat c) 0) ;stub

;<use template from Cat>

(define (advance-cat c)
  (+ c SPEED))


;; Cat -> Image
;; render the cat image at appropriate place on MTS
(check-expect (render 4) (place-image CAT-IMG 4 CTR-Y MTS))

;(define (render c) MTS) ;stub

;<use template from Cat>

(define (render c)
  (place-image CAT-IMG c CTR-Y MTS))

;; Cat keyEvent -> Cat
;; reset cat to left edge when space key is pressed
(check-expect (handle-key 10 " ")  0)
(check-expect (handle-key 10 "a") 10)
(check-expect (handle-key  0 " ")  0)
(check-expect (handle-key  0 "a")  0)
;(define (handle-key c key) 0) ; stub

(define (handle-key c ke)
  (cond [(key=? ke " ") 0]
        [else c]))
```

## 문제

### Countdown

```
PROBLEM:

Design a world program that represents a countdown. The program should
display the number of seconds remaining and should decrease at each
clock tick. Upon reaching zero, it should stay there and not change.

To make your countdown progress at a reasonable speed, you can use the
rate option to on-tick. If you say, for example,
(on-tick advance-countdown 1) then big-bang will wait 1 second between
calls to advance-countdown.

Remember to follow the HtDW recipe! Be sure to do a proper domain
analysis before starting to work on the code file.

Once you are finished the simple version of the program, you can improve
it by reseting the countdown to ten when you press the spacebar.
```

```
(require 2htdp/image)
(require 2htdp/universe)

;; A simple countdown animation.

;;
;; Constants:

(define WIDTH 50)
(define HEIGHT 50)

(define CTR-X (/ WIDTH 2))
(define CTR-Y (/ HEIGHT 2))

(define MTS (empty-scene WIDTH HEIGHT))

(define TEXT-SIZE 24)
(define TEXT-COLOR "black")

;; Data definitions:

;; Countdown is Natural[0, 10]
;; interp. the current seconds remaining in the countdown
(define CD1 10) ;countdown hasn't started
(define CD2 5)  ;countdown in progress
(define CD3 0)  ;countdown finished

#;
(define (fn-for-countdown cd)
  (...cd))

;; Template rules used:
;; - atomic non-distinct: Natural[0, 10]

;; Functions:

;; Countdown -> Countdown
;; called to run the animation; start with (main 10)
;; no tests for main function
(define (main cd)
  (big-bang cd
            (on-tick advance-countdown 1) ;Countdown -> Countdown
            (to-draw render-countdown)   ;Countdown -> Image
            (on-key handle-key)))        ;Countdown keyEvent -> Contdown

;; Countdown -> Countdown
;; if cd is zero, produce zero, otherwise subtract 1
(check-expect (advance-countdown 10) 9)
(check-expect (advance-countdown 1) 0)
(check-expect (advance-countdown 0) 0)

#;
(define (advance-countdown cd) 0) ; stub
;<template for Countdown>

(define (advance-countdown cd)
  (if (= 0 cd)
      0
      ( - cd 1)))

;; Countdown -> Image
;; produce an appropriate image for the countdown
(check-expect (render-countdown 10) (place-image (text "10" TEXT-SIZE TEXT-COLOR)
                                                 CTR-X CTR-Y
                                                 MTS))
(check-expect (render-countdown 0) (place-image (text "0" TEXT-SIZE TEXT-COLOR)
                                                CTR-X CTR-Y
                                                MTS))
#;
(define (render-countdown cd) MTS) ;stub
;<template from Countdown>

(define (render-countdown cd)
  (place-image (text (number->string cd) TEXT-SIZE TEXT-COLOR)
               CTR-X CTR-Y
               MTS))

;; Countdown KeyEvent -> Countdown
;; rest the countdown to 10 when the spacebar is pressed
(check-expect (hadle-key 0 " ") 10)
(check-expect (handle-key 5 " ") 10)
(check-expect (handle-key 5 "left") 5)

#;
(define (handle-key cd ke) ;stub
  0)

;<temlate from KeyEvent>

(define (handle-key cd ke)
  (cond [(key=? ke " ") 10]
        [else cd]))

```

### Traffic Light

```
(require 2htdp/image)
(require 2htdp/universe)

;; traffic-light-starter.rkt

;
; PROBLEM:
;
; Design an animation of a traffic light.
;
; Your program should show a traffic light that is red, then green,
; then yellow, then red etc. For this program, your changing world
; state data definition should be an enumeration.
;
; Here is what your program might look like if the initial world
; state was the red traffic light:
; .
; Next:
; .
; Next:
; .
; Next is red, and so on.
;
; To make your lights change at a reasonable speed, you can use the
; rate option to on-tick. If you say, for example, (on-tick next-color 1)
; then big-bang will wait 1 second between calls to next-color.
;
; Remember to follow the HtDW recipe! Be sure to do a proper domain
; analysis before starting to work on the code file.
;
; Note: If you want to design a slightly simpler version of the program,
;
; you can modify it to display a single circle that changes color, rather
; than three stacked circles.
;


;Constant

(define RADIUS 20) ;of each light
(define SPACING 6) ; space between and beside lights

(define BACKGROUND (rectangle (+ (* 2 SPACING) (* 2 RADIUS))
                              (+ (* 4 SPACING) (* 6 RADIUS))
                              "solid"
                              "black"))

(define SPACE (square SPACING "solid" "black"))

(define RON
  (overlay (above SPACE
                  (circle RADIUS "solid"   "red")
                  SPACE
                  (circle RADIUS "outline" "yellow")
                  SPACE
                  (circle RADIUS "outline" "green")
                  SPACE)
           BACKGROUND))

(define YON
  (overlay (above SPACE
                  (circle RADIUS "outline" "red")
                  SPACE
                  (circle RADIUS "solid" "yellow")
                  SPACE
                  (circle RADIUS "outline" "green")
                  SPACE)
           BACKGROUND))

(define GON
  (overlay (above SPACE
                  (circle RADIUS "outline" "red")
                  SPACE
                  (circle RADIUS "outline" "yellow")
                  SPACE
                  (circle RADIUS "solid" "green")
                  SPACE)
           BACKGROUND))

;Functions:

;; Light -> Light
;; called to run the animation; start with (main red)
;; no test for matin function
(define (main l)
  (big-bang l
            (on-tick next-color 1)    ;Light -> Light
            (to-draw render-light)))  ;Light -> Image

;Light -> Light
; produce next color of Light

(check-expect (next-color "red") "green")
(check-expect (next-color "yellow") "red")
(check-expect (next-color "green") "yellow")

#;
(define (next-color l)) ;stub
;<template from light>

(define (next-color l)
  (cond [(string=? l "red")    "green"]
        [(string=? l "green")  "yellow"]
        [(string=? l "yellow") "red"]))


;Light -> Image
;produce appropriate image for light color

(check-expect (render-light "red")    RON)
(check-expect (render-light "yellow") YON)
(check-expect (render-light "green")  GON)

#;
(define (render-light l)
  BACKGROUND)
;<template from Light>


(define (render-light l)
  (cond [(string=? l "red")   RON]
        [(string=? l "yellow") YON]
        [(string=? l "green") GON]))

```
