# 프로그래밍 언어

## 컴파일러 언어 와 컴파일러 언어

컴파일러 언어와 인터프리터 언어는 컴파일 타임이 있느냐, 없느냐, 즉 소스코드를 분석하는 시점과 입력 데이터를 받는 시점이 언제이냐에 따라 나뉜다.

### C 언어: 컴파일러 언어 분석

C 언어는 소스 코드를 컴파일하여 목적코드인 기계어로 된 인스트럭션을 만들어 낸다. 링커는 필요한 라이브러리를 가져오고 여러 개의 목적 파일을 함께 묶어 실행 파일을 생성한다. 이제 프로그램을 실행하고 데이터를 입력하면 결과 데이터가 출력된다. 중요한 점은 소스 코드를 분석하는 컴파일 타임과 실제 데이터를 입력받아 결과를 출력하는 런타임이 분리되어 있다는 점이다.

### 파이썬: 인터프리터 언어

파이썬도 소스코드가 있으므로 이를 분석하는 컴파일러가 있다. 목적 코드로 기계어를 생성하는 C 언어와 달리 파이썬은 바이트 코드를 생성한다. 바이트 코드가 생성된 후에는 PVM 에서 바이트 코드를 하나씩 해석하여 프로그램을 실행한다. 이러한 이유로 PVM 을 파이썬 인터프리터라고 부르기도 한다. 중요한 점은 소스 코드를 분석하는 컴파일 타임이 따로 없고 실행과 동시에 분석을 시작한다는 점이다. 즉 소스 코드와 입력 데이터가 같은 시점에 삽입된다. 컴파일러 언어와 비교했을 때 가장 큰 차이이다.

### 파이썬: 소스 코드부터 실행까지

#### 컴파일러

일반적인 컴파일러는 렉서와 파서로 구성된다. 소스 코드가 렉서와 파서에 의해 어떻게 변하는지 간략히 알아보자.

소스코드도 문자이다. 문자들이 렉서를 거쳐 토큰으로 변경된다. 토큰은 파서가 분석하여 분석 트리를 구성한다.

**토큰?**

- 작성한 코드를 언어의 문법에 맞게 토큰으로 쪼갤 수 있다. 파서틑 토큰을 분석하여 분석 트리를 구성한다. 컴파일러마다 분석 트리를 생성하기도 하고 생성하지 않기도 한다. 분석 트리가 만들어지만 이를 이용해 목적코드(기계어, 바이트 코드)를 생성한다. 이를 코드 생성이라고 한다.

```py
# test.py
def func(a,b):
    return a + b

a = 10
b = 20

c = func(a,b)
print(c)
```

tokenize 모듈을 이용해 소스 코드를 여러 개의 토큰으로 쪼갠 다음 토큰을 출력하였다.

```py
# main.py

from tokenize import tokenize
from io import BytesIO

s = open('test.py').read()
g = tokenize(BytesIO(s.encode('utf-8')).readline)
for token in g:
    print(token)
```

실행 결과

타임, 실제 문자열, 시작 위치와 끝등의 정보를 알 수 있다.

```
TokenInfo(type=59 (ENCODING), string='utf-8', start=(0, 0), end=(0, 0), line='')
TokenInfo(type=1 (NAME), string='def', start=(1, 0), end=(1, 3), line='def func(a,b):\n')
TokenInfo(type=1 (NAME), string='func', start=(1, 4), end=(1, 8), line='def func(a,b):\n')
(중략)
```

## 추상 구문 트리

추상 구문 트리 (Abstract Sync Tree, AST)란 소스 코드의 구조를 나타내는 자료구조이다. 추상 구문 트리를 바탕으로 심벌 테이블을 만들고 바이트 코드를 생성할 수 있다.

```py
from tokenize import tokenize
from io import BytesIO
import ast
s = open('test.py').read()
g = tokenize(BytesIO(s.encode('utf-8')).readline)

node = ast.parse(s,'test.py', 'exec')
g = ast.walk(node)
next(g)
```

wlak() 함수를 사용하면 트리의 모든 노드를 순회할 수 있는 발생자 객체를 얻을 수 있다.

발생자는 함수를 시행 도중에 멈췄다가 원하는 시점에 다시 시작할 수 있도록 하는 함수이다. 여기서는 walk()함수를 통해 만들어진 발생자 객체가 next()함수를 호출할 때마다 노드를 하나씩 넘겨준다는 점만 기억하면 된다.

## 심벌 테이블

심벌 테이블은 변수나 함수의 이름과 그 속성에 대해 기술해 놓은 테이블이다.

```py
import symtable
sym = symtable.symtable(s,'test.py', 'exec')
sym.get_name()
sym.get_symbols()
```

```
top # 이 테이블이 글로벌 테이블이라는 의미
[<symbol 'func'>, <symbol 'a'>, <symbol 'b'>, <symbol 'c'>, <symbol 'print'>]
```

```py
func_sym = sym.get_children()[0]
func_sym.get_name() # func
func_sym.get_symbols() # [<symbol 'a'>, <symbol 'b'>] 인자를 볼 수 있다.
```
