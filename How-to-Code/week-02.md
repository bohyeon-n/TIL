# How to Design Functions

## HtDF Recipe

디자인 레시피가 하는 일은 어려운 문제를 더 쉽게 만듭니다. 크고 어려운 문제를 해결할 수 있게 해줍니다.
HtDF 레시피는 어려운 기능을 만들 것입니다. 디자인하기가 쉬우며 조금 더 쉽게 설계할 수 있습니다.

```

The HtDF recipe consists of the following steps:

Signature, purpose and stub.
Define examples, wrap each in check-expect.
Template and inventory.
Code the function body.
Test and debug until correct

```

레시피의 처음 단계는 signiture를 쓰는 것이다.
시그니처의 작업은 함수가 소비하는 데이터의 타입과 함수가 반환하는 데이터의 타입을 알려주는 것입니다.

```
;; Number -> Number
```

함수는 function을 number를 consume 하여 number를 produce한다.

purpose는 함수가 consume 하는 것에 따라 함수가 생성하는 것에 대한 succinct description(간결한 설명)을 주는 것이다.
purpose는 signiture이상의 것을 말해야 합니다.

```
;; produce 2 times the given number
```

stub은 scaffolding의 조각같은 존재입니다.
짧은 시간 동안 그곳에 놓을 것입니다. 이는 다른 부분과 함께 우리 작업을 도울 것 입니다. 그리고 나서 그것을 밖으로 또는 나중에 코스에서 언급할 것이고 우리는 실제로 stub을 삭제할 것입니다.
아주 잠시 지속되지만, 작업의 중요한 부분입니다.

stub은 함수 정의입니다. 올바른 함수 이름을 가진 경우, double의 경우 올바른 수의 매개변수를 가집니다. 이 경우 한 개.
그리고 올바른 타입의 더미 결과를 생산합니다.

```
(define (double n)) 0 ;this is the stub
```

```
;; Number -> Number
;; produce 2 times the given number
(check-expect (double 3) 6)
(check-expect (double 4.2) 8.4)

(define (double n) 0) ; this is the stub

```

stub 은 test가 실제로 동작하는지 확인할 수 있습니다.
stub은 항상 0을 produce하기 때문에 실패합니다.
test가 잘 작성되었다고 확신할 수 있습니다.

레시피는 다음 단계를 도와줍니다.
시그니처는 purpose를 도와줍니다. function 이 consume number한다고 알려주기 때문에
시그니처는 stub를 작성하는 데 도움을 줍니다. 하나의 인자를 받는다고 알려주기 때문입니다.
n이라 붙인 것도 number를 produce한다고 했기 때문에, 0으로 고른것도 같은 이유입니다. 시그니처는 check expect를 작성하는데도 도움을 줍니다.

다음 레시피는 template 혹은 inventory라 부르는 것입니다.
함수의 아웃라인을 알려주는 것이 템플릿의 역할입니다.

```
;(define (double n)
;        (...n))
(define (double n)
        (* 2 n))
```

```

;; String -> String
;; produce string with "!" added to end of supplied string
;; add "!" to the end of s

(check-expect (addString "hello") "hello!")
(check-expect (yell "hello") "hello!")
; (define (yell s) "") ;stub
;(define (yell s) ;this is template
;  (...s))

(define (yell s)
  (string-append s "!"))
```

```
;Number -> Number
;given length of one side of square, produce the area of the square
(check-expect (area 3) 3)
(check-expect (area 3.2) (* 3.2 3.2))

;(define (area s) 0) ;stub

;(define (area s) ;template
;  (...s))

(define (area s)
  (* s s))
```

```

```
