# 프로세스와 스레드

## 프로세스

- 프로그램
  - 하드디스크에 저장된 실행 파일. 더블클릭해서 실행하지 않으면 하드디스크에 남아 있다.
- 프로세스
  - 더블클릭으로 프로그램을 실행한 상태.
  - 하드디스크에서 메인 메모리로 코드와 데이터를 가져와 현재 실행되고 있는 상태.
  - 같은 프로그램을 두 번 실행하면, 독립적인 프로세스 두 개가 생성된다. -> 메모리 공간도 서로 다르다.

### 프로세스 상태

프로세스를 실행하기 위해서는 독자적인 메모리 공간과 CPU가 필요하다. 메모리는 가상 메모리를 사용해 해결됨. CPU는 한 번에 하나의 프로세스에만 할당할 수 있다.
여러 프로세스가 '동시에'실행하는 것처럼 보일뿐이다. 프로세스 상태는 상황에 따라 변화한다.

다섯 가지 상태

1. 생성(Create)
   프로그램을 더블 클릭 했을 때 프로세스가 생성되면서 실행가능상태가 된다.
   바로 실행되는 것이 아니라, 실행 중인 프롯스와 우선순위를 비교한 다음 우선순위가 높으면 실행하고 아니면 실행 가능 상태에서 순서를 기다린다.

2. 실행 가능(Waiting)
   운영체제는 인터럽트가 발생했을 때 실행 가능 상태의 프로세스 중 다음으로 CPU를 할당받아 실행될 프로세스를 결정한 후 실행 중인 프로세스와 교체합니다. 이때 다음으로 실행될 프로세스에 CPU를 할당하는 것을 디스패치라고 하고 실행 중이던 프로세스에서 CPU를 해제하는 것을 프리엠션이라고 한다.

3. 실행(Running)
   프로세스가 운영체제로부터 CPU를 할당받아 실행되고 있는 상태이다.

4. 보류(Blocked)
   프로세스가 입출력 작업을 하면 CPU를 해제하고 보류 상태로 변경된다. 이때 실행 가능 상태의 프로세스 중 하나가 CPU를 할당받는다. 보류 상태에 들어간 프로세스가 I/O작업이 끝나면 '실행 가능' 상태가 된다. 바로 실행 상태가 아니라, '실행 가능' 상태가 되어 기다린다.

### 스케줄링

- 우선순위 (Priority) 알고리즘
- 라운드 로빈(Round-Robin) 알고리즘
- FCFS(First Come First Served) 알고리즘
- SJF(Shortest Job First) 알고리즘

### 컨텍스트 스위칭

## 스레드

스레드란 프로세스 안의 실행 흐름의 단위로 스케줄러에 의해 CPU를 할당받을 수 있는 인스트럭션의 나열이다.

### 멀티스레딩 구현

멀티 프로세스는 서로 독립적인 메모리 공간을 가지므로 기본적으로 데이터를 공유할 수 없다. 하지만 멀티스레드로 구현하면 데이터를 쉽게 공유할 수 있다. 여러 스레드가 스택만 서로 다른 공간을 갖고 코드, 데이터, 힙은 공유하기 때문이다.

실행 흐름이 하나인 단일 스레드

```py
li = [i for i in range(1001)]
for idx in range(1001)
    li[idx] *= 2
```

똑같은 작업을 실행 흐름 네 개로 나누어 처리하기

```py
import threading

# 스레드에서 실행할 함수
def thread_main(li, i):
    #range()안의 값이
    #ㅡ레드가 담당할 리스트의 인덱스 범위를 결정
    for i in range(offset * i , offset*(i+1)):
        li[i] *= 2

num_elem = 1000
num_thread = 4

offset = num_elem // num_thread

li = [i+1 for i in range(num_elem)]

threads = []
for i in range(num_thread):
    th = threading.Thread(target = thread_main, args = (li,i))
    threads.append(th)

for th in threads:
    th.start()

for th in threads:
    th.join()

print(li)
```

## 경쟁 조건

```py
import threading

g_count = 0

def thread_main():
    global g_count
    for i in range(100000):
        g_count += 1

threads = []

for i in range(50):
    th = threading.Thread(target = thread_main)
    threads.append(th)

for th in threads:
    th.start()

for th in threads:
    th.join()

print('g_count : {:,}'.format(g_count))
```

for 문으로 스레드 50 개를 만들었으니 스레드 50 개가 동시에 g_count 에 접근하여 값을 수정하려고 시도할 것이다. 이처럼 여러 스레드가 동시에 접근, 수정, 공유 가능한 자원을 '공유 자원'이라고 한다.

스레드 여러 개가 공유 자원에 동시에 접근하는 것을 경쟁 조건(race condition)이라고 한다.

보통 경쟁 조건은 심각한 문제를 일으킨다. 스레드 안에 있는 코드가 g_count 값에 1 을 더하려고 하면 문제가 발생한다. 이처럼 공유 자원에 접근해 변경을 시도하는 코드를 임계 영역(critical section)이라고 한다.

## 상호 배제

경쟁 조건 문제를 해결하기 위해서 상호 배제를 사용한다.

스레드 하나가 공유 자원을 이용하는 동안에는 다른 스레드가 접근하지 못하게 막는 것이다. 파이썬에서는 주로 Lock 객체를 활용한다.

```py
import threading

g_count = 0

def thread_main():
    global g_count
    # Lock을 획득
    # 한 스레드가 획득하면
    # 획득을 시도한 나머지 스레드는 대기
    lock.acquire()
    for i in range(100000):
        g_count += 1
    # Lock을 반환
    # 획득했던 스레드가 반환하면
    # 대기하던 스레드 중 하나가 획득
    lock.release()

# Lock객체 생성
lock = threading.Lock()
threads = []

for i in range(50):
    th = threading.Thread(target = thread_main)
    threads.append(th)

for th in threads:
    th.start()

for th in threads:
    th.join()

print('g_count : {:,}'.format(g_count))
```
