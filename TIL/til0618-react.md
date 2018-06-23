# react

## 제어되지 않는 컴포넌트

### Form 처리 3 가지 방법

1.  제어되는 컴포넌트(제어하고 싶을 때 사용)
2.  ref
3.  ref 를 안쓰고 onSubmit 핸들러로 처리하는 방법

- 간단하다.
- 상태가 분산되어 저장되기 때문에 컨트롤하기 힘들다.
- DOM 에 내장기능을 사용하므로, 상태관리 코드를 짜지 않아도 된다.
  [제어되지 않는 컴포넌트 리액트 문서](http://reactjs-org-ko.netlify.com/docs/uncontrolled-components.html)
  **어떤 스타일로 해도 상관이 없다.**

### 기본값 지정하기

- value attribute 지정되어 있으면, 제어되는 컴포넌트가 된다.
- 제어되지 않는 컴포넌트이면서 기본값을 지정하고 싶다면
  - `defaultValue`
  - `defaultChecked`

## props

다른 내용을 포함하는 컴포넌트

```js
import React from "react";

export default class Box extends React.Component {
  render() {
    return <div className="box">{this.props.children}</div>;
  }
}

<Box>
  <div>React</div>
</Box>;
```

```js
import React from "react";

export default class Box extends React.Component {
  render() {
    const value = {
      a: 1,
      b: 2
    };
    return <div className="box">{this.props.children(value)}</div>;
  }
}

<Box>
  {value => (
    <div>
      <div>{value.a}</div>
      <div>{value.b}</div>
    </div>
  )}
</Box>;
```

prop 은 데이터를 받는 통로이고, 데이터의 제한이 없다.

## React.Component

### 컴포넌트 사이클

#### 마운트 관련

컴포넌트 인스턴스가 만들어져서 DOM 에 삽입되는 과정

1.  `constructor()`
2.  `static getDerivedStateFromProps()`
3.  `render()`

- 클래스 컴포넌트에서 유일하게 요구되는 메소드, 순수함수여야 한다, 브라우저와 상호작용해서는 안된다.

4.  `componentDidMount()`

- 트리에 삽입된 직후에 호출

#### 갱신 관련

props 나 state 가 변경되면 갱신이 일어난다.
컴포넌트가 다시 렌더링되는 과정

1.  `static getDerivedStateFromProps()`
2.  `shouldComponentUpdate()`
3.  `render()`
4.  `getSnapshotBeforeUpdate()`
5.  `componentDidUpdate()`

- 갱신이 일어난 직후에 호출, 최초 렌더링에는 호출되지 않음
- 안에서 setStat()를 즉시호출하는 경우, 반드시 조건문 안에 들어가야 한다. 그렇지 않으면 무한루프에 빠지게 된다. (setState 할 때 갱신이 일어나므로, 다시 `componentDidMount` 메소드가 실행된다.)
- `shouldComponentUpdate()` 메소드가 false 를 반환하는 경우 componentDidUpdate()가 호출되지 않는다.

#### 언마운트 관련

DOM 으로부터 컴포넌트가 제거될 때 호출된다.

- `componentWillUnmount()`
  - 컴포넌트가 언마운트되기 직전에 호출한다. 여러 뒷처리작업(타이머 해제, 네트워크 요청 취소, 데이터 구독 취소 등 주로 componentDidMount()에서 설정된다.)

#### 에러 핸들링

자식 컴포넌트의 렌더링, 라이프사이클 메소드, 생성자에서 에러가 발생했을 때 호출된다.

- `componentDidCatch()`

[React.Component 리액트 문서](http://reactjs-org-ko.netlify.com/docs/react-component.html)

## presentation and container component

[Rresentation and Container Components 번역본](https://medium.com/@seungha_kim_IT/presentational-and-container-components-%EB%B2%88%EC%97%AD-1b1fb2e36afb)

### presentation component

- 간접적으로 연동시킬 수 있는 빈칸
- prsentation component 는 어떻게 연동되는지에 따라(어떤함수, 데이터를 받는지에 따라) 다목적으로 사용할 수 있다.
- 이런 개념을 Interface(어떤 프로그램 집합의 사용법)라고 한다.
- 디자이너와 협업할 때 데모페이지에서, 뒤쪽이랑 어떻게 연결될지를 뺴놓고 넣어주면 작업하기가 쉬워진다.
- component 폴더에는 외부세계와 연결되는 코딩을 하지 않는 것으로 한다. (일반적으로?)

작업하는 순서

1.  presentation component 를 만든다. 어떻게 쓰일지, 어떤 함수, 데이터를 받을지 interface 에 집중한다. 스토리북을 만든다.

- 어떤 UI 가 필요한지
- presentation component, story 만들기(interface 에 어떤 prop 을 받을지)

2.  presentation component 를 감싸서 container component 를 만든다

이런 순서로 작업하면 유지보수성이 높은 설계를 할 수 있다.

### container component

- 외부세계(server, localstorage)와 조금이라도 연결된 component
- 트리 상단에 위치하는 상태저장소도 container component 라고 한다.

**provider 간의 의존성이 생기지 않도록 해야한다.**
provider 간의 기능을 섞어야 한다면,
provider 간의 의존성을 만들지 말고, 중간계층에서 섞어야 한다(섞어주는 함수를 직접 만들기)

- components
- container
- context
- page
