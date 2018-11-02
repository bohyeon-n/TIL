# 스레드

## 멀티스레딩 구현

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
