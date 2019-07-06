# Database 연동 기본

연동해서 서버에서 응답값을 받을 때 DB의 확인 후에 서버에서 그 결과를 JSON으로 담아서 담아주는 작업을 해보자!

## MySQL?

MySQL은 데이터베이스 오픈소스이다. 강력한 기능을 가지고 있지만 MySQL은 설정이 간단하고 사용하기 쉽다.

데이터를 저장하기 위한 표준적인 방법이 있는데 그런 방법 중 하나가 rdb라는것 (엑셀 파일 같은 것) 그런 형식의 데이터를 저장하는 것
RDB를 조작하는 것이 sql 이다. 그 중 하나가 mysql이다.

## mysql 설치하기

1. brew 업데이트 하기

```
brew update
```

2. mysql설치하기

```
brew install mysql
```

`brew list`명령어를 이용하면 설치 목록을 볼 수 있다.

3. MySQL서버 실행
   `mysql.server start`명령어로 MYSQL서버 실행하기

## mysql 클라이언트로 MySQL 서버에 연결하기

한번 MySQL 서버가 시작되고 실행되면, mysql 클라이언트를 사용하여 superuser root로 연결할 수 있다.

`mysql -u root -p`

## 데이터 베이스 생성

`CREATE DATABASE dbname;`

`SHOW DATABASES`로 database를 볼 수 있다.

## 데이터 베이스 사용하기

`USE dbname;`
MySQL 에게 이 데이터베이스를 사용하겠다고 말한다.

이제 데이터 베이스를 사용할 수 있다. 예를 들어, 테이블을 만들고 데이터 베이스에 넣을 수 있다.

### 생성하기

```
CREATE TABLE tablename (
  id INT unsigned NOT NULL auto_increment,
  name VARCHAR(150) NOT NULL
  name varchar(20) NOT NULL,
  email TEXT NOT NULL,
  birth DATE NOT NULL,
  PRIMARY KEY (id)
);
```

`SHOW TABLES`로 만들어진 테이블을 확인할 수 있다.

`DESCRIBE tablename`은 테이블의 모든 행의 정보를 보여준다.

### 테이블에 레코드 넣기

```
INSERT INTO tablename (column1 , column2, column3, ...) VALUES (value1, value2, value3, ...);
```

이렇게 하면 데이터 베이스에 값을 넣을 수 있다.

### SELECT

`WHERE`로 특정 조건에 따라 특정 열과 행을 선택할 수 있다.

```
SELECT name FROM tableanme WHERE email="bohyeon@naver.com"
```

이메일 값이 'bohyeon@naver.com'인 name 을 선택하라

## node에 mysql 연동 설정하기

- mysql 설치하기

```
npm install mysql --save
```

```js
const mysql = require('mysql')
```

- 접속하기

```js
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'dbname'
})

connection.connect()
```

node 모듈을 mysql 모듈을 어떻게 app.js에서 그 설정 정보를 얻느냐 까지 했음

## MySQL 연동 구현

database에 쿼리를 날려서 확인하는 클라이언트에 응답을 주는 것을 해보자.

```js
app.post('/ajax_send_email', function(req, res) {
  const email = req.body.email
  const responseData = {}
  const query = connection.query(
    `select name from tablename where email="${email}"`,
    function(err, rows) {
      if (err) throw err
      if (rows[0]) {
        responseData.result = 'ok'
        responseData.name = rows[0].name
      } else {
        responseData.result = 'none'
        responseData.name = ''
      }
      // 콜백 안에서 응답 값을 주어야 한다!
      res.json(responseData)
    }
  )
})
```

## 참고 자료

[Getting Started with MySQL](https://dev.mysql.com/doc/mysql-getting-started/en/)
