# Java

[생활코딩 JAVA1](https://www.opentutorials.org/course/3930)
정리함.

write once, run anywhere

## 자바 설치

- 온라인 편집기를 개발 환경으로 이용하기
  - [jdoodle](https://www.jdoodle.com/online-java-compiler/)

## 개발환경 세팅하기 - 이클립스

- 이클립스 설치
- navigator는 프로젝트 폴더를 있는 그대로 보여줌. package explorer는 개발할 때 편리하도록 화면을 보여줌.

## 자바 애플리케이션 실행

- 파일과 같은 클래스를 만들어야 함
- 파일을 실행하면 똑같은 이름의 클래스를 찾고 'main'이라는 약속된 메서드를 찾음 그리고 그 중괄호 안에 위치하는 코드를 실행하도록 약속되어 있다.

```java
public class HelloWorldApp {
	public static void main(String[] args) {
		System.out.println("Hello World!!");
	}
}
```

- 소프트웨어를 구성하는 두 가지
- source(code, language)로 만들어진 결과 application(program)
- 원인과 결과
- 자바라는 컴퓨터 프로그래밍 문법에 맞게 작성을 하여 컴퓨터에게 시키고 싶은 것을 작성하는 일
- computer <-- Run <-- java virtual machine <-- Run <-- Java Application .calss <-- 컴파일 <-- java source code .java

## 자바 기술의 응용

- 데스크탑 애플리케이션
- 자바로 사물 제어하기
- 안드로이드 앱 개발

## 데이터와 연산

- 데이터 타입별로 필요로 하는 연산 방법이 다르기 때문에 타입을 구분해야 한다.
- 내가 지금 하고 있는 이 시스템에는 어떤 데이터 타입이 존재하는지 알기
- 데이터 타입별로 어떤 연산 방법들이 존재하나 알아가는 것
- 이것들을 통해서 컴퓨터로 할 수 있는 일의 가능성이 폭발적으로 증가한다.
- 자바는 여러 가지 데이터 타입들이 존재함

## 숫자와 연산

## 문자열 다루기

- 문자와 문자열
- 한 글자는 Character
- Character들이 모여 있는 것이 String

```java
"Hello World" // String
'H' //Character
```

- 줄바꿈 하기 `\n`
- `HELLO "WORLD"`를 쓰고 싶다면
- `"HELLO \"WORLD\""` 이렇게 써줄 수 있다. 이를
  escape 한다 라고 함
- 특정 문자열을 바꾸고 싶을 때

```java
System.out.println("Hello, [[name]]".replace("[[name]]", "bohyeon"))
```

- 문자열이라는 데이터 타입을 표현할 수 있게 되면 여러가지 문자열을 처리하는 기능을 사용할 수 있음

## 변수

- 수학에서 변수는 그 값이 변할 수 있는 문자
- 어떤 데이터 타입이 들어가는 지 써줘야 함.
  - interger
  - `int`

```java
public class Variable {
    public static void main(String[] args) {
        int a = 1;
    }
}
```

- 실수, real number -2.0,..., -1.0, 0, 1.0, ...
  - 정확하지 않지만 `double` 이라고 생각하기
- 문자열 `String`
- 어떤 데이터 타입을 담을 수 있는지 명확하게 표현해 줘야 한다.
- 왜 자바와 같은 언어들은 데이터 타입을 변수에 정의를 해줘야 할까?
- 그것이 아닌 정보가 들어갈 때 자바가 컴파일이 안됨
- 들어가는 것에 성공했다면 반드시 정해진 타입임을 확신할 수 있다.
- 꺼낼 때 마다 타입을 확인하지 않아도 된다는 편리함이 있다.
- 변수를 통해서 "어떤 값이 들어가는 군" 하고 의미를 이해할 수 있다.
- 값에 이름을 부여. 좋은 이름을 써라

### CASTING

데이터 타입을 다른 데이터 타입으로 컨버팅하는 것

```java
public class Casting {
    public static void main(String[] args) {
        double a = 1.1;

//      자동으로 캐스팅
        double b = 1; // 에러가 나지 않음
        double b2 = (double) 1; // 위와 같음
        System.out.println(b); // 1.0 자동으로 1이 double 형으로 컨버팅 됨

//        int c = 1.1;  0.1을 잃어버림
//      수동으로(명시적으로) 캐스팅
        double d = 1.1;
//        add cast to int
        int e = (int) 1.1;
        System.out.println(e);
    }
}
```

- 손실이 없기 때문에 자동으로 캐스팅
- 손실이 있으니까 명시적으로 캐스팅

- java into to string casting 검색해보기

  - `String s1 = Interger.toString(1)`
  - `f.getClass()` 이 변수가 가진 값이 어떤 데이터 타입인지 알려줌

- 자바를 사용하다보면 컨버팅해야 할 때가 많음 casting 이라는 키워드로 검색해보면 됨!

## 입력과 출력

- 검색어: java popup input text swing

```java
import javax.swing.*;

public class Name {
    public static void main(String[] args) {
     String path =  JOptionPane.showInputDialog("Enter a path");
        System.out.println(path);
    }
}
```

- arguments

## 내 힘으로 컴파일

### 할 것

- 자바 확장자붙은 소스 코드를 클래스 확장자가 붙은 실행 파일로 바꾸는 것. compile
- 클래스 확장자가 붙은 파일을 실행하는 것. complie run
- 우리가 실행할 때 입력값을 주는 것. complile run input

### compile

- javac 로 컴파일 할 수 있음
- 자바가 설치된 위치 알기 `/usr/libexec/java_home`
- 어디에 있건 실행되는 이유는 path라는 환경변수 때문.
- `echo \$PATH` 로 환경변수 설정 가능.
- `javac Program.java` 로 class 파일 생성

### complie run

- `java Program`
- java는 현재 디렉토리의 Program.class 파일이 있는지 확인하고 실행시킴

### compile run input

- `java OkJavaGoInHome '202'`

## 자바 문서 보는 법

- Application Programming Interface
- 클래스
  - 서로 연관된 변수와 메서드를 묶어서 이름을 붙인 것
- 인스턴스

```java
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
public class InstanceApp {

    public static void main(String[] args) throws IOException{

        PrintWriter p1 = new PrintWriter("result1.txt");
        p1.write("Hello 1");
        p1.close();

        PrintWriter p2 = new PrintWriter("result2.txt");
        p2.write("Hello 2");
        p2.close();
    }
}
```

- 내장되어 있긴 하지만 package를 가져오는 작업을 해야 한다.
- 예외를 어떻게 처리할 지에 대해서 정의해줘야 함.
- 지금은 throws IOException 을 써주기 ?

- 만약에 인스턴스를 쓰지 않는다면 어떤 불편함이 있을까?
- 어디에 내용을 저장할 지, 무엇을 저장할지 정해야 함

```java
 `PrinterWriter.write("result1.txt", "Hello 1")
```

- 엄청나게 많은 작업을 해야 한다면 write를 할 때 마다 내가 어떤 파일을 수정할 지에 대한 상태를 매번 써줘야 한다.
- 인스턴스는 각자의 상태를 가지고 있다.
- 하나의 클래스를 사용하는 것 보다는 new를 붙여 복제해서 각각 다른 상태를 가지고 있는 인스턴스를 만들어서 사용하는 것이 더 효율적이다.
- PrinterWriter 는 생성자가 있고 Math는 생성자가 없다.
- 생성자를 이용해서 인스턴스를 만드는 것이 허용되어 있다.

## 상속

## instance

## static

- 클래스를 통해서는 클래스 변수에 접근 가능
- 인스턴스 변수는 인스턴스를 통해서 사용하도록 고안된 변수다.
- 클래스를 통해 인스턴스 메서드에 접근하는 것 불가능함
- 실제 값이 아니라 클래스의 클래스 변수를 가리키고 있을 뿐이다.
- 클래스의 변수를 바꾸면 모든 인스턴스 변수의 값이 바뀐다.
- 인스턴스에서 클래스의 변수를 바꿀 수 있는데, 그러면 클래스의 값이 바뀌고 모든 인스턴스의 값도 바뀐다.

## 생성자와 this

- 클래스는 생성자라고 하는 아주 특수한 메서드를 구현할 수 있는 기능을 제공하고. 주요한 작업은 초기화이다.
- 클래스와 똑같은 메서드를 정의하면 그것이 생성자이다.
- 클래스이름과 같은 메서드를 쓰면 인스턴스가 됨.
- 생성자 초기 작업, 초기 값을 넣어줄 때 사용한다.
- this는 것은 그 클래스가 인스턴스화되었을 때의 인스턴스를 가리키는 특수한 이름이다.
