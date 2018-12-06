https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5

# node.js?

node.js 는 자바스크립트 런타임 환경이다.
node 런타임은 자바스크립트로 쓰여진 프로그램을 실행시키는데 필요한 모든 것을 포함한다.

브라우저 자브스크립트와 node.js 는 실행된다 v8 자바스크립트 런타임 엔진에서
엔진은 당신의 자바스크립트 코드를 빠른 machine 코드로 변환해준다.
macchine 코드는 낮은 레벨의 코드(변환할 필요 없이 실행되는)

Node.js® is a JavaScript runtime built on Chrome’s V8 JavaScript engine.

Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

Node.js’ package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

I/O 는 input/output 으로 이것은 어떤 이든 될 수 있다. reading/writing local files to making an http request to an api

i/o 는 시간이 걸린다. 그렇기 때문에 다른 함수들을 막는다. blocking

자바스크립트는 싱글 스레드 런타임을 가지고 있다. 이것은 결국 한 번에 하나의 싱글 콜 스택만을 가지고 있다는 말이다.
하나의 프로그램은 동시에 하나의 코드만 실행할 숭 ㅣㅆ다.

블로킹 / 블로킹 현상
그저 느리게 동작하는 코드
느린 동작이 스택에 남아있는 것을 보통 블로킹이라고 한다.

프로그래밍 언어에서 싱글 스레드라고 하는 것은 여러개의 스레드를 사용하지 않는 것이다.
네트워크 요청을 하고는 마냥 끝날때까지 기다린다.
문제는 웹브라우저에서 코드가 실행되고 있기 때문이다.

## npm

npm 은 community 문제를 풀기 위한, 라이브러리

## require

Require does three things:

It loads modules that come bundled with Node.js like file system and HTTP from the Node.js API .
It loads third party libraries like Express and Mongoose that you install from npm.
It lets you require your own files and modularize the project.
Require is a function, and it accepts a parameter “path” and returns module.exports.

## node modules

모듈을 여러 앱에서 사용할 수 있다.
node.js 모듈을 빌트인 하고 , 후에 설치 없이 사용할 수 있게 해준다.

## turbo-charges javascript by leveraging c++

JavaScript -> V8(C++) -> Machine Code

v8

npm init
package.json file 생성

## node.js

javascript 를 os 위에서 구동할 수 있게 하는 것.
