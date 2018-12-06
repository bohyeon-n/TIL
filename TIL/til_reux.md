# Redux

읽어보기

- Flux 와 Redux
- Context API 가 Redux 를 대체할 수 있을까요?

flux redux 를 만들어 낸 배경
flux redux context api mobx

값이나 함수를 사용하기 위해서 hoc 를 사용한다.

context
객체지향 프로그래밍 스타일 메소드를 많이 만들어서 객체를 편집하고

redux
미들웨어 플러그인들을 붙일 수 있다? 기능을 빨리 빨리 확장시켜서 쓸 수 있다.
redux 는 react 와는 별개의 라이브러리
redux 를 react 와 연결하는 방법
redux 와 외부세계와 연동하기 위한 방법을 배워야 함

실무에서는 redux 가 많이 쓰인다.

## 역사

페이스북에서 리액트를 만들 때 상태관리 기법으로 flux 라는 기법을 제시했다.

##

우리가 context 를 쓸 때 상태를 바꾸기 위해서 함수를 내려줘서 밑에서 호출하게 만듦
리덕스에서는 sotre 라는 상태를 담는 통에 dispatch 라는 메소드를 호출하면서

store.dispatch({
type: 'CREATE_TODO',
text: '새 할 일 추가'
})

객체를 만들어서 그 것을 스토어에 투입을 해서 상태를 바꾼다. 메소드를 만드는 것이 아니고 객체를 만들어서
이 객체를 액션이라고 부른다. 액션은 상태를 어떻게 바꿀 지를 표현하는 객체

이 액션을 처리해서 바꿔주는 함수가 reduxer 다
상태를 어떻게 바꿀지를 액션을 가지고 표현한다.

액션을 많이 만든다.
**action 이라는 객체를 만들 때는 type 이라는 속성은 항상 있어야 한다(관례)**

액션이 스토어에 투입됐을 떄 상태를 어떻게 바꿔줄 것인지, 코딩을 해줘야 할텐데
그 절차를 가지고 리듀서라고 한다.

리듀서는 상태가 어떻게 바뀌는지를 나타내느 함수이다.

이전상태와 액션을 받아서 다음 상태를 반환하는 것을 가지고 리듀서라고 부른다.

```js
const INCR = "INCR";

function incr(amount) {
  return {
    type: INCR,
    amount
  };
}
const ZERO = "ZERO";
function zero() {
  return {
    type: ZERO
  };
}
// redux store는 초기 상태를 만들 때
// state에 undefined
// action에 빈 객체를 넣어 리듀서를 호출한다.

// 지금은 그냥 일회용임, 상태를 보관하지 않고 있음
// 상태를 보관해주는 놈이 store
// 맨처음 상태가 있어야 함. 처음으로 쓸 값을 만들고
// 이런식으로 해주는 것이 관례이다.
// 기본 매개변수를 줘야 한다.
// state에 undefinde가 들어왔을 때는 0이 대신 사용
// action type 만족하는 타입이 없으면 default 로 빠진다.
// 초기상태를 여기다 적어주는 것이 관례이다.
// default return stae 이것도 적어주는 것이 관례이다. 규칙

const initialState = 0;
function counter(state = initialState, action) {
  switch (action.type) {
    case INCR:
      return state + action.amount;
    case ZERO:
      return 0;
    default:
      // 관례, 규칙
      return state;
  }
}

counter(10, incr(3));

counter(14, zero());
```

incr(10) 10 증가시키고 싶다는 액션 액션 creater

리듀서는 순수함수여야 한다. (같은 것을 입력했을 때 같은 것을 반환하는 함수)
리듀서는 이전상태와 액션을 받아서 다음 상태를 반환하는 것 만 해야 한다.

통신을 한다거나, localstorate 를 바꾼다거나 하는 것들은 하면 안됨. 외부세계와 연결되서는 안 된다.

```js
const INCR = "INCR";
const ZERO = "ZERO";

function incr(amount) {
  return {
    type: INCR,
    amount
  };
}
function zero() {
  return {
    type: ZERO
  };
}
const initialState = {
  count: 0
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case INCR:
      return {
        count: state.count + action.amount
      };
    case ZERO:
      return {
        count: 0
      };

    default:
      // 관례, 규칙
      return state;
  }
}

let state;
state = rootReducer(state, {});
//=> { count: 0 }
state = rootReducer(state, incr(3));
//=> { count: 3 }

state = rootReducer(state, zero());
//=> { count: 0 }
```

항상 새 배열 새 객체를 반환 해야 한다.

- basic action and reducer

```js
const INCR = "INCR";
const ZERO = "ZERO";

const ADD_TODO = "ADD_TODO";
// 오타를 쉽게 찾아내기 위해서 굳이 변수로 지정해서 씀

function incr(amount) {
  return {
    type: INCR,
    amount
  };
}
function zero() {
  return {
    type: ZERO
  };
}
function addTodo(body) {
  return {
    type: ADD_TODO,
    body
  };
}
const initialState = {
  count: 0,
  todos: []
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case INCR:
      return {
        ...state,
        count: state.count + action.amount
      };
    case ZERO:
      return {
        ...state,
        count: 0
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            body: action.body,
            complete: false
          }
        ]
      };

    default:
      // 관례, 규칙
      return state;
  }
}
let state;
state = rootReducer(state, {});
state = rootReducer(state, addTodo("redux"));
```

리듀서를 여러 개로 쪼개서 작성할 수 있다.

handmade root reducer

```js
let { combineReducers, createStore } = require("redux");

const INCR = "INCR";
const ZERO = "ZERO";

const ADD_TODO = "ADD_TODO";

function incr(amount) {
  return {
    type: INCR,
    amount
  };
}

function zero() {
  return {
    type: ZERO
  };
}

function addTodo(body) {
  return {
    type: ADD_TODO,
    body
  };
}

function count(state = 0, action) {
  switch (action.type) {
    case INCR:
      return state + action.amount;
    case ZERO:
      return 0;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          body: action.body,
          complete: false
        }
      ];
    default:
      return state;
  }
}

const initialState = {
  count: 0,
  todos: []
}; // 관례
// redux store는 초기 상태를 만들 때
// state에 undefined,
// action에 빈 객체를 넣어 리듀서를 호출한다.
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case INCR:
    case ZERO:
      return {
        ...state,
        count: count(state.count, action)
      };
    case ADD_TODO:
      return {
        ...state,
        todos: todos(state.todos, action)
      };
    default:
      // 관례
      return state;
  }
}

// 작은 리듀서 여러 개를 만든 다음
// combineReducers를 사용해 합칠 수 있다.

const rootReducer = combineReducers({
  todos,
  count
});

store.subscribe(() => {
  console.log(store.getState());
});
```

스토어가 초기상태를 만들 때 ~
createStore 를 만들면 초기상태가 들어있다.

액션이 디스패치 되서 다음 상태가 되서 스토어에 저장된 뒤에 호출된 함수를 subscribe 에 등록할 수 있다. 이벤트 리스너 같은 것

리액트와 리덕스를 연결한다는 것은?
subscribe 에서 화면 다시 그리기 액션이 다시 투입되서 상태가 바뀔 때 마다 여기서 화면을 다시 그리면 된다.
화면을 다시 그린다는 것은 this.setState({

})

이런 작업을 하는 것.
리덕스랑 리액트를 스토어를 컴포넌트에 전달해 준 뒤 컴포넌트의 subsribe 메소드를 통해서 setState 를 해주면 된다.

리덕스에 액션이 디스패치됐을 때 setState 를 해서 화면을 다시 그린다면 리액트와 리덕스가 연결

react redux 를 어떻게 연결해 줄 것인지를 connect 에 넘기고 프리젠티에션 컴포넌트를 넘기면 컨테이너 컴포넌트가 만들어진다
connect 컨테이너 컴포넌트를 만들어줌

const mapStateToProps = state => {

}
상태를 받아서 프리젠테이션 컴포넌트에 어떤 프롭을 넘겨줄 지 반환해줌

const mapDispatchToProps =
디스패치 함수를 받아서 프레젠테이션 컴포넌트에

프롭으로 쓸 객체를 만들어 준 것

state 는 리덕스 prop 은 리액트 세계에 넣어줄 놈
dispatch 는 리덕스 세계 return 하는 것은 리액트 세계의 컴포넌트의 프롭으로 넘겨줄

connect 에 함수를 넘겨주면은 어떻게 연결될지 커넥트 함수에 전달 되는 것이고 여기서 반환 될 프롭을 넣어줄 컴포넌트를 넣어주면 컨테이너 컴포넌트를 반환해준다.
map === 대응시키다

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)

render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root')
)
// 리덕스 프로바이더임

이 밑에서 랜더링되는 커넥트 된 컴포넌트들은 스토어에 접근함.
비유적으로 커넥트가 컨슈머 역할?
어떤 값과 함수를 프로바이더에서 내려줌
스테이트와 디스패치를 뭔가를 만들어서 밑으로 내려주 리덕스도 마찬가지이 ㅁ
커넥트, 프로바이더가 쓰임 (리액트와 리덕스를 연결해줄때 )

할일 추가 폼을 전송할 때마다 리덕스 상태
그려짐
리덕스 상태로부터 값을 받아와서 그걸 그려주고 있음

리덕스 개발 도구

상태를 변경하는 객체를 만들었을 때 장점이 생기기 때문에 (타임머신 redux devtools)

비동기, 리덕스 개발도구
