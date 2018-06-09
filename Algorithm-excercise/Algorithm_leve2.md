# 가장 긴 팰린드롬 

앞뒤를 뒤집어도 똑같은 문자열을 palindrome이라고 합니다.
longest_palindrom함수는 문자열 s를 매개변수로 입력받습니다.
s의 부분문자열중 가장 긴 palindrom의 길이를 리턴하는 함수를 완성하세요.
예를들어 s가 토마토맛토마토이면 7을 리턴하고 토마토맛있어이면 3을 리턴합니다.

```js 
function longest_palindrom(s){
  if(s === s.split('').reverse().join('')){
  	return s.length;
  }else{
   let a = longest_palindrom(s.slice(0,s.length-1));
   let b = longest_palindrom(s.slice(1,s.length));
    return Math.max(a,b)
  }
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( longest_palindrom("토마토맛토마토") )
console.log( longest_palindrom("토마토맛있어") )
```
# 이상한 문자 만들기 

toWeirdCase함수는 문자열 s를 매개변수로 입력받습니다.
문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하세요.
예를 들어 s가 try hello world라면 첫 번째 단어는 TrY, 두 번째 단어는 HeLlO, 세 번째 단어는 WoRlD로 바꿔 TrY HeLlO WoRlD를 리턴하면 됩니다.

주의 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단합니다.

```js 
function toWeirdCase(s){
  let result = '';
  let n = 0;
  for(let i = 0; i <s.length; i++){
    if(s[i] === ' '){
      n = 0;
      result += ' '
    	continue;
    }
	 if(n%2 === 0) {
     result += s[i].toUpperCase();
   }else {
     result += s[i].toLowerCase();
   }
    n++;
  }
  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + toWeirdCase("try hello world"));
```
# 콜라츠 추측 

1937년 Collatz란 사람에 의해 제기된 이 추측은, 입력된 수가 짝수라면 2로 나누고, 홀수라면 3을 곱하고 1을 더한 다음, 결과로 나온 수에 같은 작업을 1이 될 때까지 반복할 경우 모든 수가 1이 된다는 추측입니다. 예를 들어, 입력된 수가 6이라면 6→3→10→5→16→8→4→2→1 이 되어 총 8번 만에 1이 됩니다. collatz 함수를 만들어 입력된 수가 몇 번 만에 1이 되는지 반환해 주세요. 단, 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.

1. 반복문 
```js
function collatz(num) {
	let answer = 0;
  for(let i = 0; i < 500; ++i) {
    if(num%2 === 0) {
      num /= 2
  	}else {
    num =	num*3 + 1 
 		 }
    if(num === 1) { 
      answer++
    	break;
    }
    answer ++
  }
 return	answer !== 500 ? answer : -1 ;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( collatz(6) );
```
2. 재귀함수 

```js
function collatz( num, i = 1) {
	num % 2 === 0 ? num /= 2 : num = (num * 3) + 1 
 if( num === 1) {
   return i 
} else if (i === 500){
 return -1 
} else {
  return collatz(num, ++i)
 }
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( collatz(6) );
```

# 2016년

2016년 1월 1일은 금요일입니다. 2016년 A월 B일은 무슨 요일일까요? 두 수 A,B를 입력받아 A월 B일이 무슨 요일인지 출력하는 getDayName 함수를 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각

SUN,MON,TUE,WED,THU,FRI,SAT

를 출력해주면 됩니다. 예를 들어 A=5, B=24가 입력된다면 5월 24일은 화요일이므로 TUE를 반환하면 됩니다.

```js
function getDayName(a,b){
  let sum = 0;
  let dayName = ['FRI', 'SAT', 'SUN', 'MON', 'TUE','WED', 'THU']
  let days = [31,29,31,30,31,30,31,31,30,31,30,31]
  if( a > 1) {
  for(let i =0 ; i < a -1; i++) {
  	sum += days[i];
  }
    sum += b
  } else {
    sum = b;
  }
  return sum % 7 === 0 ? 'THU' : dayName[sum % 7 -1] 
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(getDayName(5,24))
```

# 괄호 확인하기 

is_pair함수는 문자열 s를 매개변수로 입력받습니다.
s에 괄호가 알맞게 짝지어져 있으면 True를 아니면 False를 리턴하는 함수를 완성하세요.
예를들어 s가 (hello)()면 True이고, )(이면 False입니다.
s가 빈 문자열("")인 경우는 없습니다.

```js
function is_pair(s){
s = s.split("")
let brackets = [];
while(s.length !== 0) {
  let bracket = s.pop()
  if(bracket === ')') {
    brackets.push(bracket)
  } else if(bracket === '(') {
    bracket = brackets.pop();
    if(bracket === undefined){
      return false;
    }
  }
}
return (brackets.length === 0)
 }
console.log( is_pair("(hello)()") )
console.log( is_pair(")(") )
```
# 하샤드 수 

양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.

Harshad함수는 양의 정수 n을 매개변수로 입력받습니다. 이 n이 하샤드수인지 아닌지 판단하는 함수를 완성하세요.
예를들어 n이 10, 12, 18이면 True를 리턴 11, 13이면 False를 리턴하면 됩니다.

```js
function Harshad(n){
  let number = n.toString().split('');
  let sum = number.reduce((acc, item) => {
      return acc + parseInt(item)
  }, 0)
  return n % sum === 0;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(Harshad(18))
```
# 두 정수 사이의 합
 
adder함수는 정수 a, b를 매개변수로 입력받습니다.
두 수와 두 수 사이에 있는 모든 정수를 더해서 리턴하도록 함수를 완성하세요. a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
예를들어 a가 3, b가 5이면 12를 리턴하면 됩니다.

a, b는 음수나 0, 양수일 수 있으며 둘의 대소 관계도 정해져 있지 않습니다.

```js
function adder(a,b) {
    const length = Math.abs(a - b) + 1
    if(length % 2 === 0) {
        return (length / 2) * (a + b)
    } else {
        return (((length -1) / 2) * (a + b)) + (a + b)/2  
    }
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( adder(3, 5) )
```

```js
function adder(a,b) {
    const length = Math.abs(a - b) + 1
    return (a + b) * length/2 
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( adder(3, 5) )
```
이렇게 하는 것과 같다.
length가 홀수라면 length/2를 했을 때 n.5 가 나올 것이고
(a + b) * 0.5 와
홀수에서 (a + b) /2 와 같다.

```js
function adder(a,b) {
    return (a + b) * (Math.abs(a - b) + 1) / 2
}
```
이렇게 줄여쓸 수 있다. 

# 행렬의 곱셈 

행렬의 곱셈은, 곱하려는 두 행렬의 어떤 행과 열을 기준으로, 좌측의 행렬은 해당되는 행, 우측의 행렬은 해당되는 열을 순서대로 곱한 값을 더한 값이 들어갑니다. 행렬을 곱하기 위해선 좌측 행렬의 열의 개수와 우측 행렬의 행의 개수가 같아야 합니다. 곱할 수 있는 두 행렬 A,B가 주어질 때, 행렬을 곱한 값을 출력하는 productMatrix 함수를 완성해 보세요.

```js
function productMatrix(a, b) {
    var answer = Array();
    let sum = 0;
    if (a[0].length === b.length) {
        a.forEach((item, index) => {
            answer.push([])
            for (let i = 0; i < b[0].length; i++) {
                for (let j = 0; j < b.length; j++) {
                    sum += item[j] * b[j][i]
                }
                answer[index].push(sum);
                sum = 0;
            }
        })
    }
    return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
var a = [[1, 2], [4, 5]];
var b = [[1, 2], [4, 5]];
console.log("결과 : " + productMatrix(a, b));
console.log("결과 : " + productMatrix(a, b));
```

# 최솟값 만들기 
자연수로 이루어진 길이가 같은 수열 A,B가 있습니다. 최솟값 만들기는 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱한 값을 누적하여 더합니다. 이러한 과정을 수열의 길이만큼 반복하여 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표입니다.

예를 들어 A = [1, 2] , B = [3, 4] 라면

A에서 1, B에서 4를 뽑아 곱하여 더합니다.
A에서 2, B에서 3을 뽑아 곱하여 더합니다.
수열의 길이만큼 반복하여 최솟값 10을 얻을 수 있으며, 이 10이 최솟값이 됩니다.
수열 A,B가 주어질 때, 최솟값을 반환해주는 getMinSum 함수를 완성하세요.



1. 배열 중 하나는 수가 작은 순서대로 나열한다.
2. 다른 하나는 수가 큰 순서대로 나열한다.
3. 두 개의 배열을 차례대로 곱해서 더한다.
```js
function getMinSum(A,B){
  const a = A.sort((a,b) => a - b)
  const b = B.sort((a,b) => b - a)
  return a.reduce((acc, item, index)=> acc + item * b[index], 0)
}

//아래 코드는 테스트를 위한 출력 코드 입니다.
var tA = [1,2],
	tB = [3,4];

console.log(getMinSum(tA,tB));
```
