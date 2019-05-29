# Compound Data

## define-strunct

### define-struct

많은 경우, 다른 종류의 정보를 나타내야 할 때가 있습니다.
예를 들어, 노동자의 감독관, 이름, 연봉을 표현하고 싶을 수 있습니다.
두 가지 이상의 정보가 있습니다. 이 정보들은 함께 있습니다.

이를 위해 복합 데이터가 필요합니다(compound data)
compound value를 생성하기 위한 define-struct 기본 메커니즘을 배웁니다.
복합 데이터를 위해 디자인 데이터 리세피 업데이트 방법을 배웁니다.

```
(define-struct pos (x y))
(define-struct 'struct name' 'field names')
```

define-struct 는 정의이다. 실행하면 값을 산출하지 않는다.

이 경우에는 네 개의 정의가 선언된다.

첫번쨰는 contstuctor라고 불리는 ,그리고 이것은 다음과 같이 동작합니다.

```
(make-pos 3 6)
```

그리고 이것은 position structure을 산출합니다.
x필드값은 3이고 y필드 값은 6입니다.

constructor의 인자는 순서에 의해 결정됩니다. 처음이 x그 다음이 y. 전에는 이것을 'boa constructors'라고 불렀습니다.

```
(define P1 (make-pos 3 6))
(define P2 (make-pos 2 8))
```

DrRacket에서 P1을 실행하면 `(make-pos 3 6)` 을 보여줍니다.

두 개의 selector

```
;;selector
(pos-x P1)   ;get 3
(post-y P2)  ;get 8
```

왜냐하면 P1은 make-pos 3 6 이고 그것이 x 필드는 3입니다. 그래서 P1의 pos-x는 3, P2의 pos-y는 8입니다.

make-pos 는 생성자(constructor)고 pos-x와 pos-y는 선택자(selector)다.

```
(pos? P1)      ;true
(pos? "HELLO") ;false
```

make-pos에 의해 생성되지 않는 값은 false를 산출합니다.

define-struct를 형성하는 방법은(define-struct some name)

A structure definition defines:

constructor: name-<structure-name>
selector(s): <structure-name> - <field-name>
predicate: <structure-name>?

(define-struct pos(x y)) defines:

constructor: make-pos
selecctors: pos-x pos-y
predicate: pos?

## Compound Data Definitions

### Compound Data Definitions

2 or more values that naturally belong together

[design recipes](https://courses.edx.org/courses/course-v1:UBCx+HtC1x+2T2017/77860a93562d40bda45e452ea064998b/)

consist of two or more items that naturally belong together : Compound data

- A data definition consists of four or five parts:

1. A possivle structure definition(not until week 3)
2. A type comment that defines a new type name and describes how to form data
3. one or more example of the data
4. A template for a 1 argument function operating on data of this type.

```
(define-struct player (fn ln))
;; Player is (make-player String String )
;; interp. (make-player fn ln) is a hockey player with
;;          fn is first name
;;          ln is the last name
```

데이터 조각의 해석 방법을 말해 줄 수 있어야 합니다.

```
(define P1 (make-player "Bobby" "Orr"))
(define P2 (make-player "Bohyeon" "Koo"))
```

```
(define (fn-for-player p)
(... (player-fn p) (player-ln p)))
;; Template rule used:
;; - Compound 2 fields
```

## Practice Problems

### Recommended Problems

#### Compound P1 - Movie

````

;; movie-starter.rkt

;; =================
;; Data definitions:

;
; PROBLEM A:
;
; Design a data definition to represent a movie, including
; title, budget, and year released.
;
; To help you to create some examples, find some interesting movie facts below:
; "Titanic" - budget: 200000000 released: 1997
; "Avatar" - budget: 237000000 released: 2009
; "The Avengers" - budget: 220000000 released: 2012
;
; However, feel free to resarch more on your own!
;

(define-struct movie (title budget year))
;; movie is (make-movie String Natural Natural)
;; interp. (make-move title budget year) is a movie information with
;;                   title is movie name
;;                   budget is budget of movie
;;                   year is year of movie released

(define M1 (make-movie "Titanic" 2000000000 1997))
(define M2 (make-movie "Avatar" 23700000 2009))
(define M3 (make-movie "The Avengers" 22000000 2012))

(define (fn-for-movie m)
  (... (movie-title m)   ;String
       (movie-budget m)  ;Natural
       (movie-year m)))  ;Natural

;; Template rule used:
;; - Compound 2 fileds
;; =================
;; Functions:

;
; PROBLEM B:
;
; You have a list of movies you want to watch, but you like to watch your
; rentals in chronological order. Design a function that consumes two movies
; and produces the title of the most recently released movie.
;
; Note that the rule for templating a function that consumes two compound data
; parameters is for the template to include all the selectors for both
; parameters.
;

; Movie Movie -> String
;; determine which of two given moview was released most recently
(check-expect (chronological-movie M1 M2) "Avatar")
(check-expect (chronological-movie M3 M2) "The Avengers")

;(define (chronological-movie m1 m2) "") ; stub

#;
(define (chronological-movie m1 m2)
  (... (movie-titme m1)
       (movie-budget m1)
       (movie-year m1)
       (movie-title m2)
       (movie-budget m2)
       (movie-year m2)))

(define (chronological-movie m1 m2)
  (if(> (movie-year m1) (movie-year m2))
     (movie-title m1)
     (movie-title m2)))
     ```
````

#### Compound P3 - Student

```

;; student-starter.rkt

;; =================
;; Data definitions:

;
; PROBLEM A:
;
; Design a data definition to help a teacher organize their next field trip.
; On the trip, lunch must be provided for all students. For each student, track
; their name, their grade (from 1 to 12), and whether or not they have allergies.
;

(define-struct student (name grade allergies?))
;student is (make-student String Natural[1, 12] Boolean)
;interp. (make-student name grade allergies) is student information with
;                      name is student name
;                      grade is student grade
;                      allergies is whether or not student have allergies

(define S1 (make-student "Bohyeon" 12 false))
(define S2 (make-student "Bob" 3 true))
(define S3 (make-student "Ann" 5 false))

(define (fn-student-for s)
  (...(student-name s)        ;String
      (student-grade s)       ;Natural
      (student-allergies? s))) ;Boolean

;; =================
;; Functions:

;
; PROBLEM B:
;
; To plan for the field trip, if students are in grade 6 or below, the teacher
; is responsible for keeping track of their allergies. If a student has allergies,
; and is in a qualifying grade, their name should be added to a special list.
; Design a function to produce true if a student name should be added to this list.
;

;Student -> Boolean
;determine whether to put the student's name on the special list

(check-expect (add-specialist? S1) false)
(check-expect (add-specialist? S2) true)
(check-expect (add-specialist? S3) false)

;(define (add-specialist? s) true) ;stub
;Template from Student
#;
(define (add-specialist s)
  (... (student-name)
       (student-grade)
       (student-allergies)))

(define (add-specialist? s)
  (and (<= (student-grade s) 6)
       (student-allergies? s)))
```

## HtDW With Compound Data

### HtDW With Compound Data pt. 1

고양이는 오직 하나의 포지션만을 가지고 있었지만 소는 두개의 변하는 속성을 가지고 있다. position, direction -> 이것이 compound data가 필요한 이유이다.

가장자리로 갔을 때 방향을 바꾸고 다른 길로 백한다.

어떤 월드 프로그램에서, 첫 번째 단계는 분석하는 것 입니다.

Constant

- width
- height
- ctr-y
- mts
- cow images

Changing

- x coordinate of cow
- x velocity of cow

big-bang options

- on-tick
- to-draw
- on-key

```
;; Constants:
(define WIDTH 400)
(deifne HEIGHT 200)

(deinfe CTR-Y (/ HEIGHT 2))

(define RCOW RCOW-IMAGE)
(deifne LCOW LCOW-IMAGE)

(define MTS (empty-scene WIDTH HIEGHT))

;; Dtate definition;
(define-struct cow (x dx))
;; Cow is (make-cow Natural[0, WIDTH] Interger)
;; iterp. (make-cow x dx) is a cow with x coordinate x and velocity dx
;;          the x is the center of the cow
;;          x is in screen coordinates (pixels)
;;          dx is in pixels per tick
(define C1 (make-cow 10 3)) ; at 10, moving left -> right
(deifne C2 (make-cow 20 -4)) ; at 20, moving left <- right
#;
(define (fn-for-cow)
  (...(cow-x c)    ;Natural[0, WIDTH]
      (cow-dx c))) ;Interger

;; Template rules used:
;; - compound: 2 fileds

;;Functions

;; Cow -> Cow
;; called to make the cow go for a walk, start with (main (make-cow))
;; no tests for main function
(define (main c)
  (big-bang c
            (on-tick next-cow)    ;Cow -> Cow
            (on-draw render-cow)  ;Cow -> Image
            (on-key handle-key))) ;Cow keyEvent -> Cow

;; Cow -> Cow
;; place appropricate cow image on MTS at (cow-x c) and CTR-Y
;;!!!
(define (render-cow) MTS)  ;stub

;; Cow KeyEvent -> Cow
;; reverse direction of cow travel when space bar is pressed
;;!!!
(define (handle-key c ke) c) ;stub

```

```
(require 2htdp/image)
(require 2htdp/universe)

;;   cowabunga-starter.rkt  problem statement
;;   cowabunga-v0.rkt       has constants
;;   cowabunga-v1.rkt       has data definition
;; > cowabunga-v2.rkt       has main function, wish list entries
;;   cowabunga-v3.rkt       has next-cow
;;   cowabunga-v4.rkt       has render-cow
;;   cowabunga-v5.rkt       has handle-key

;; A cow, meandering back and forth across the screen.




;; =================
;; Constants:

(define WIDTH  400)
(define HEIGHT 200)


(define CTR-Y (/ HEIGHT 2))


(define RCOW .)
(define LCOW .)


(define MTS (empty-scene WIDTH HEIGHT))




;; =================
;; Data definitions:

(define-struct cow (x dx))
;; Cow is (make-cow Natural[0, WIDTH] Integer)
;; interp. (make-cow x dx) is a cow with x coordinate x and x velocity dx
;;         the x is the center of the cow
;;         x  is in screen coordinates (pixels)
;;         dx is in pixels per tick
;;
(define C1 (make-cow 10  3)) ; at 10, moving left -> right
(define C2 (make-cow 20 -4)) ; at 20, moving left <- right
#;
(define (fn-for-cow c)
  (... (cow-x c)    ;Natural[0, WIDTH]
       (cow-dx c))) ;Integer

;; Template rules used:
;;  - compound: 2 fields





;; =================
;; Functions:

;; Cow -> Cow
;; called to make the cow go for a walk; start with (main (make-cow 0 3))
;; no tests for main function
(define (main c)
  (big-bang c
            (on-tick next-cow)       ; Cow -> Cow
            (to-draw render-cow)     ; Cow -> Image
            (on-key  handle-key)))   ; Cow KeyEvent -> Cow



;; Cow -> Cow
;; increase cow x by dx; bounce off edges

(check-expect (next-cow (make-cow 20 3)) (make-cow (+ 20 3) 3))   ;middle
(check-expect (next-cow (make-cow 20 -3)) (make-cow (- 20 3) -3))

(check-expect (next-cow (make-cow (- WIDTH 3) 3)) (make-cow WIDTH 3)) ;reaches edge
(check-expect (next-cow (make-cow 3           -3)) (make-cow 0     -3))

(check-expect (next-cow (make-cow (- WIDTH 2)  3)) (make-cow WIDTH -3)) ; tries to pass edge
(check-expect (next-cow (make-cow 2           -3)) (make-cow 0      3))

;(define (next-cow c) c)      ;stub

;took template from cow
(define (next-cow c)
  (cond[(> (+ (cow-x c) (cow-dx c)) WIDTH)(make-cow WIDTH (- (cow-dx c)))]
       [(< (+ (cow-x c) (cow-dx c)) 0)    (make-cow 0     (-   (cow-dx c)))]
       [else
        (make-cow (+ (cow-x c)(cow-dx c))
              (cow-dx c))]))

;; Cow -> Image
;; place appropriate cow image on MTS at (cow-x c) and CTR-Y
;; !!!
(define (render-cow c) MTS)  ;stub


;; Cow KeyEvent-> Cow
;; reverse direction of cow travel when space bar is pressed
;; !!!
(define (handle-key c ke) c) ;stub


```
