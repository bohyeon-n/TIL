# componen and props 

- 컴포넌트 추출의 기준
  - UI의 일부분이 여러 번 사용되거나(button, panel, avatar) 
  - 자체적으로 충분히 복잡하다면 (app, feedstory, comment)
  - 그것들은 재사용 가능한 컴포넌트가 될 좋은 후보들이다.
  - 재사용 가능한 컴포넌트 팔레트를 사용하면 큰 앱에서 진가를 발휘하게 된다. 

# list and key 
- 가독성을 위해 map() 함수를 인라인로 넣을지, 가독성을 위해 변수로 추출해야 할지 판단해야 한다.
- map()함수가 너무 중첩되어 있다면, 컴포넌트로 추출하는 것이 좋다.

# form 
- html에서 form요소는 자기만의 상태를 가지고 사용자의 입력에 따라 업데이트된다.
- 반면에 react에서는 변경가능한 상태를 일반적으로 컴포넌트의 state속성에 위치시키며, 이는 setState()로만 업데이트할 수 있다. 
- 자바스크립트 함수를 만들어서 form제출을 처리하고, 사용자가 form에 입력한 데이터에 접근하도록 만드는 것 이를 위해 '제어되는 컴포넌트'방식을 사용한다..
- react state를 '진리의 유일한 원천(single source of truth'으로 만든다.

# composition and inheritance 

react는 강력한 합성모델을 가지고 있기 때문에, 컴포넌트간에 코드를 재사용할 때는 상속 대신 합성을 사용하는 것을 권장한다. 

개발자들이 상속으로 풀려고 하는 몇 가지 문제들을 살펴보고, 이를 합성으로 어떻게 풀 수 있을지 알아본다. 

## 다른 컴포넌트를 담기
- 컴포넌트에 어떤 자식이 들어올지 미리 알 수 없는 경우가 있다. 
- children이라는 특별한 prop을 통해 자식 요소를 출력에 그대로 전달할 수 있다. 
```js
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}
```
`<FancyBorder>` JSX 태그 안에 있는 것들은 `FancyBorder`컴포넌트의 `children` prop을 통해 전달된다. `FancyBroder`는 `{props.children}`을 `<div>`안에 렌더링 하므로 전달된 요소들이 최종 출력에 나타난다.

## 특수화
종종 어떤 컴포넌트의 "특수한 경우"인 컴포넌트를 만들어야 하는 경우가 있다. 
이럴때 합성을 사용한다.
더 "구체적인" 컴포넌트가 "일반적인"것을 렌더링하고 props를 통해 구체적인 내용을 설정한다. 

```js
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />

  );
}
```

더 구체적인 컴포넌트인 `WelcomeDialog`가 `Dialog`를 렌더링하고 있다.

### 상속이란? 

- 컴포넌트는 React.Component를 상속받아 정의하지만 컴포넌트 간에는 상속보다는 합성을 사용하길 권장한다. 
- props와 합성을 사용하면 컴포넌트의 모양과 동작을 유연하게 커스터마이징할 수 있으며 또한 명시적이고 안전하다.
- 원시타입의 값, react요소, 함수등을 포함해서 컴포넌트는 어떤 props든 받을 수 있다. 
- UI가 아닌 기능을 여러 컴포넌트에 걸쳐 사용하려면, 별도의 자바스크립트 모듈로 추출하는 것이 좋다.

# Ref와 DOM

전형적인 React 데이터 흐름에서는, 부모 컴포넌트에서 자식 엘리먼트를 조작하기 위해 props만을 사용합니다. 즉, 자식 엘리먼트를 수정하기 위해 새 prop을 가지고 다시 렌더링을 해줍니다. 하지만 가끔은 전형적인 데이터 흐름 밖에서 자식을 명령형으로 변경해야 할 필요가 있습니다. 여기서 변경될 자식이란 React 컴포넌트의 인스턴스일 수도 있고, DOM 엘리먼트일 수도 있습니다. React는 양쪽 경우 모두를 위한 비상구를 제공합니다.

+ Ref는 render메소드에서 생성된 DOM 노드 혹은 React엘리먼트 객체에 접근할 수 있는 방법을 제공한다.
+ 가끔은 props를 가지고 다시 렌더링을 해주는 것이 아닌, 데이터 흐름 밖에서 자식을 명령형(textcontent, focus method ...)으로 변경해야 할 필요가 있다.
+ 그럴 때 Ref를 사용한다.

## 언제 ref를 사용해야 하나요?

  Ref의 바람직한 사용 사례로 다음과 같은 것을 들 수 있습니다:

- 포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때(메소드를 호출해야 하기 때문에)
- 명령형 애니메이션을 발동시킬 때
- 서드파티 DOM 라이브러리를 통합할 때(리액트로 만들어지지 않은 다른 라이브러리를 리액트 세계에 붙일 때)

## Ref 생성하기

Ref는 객체이다. 
```js
myRef = React.createRef();

render() {
  return <div ref={this.myRef} />;
}

const node = this.myRef.current;

// current dom객체가 된다(리액트 객체가 아니라)
```

## Ref 사용하기
Ref는 React.createRef()를 통해 생성한 뒤 React 엘리먼트의 ref 어트리뷰트에 붙여줄 수 있습니다. Ref는 대개 컴포넌트의 인스턴스가 만들어질 때 인스턴스의 속성에 저장해주며, 이를 통해 컴포넌트 내부 코드에서 자유롭게 사용될 수 있습니다.

- ref를 다 연결해준다음에 current속성을 통해서 DOM 노드 객체를 가져올 수 있다. 
- class 컴포넌트로 부터 생성되는 인스턴스 그 인스턴스에 접근할 때도 사용할 수 있다. 
- ref의 값은 노드의 유형에 따라 달라집니다:

- HTML 엘리먼트에 ref 어트리뷰트가 사용되면, ref의 current 속성은 DOM 엘리먼트 객체를 가리킵니다.
- 클래스 컴포넌트에 ref 어트리뷰트가 사용되면, ref의 current 속성은 해당 컴포넌트로부터 생성된 인스턴스를 가리킵니다.
- 함수형 컴포넌트(state, lifecycle기능이 없음)는 인스턴스를 가질 수 없기 때문에 ref 어트리뷰트 역시 사용할 수 없습니다. 한 번 화면을 그리고 끝나기 때문에 인스턴스라고 할 게 없다. 

- 실무에서도 거의 dom element에 ref만 사용하게 된다.

# 실습 키워드 
  - 상태 
  - 상태를 바꿔서 내려주기
  - 역할과 책임 
    - 공유해야 하는 state만 상류에 둔다.


# Context 

Context는 React 컴포넌트 트리 전체에 걸쳐 데이터를 공유하기 위해 만들어졌다.

단지 몇 단계의 prop 전달을 건너뛰기 위해 context를 사용하지는 마세요.

```js
  const {Provider, Consumer} = React.createContext(defaultValue)
```
Reat 가 context Consumer를 렌더링하면, 같은 context로부터 생성된 가장 가까운 상위 Provider에서 현재 context 값을 읽어온다. 

`<Provider value={some value}>`
context의 변화를 Consumer에서 통지하는 React 컴포넌트이다. 

value prop을 받아서 이 Provider의 자손인 Consumer에서 그 값을 전달한다. 
Provider의 자손인 모든 Consumer는 Provider의 value prop이 바뀔 때마다 다시 렌더링된다. 
