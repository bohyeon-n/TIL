## 파이썬 함수

### 함수 정의하기

함수를 정의할 때는 `def`문을 사용한다.

```py
def say_hi(name):
    return "{} hi!".format(name)
print(say_hi('hi'))
```

### docstring

함수를 정의할 때 간단한 설명을 남겨둘 수 있다.

```py
def function():
    """함수 설명 """
    함수 내용
```

[docstring conventions](https://www.python.org/dev/peps/pep-0257/)

[docstring stack overflow page](https://stackoverflow.com/questions/3898572/what-is-the-standard-python-docstring-format)

### 파이썬 변수 스코프

```py
# error
def some_function():
    word = "hello"

print(word)
```

함수 안에서 생성된 변수는 함수안에서만 사용할 수 있습니다.
함수 밖에서 변수에 접근할 수 없습니다.

```py
a = 1
def scope():
    a = 5
    scope2()

def scope2():
    print(a)

scope()

#1을 출력합니다.
```

파이썬은 선언된 시점에서 유효범위를 갖는 정적스코프입니다.
실행되는 시점인 scope() 함수의 a 변수인 5 에 접근하는 것이 아닌,
선언되었을 때의 시점, 전역변수에 있는 변수 a 에 접근하게 됩니다.

### lambda expressions

익명함수로, 함수를 인수 또는 반환값으로 취급할 떄 사용할 수 있습니다.

```py
cities = ["New York City", "Los Angeles", "Chicago", "Mountain View", "Denver", "Boston"]
# 1 함수를 정의하고 filter의 인수로 넘겨준다.
def is_short(name):
    return len(name) < 10
short_cities = list(filter(is_short, cities))

# 2 익명함수를 filter의 인수로 바로 넘겨준다.
short_cities = list(filter(lambda x: len(x) < 10 , cities))
print(short_cities)
```

- filter(함수, iterable)
- 두 번째 인수인 반복가능한 자료형 요소들을 첫 번째 인자 함수에 하나씩 입력하여 리턴값이 참인 것만 반환한다.

### iterators and generators

[이터레이터와 제너레이터](https://mingrammer.com/translation-iterators-vs-generators/)

### 더 알아보기

[Jack Diederich - HOWTO Write a Function - PyCon 2018](https://www.youtube.com/watch?v=rrBJVMyD-Gs&feature=youtu.be)
