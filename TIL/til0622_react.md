# react

## defaultProps 

- 컴포넌트 클래스의  defaultProps 속성을 통해 prop의 기본값을 지정해 줄 수 있다. 
- 기본값은 undefined prop을 대신한다. null prop을 대신하진 않는다. 

## 정적 클래스필드
- `static initial = 0;`
- instance의 속성이 되지 않고 클래스 속성이 된다.
```js
Date.now() // Date 클래스의 속성이다. 
d = new Date()
d.now // undefined

```
- class는 객체를 찍어내는 툴이다. 
- 찍어내진 객체를 인스턴스라 한다.
- 서로 다른 별개의 객체이다. 
- 그냥 클래스필드를 쓰면 찍어낸 객체의 속성이 되는 것이고
- static 정적 클래스필드를 쓰면 틀의 속성이 된다.

- prop 
  - prop은 컴포넌트의 사용법이다.
  - 로그인폼, presentation componenet의 prop, 컴포넌트의 사용법을 알기 위해서는 로그인 componenet를 보고 어떻게 사용되는지 다 읽어 봐야 한다.
  - 컴포넌트의 설명서 느낌으로 default props를 붙여주자!

```js
  static defaultProps = {
    username: '', // 아이디 입력 필드에 표시될 값
    password: '', // 암호 입력 필드에 표시될 값
    onUsernameChange: username => {}, // 아이디 입력 필드에 입력이 일어날 때 호출되는 함수
    onPasswordChange: password => {}, // 암호 입력 필드에 입력이 일어날 때 호출되는 함수
    onSubmit: () => {}, // 폼 전송이 일어날 때 호출되는 함수
  };

```
- 이런식으로 설명서를 붙여준다.
- presentaion component에서 쓰인 prop이 이러이러한 의미다! 라고 주석을 다는 것이다. 

## 고차 컴포넌트 

### 고차 컴포넌트란? 

- 컴포넌트를 받아서 컴포넌트를 반환하는 함수.
- 클래스, 함수도 모두 값이기 때문에 

```js
const identityHOC = Component => {
  return class extends React.Component {
    render(){
      return <Component/>
    }
  }
}

export default identityHOC(TodoContainer)

Component => {
  return class extends React.Component {
    render() {
      return <Component/>
    }
  }
}

```
- identityHOC 함수는 클래스를 반환한다.
- 입력받은 컴포넌트를 렌더링 해주는 클래스 컴포넌트이다. 
- 컴포넌트를 받아서 이 컴포넌트를 사용하는 새로운 컴포넌트를 반환할 수 있다.
- 그 자체가 컴포넌트는 아니다. 
- 이런 고차 컴포넌트에는 아무런 기능이 없다. 컴포넌트를 받아서 컴포넌트를 렌더링 해주는 기능뿐이다. 
- 이 기능을 활용하면, 컴포넌트의 코드 중복 문제를 해결할 수 있다. 

### Cross-Cutting Container

- 여러 페이지를 만들어야 할 때 , 여러 페이지에 동일한 기능이 들어가야 하는 상황
- 여러 기능이 있고 그 기능들을 관통하는 코드 

- 구독?
  - 멀리서 일어날 때 마다 통지받는 프로그래밍 언어.

- HOC은 입력받은 컴포넌트를 수정하지도, 상속받지도 않는다.
- 대신 원래의 컴포넌트를 다른 컴포넌트로 **감싸는 식**으로 합성한다.
- 부작용을 갖지 않는 순수 함수이다. 
- 감싸진 컴포넌트는 바깥쪽 컴포넌트로부터 새로운 prop을 포함한 모든 prop을 건네받는다.
- HOC은 데이터가 왜 사용되는지, 어떻게 사용되는지에 대해서는 관심을 두지 않는다.
- 감싸진 컴포넌트는 데이터가 어디서 왔는지는 신경쓰지 않는다. 
- HOC 안에서 원래의 컴포넌트를 변경하지 않아야 한다.
- 합성을 사용하자

**예제**
```js
export default function withAuth(WrappedComponent) {
  return class extends React.Component {
    render() {
      return localStorage.getItem('token') ? (
        <WrappedComponent {...this.props} />
      ) : (
        <Redirect to="/login" />
      );
    }
  };
}
// 

function NewPostPage({ match }) {
  return (
    <PostFormProvider id={match.params.id}>
      <NavBarContainer />
      <MainLayout>
        <h1>게시글 수정</h1>
      </MainLayout>
      <PostFormContainer />
    </PostFormProvider>
  );
}

export default withAuth(NewPostPage);
```
- 함수를 가지고 컴포넌트를 동적으로 만들어 낼 수 있다.
- withAuth를 페이지에 적용시켜라, 아예 그 페이지 전체가 보이지 않는 것이 좋으니까 대부분 페이지에 적용시키는 것이 좋다.


## 비교조정
- 리액트가 정확히 어떤 방식으로 필요한 부분만 변경하는지 알고리즘의 이름이 비교조정이다.
- 리액트는 컴포넌트의 종류가 바뀌면 객체를 다 날려버린다.
- 렌더링을 여러 번 해도 UserProvider TodoProvider는 상태를 계속 유지하고 있다.
- 렌더링이 다시 된다 하더라도, 컴포넌트의 종류가 같으면 상태가 유지된다.
- 컴포넌트의 종류를 보고 새로 렌더링 되는 컴포넌트들의 종류가 있는데, 컴포넌트의 타입이 바뀌지 않으면 상태를 유지한다.
- 클래스가 같은지를 보고 이 상태를 유지할 지 말 지 결정을 한다.
- 렌더 메소드가 호출할 때 마다 컴포넌트를 새로 만든다면, 상태가 계속 날아간다.
-  HOC로 컴포넌트를 만들 때는 한 번만 컴포넌트가 생성되도록 코드를 작성해 줘야 한다.
- 맨 바깥 스코프에서 HOC를 쓰는 것이다. 이렇게 생각해도 무방하다.


## 참고자료

[고차 컴포넌트](http://reactjs-org-ko.netlify.com/docs/higher-order-components.html)
[비교조정](http://reactjs-org-ko.netlify.com/docs/reconciliation.html)
[defaultProp](http://reactjs-org-ko.netlify.com/docs/react-component.html#defaultprops)

classnames
lint


