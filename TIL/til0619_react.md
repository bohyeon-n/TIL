# React

## rendering 

**rendering된다는 것은 화면을 그린다는 것이 아니다!** 

- 컴포넌트 클래스로부터 생성되는 객체가 있다. 그 객체들이 어떤 식으로 관리될까
- 컴포넌트 렌더링 = 컴포넌트의 인스턴스 트리 구축 
- Provider는 상태를 갖고 있다. 
- render메소드는 정보를 갖고 있는 객체를 반환한다. 객체의 계층구조가 만들어진다. 
- 새 트리를 만들어보고 예전 트리와 일치하면 객체를 유지시키고, 일치하지 않는 부분은 객체를 날려버린다. 그 객체 안에 있던 정보도 날아간다. 

## mount되었을 때 부작용을 일으키는 component

- 부작용이란? 
  - 상태를 바꾸거나 외부세계에 영향을 주는 것 
  - 부작용을 활용해서 기능을 구현한다. 
  - component를 렌더링하다는 것은 화면을 그린다는 것만을 의미하지 않는다. 
  - 화면과는 상관없이 부작용을 일으키기 위해서 컴포넌트를 렌더링하기도 한다.

## 브라우저의 중요한 UI
- 주소표시줄, hash, 새로고침, 뒤로가기, 앞으로가기

- 사용자는 브라우저를 원래 쓰던 방식대로 쓴다.
- **프론트엔드는 사용자가 쓰던 대로 쓰더라도 잘 작동할 수 있도록 해야 하는 의무가 있다.**
- 그것을 가능하게 해주는 기술이 react Router이다. 


- [html5 history](https://developer.mozilla.org/ko/docs/Web/API/History_API)

- 자바스크립트로 페이지 새로고침을 하지 않고도 히스토리 스택을 조작할 수 있다. 

```js
var stateObj = {foo : "bar"}; 
history.pushState(stateObj, "page 2", "bar.html");
```
- 주소 표시줄을 표시하는 두 가지 방법
  - pushState
  - hashbang 

- `pushState`는 3가지 인수를 받는다. 

1. state객체, stateObj 상태객체를 하나 받는다.  객체 하나를 붙여둘 수 있다. 
2. title, 두 번째 인수는 무시하는 것이 좋다. 기능이 구현되어있지 않다. 
3. URL, 추가하고 싶은 경로, 사용자에게 보여주고 싶은 경로를 설정한다. 


`window.addEventListener('popstate', e => console.log(e.state))`
- react Router가 이 기술을 쓰고 있다. 

- hashbang 기법
  - 해시에 없는 아이디를 입력하면 아무변화도 일어나지 않지만 hash change eventhandler는 동작하는 방식 
  - WindowEventHandlers.onhashchange 이벤트는 윈도우 해시가 변경되면 발생된다. 

### react Router 

#### BrowserRouter, HashRouter

Context의 Provider와 유사한 역할을 한다. 브라우저의 history stack 혹은 hashchange 이벤트와 연동되어있다. 아래 나오는 컴포넌트들은 전부 Context의 Consumer와 유사한 역할을 한다. (즉, 상위 Router 엘리먼트와 연동되어, 상태를 받아오거나 상태를 바꿀 수 있다.)
#### Link

a 태그로 렌더링되는 컴포넌트. href 역할을 하는 to prop을 통해 어떤 주소로 이동할지를 지정해줄 수 있다. 상위에서 BrowserRouter가 사용되면 history.pushState를 통해 주소를 바꾸고, HashRouter가 사용되면 location.hash를 바꾼다.

#### Route
Route 컴포넌트는 react-router의 핵심적인 구성요소로, 주소에 따른 선택적 렌더링을 할 때 사용된다. path prop과 주소가 일치할 때에만 렌더링된다. component prop을 통해 렌더링하고 싶은 컴포넌트를 넘겨줄 수 있다. 이 때, 여기에 주어진 컴포넌트는 match prop을 받고 이 prop으로 들어오는 객체를 통해 라우팅과 관련된 다양한 정보를 얻어올 수 있다. 이 밖에 많은 기능이 내장되어 있다.


#### Redirect

렌더링되었을때 주소가 바뀌는 컴포넌트. Link 컴포넌트와 함께 주소를 바꾸는 데에 사용된다. Link 컴포넌트는 사용자가 링크를 클릭해야만 주소가 바뀌는 데 반해, Redirect 컴포넌트는 마운트되는 순간 주소가 바뀐다는 차이점이 있다. from prop과 to prop을 받을 수 있고 현재 주소가 from과 일치하면 to 주소로 이동한다. from prop을 생략한 경우 바로 to 주소로 이동한다

#### Switch

자식 노드에 Route, Redirect 컴포넌트가 있을 때, 처음으로 주소가 일치하는 Route 혹은 Redirect 하나만 동작하게 만드는 컴포넌트. 여기서 '주소의 일치'란, 브라우저 주소표시줄의 주소가 Route 컴포넌트의 path prop, Redirect 컴포넌트의 from prop과 일치하는 것을 말하는 것이다.


```js
import { BrowserRouter, Link, Route, Switch, Redirect} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <Link to="/page1">page1</Link>
            <Link to="/page2">page2</Link>
            <Link to="/page3">page3</Link>
          </div>
          <Switch>
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="/page3" component={Page3} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
const Home = () => (
  <div>Home</div>
)
const Page1 = () => (

  <div>
    page1
    <Redirect to="/page2"/>
    </div>

  )
const Page2 = () => (
  <div>page2</div>

)
const Page3 = () => (
  <div>page3</div>
)

export default App;
```

- path와 일치하면 컴포넌트를 렌더링해준다.
- exact 
  - path의 정확한 의미는 '이 문자열로 시작될 때 컴포넌트를 렌더링해줘라'이다. 
  - exact라는 분리형 프롭을 붙여주면 정확히 path에 입력한 문자열일 때만 폼이 렌더링된다. 

- 주소가 바뀌었다는 사실을 어떻게 알고 화면을 바꾸는 것일까? 
  - Router는 Provider와 유사하다.
  - Route 컴포넌트들이 그 안에 Cousumer와 유사한 것을 갖고 있다. Router가 갖고 있는 상태를 받아워서 바꿔줘야 하기 때문에 Consumer와 유사한 존재이다. 
  - Link 컴포넌트를 클릭하면 push state가 되고 Router의 상태가 바뀐다.
  - 상태가 바뀌었으므로 다시 렌더링된다.
  - 전부 다시 렌더링되기 때문에 Route도 다시 렌더링된다. 
  - Route 컴포넌트 안에 Consumer와 유사한 놈이 있어서 제공하는 현재 주소를 받아온다.
  - 현재 주소와 일치한다면 렌더링해주고, 아니면 안해준다. 

  - match는 객체이고 리액트 라우터가 컴포넌트를 렌더링할 때 주는 prop이 있고 match prop이 어떻게 일치햇는지에 대한 정보가 담겨있다. 

- 주소표시줄을 바꾸는 방법
  - Link (click)
  - Redirect 

**react Router를 쓸 때는 서버 설정에 주의해야 한다.**

localtion.hash hash를 직접 바꿔주고 싶다면 , 문자열을 넣어주면 해시 체인지 이벤트도 일어난다. 

- 큰 흐름은 다음과 같다. 

  - 페이지라는 상태는 주소표시줄이 페이지 상태가 된다. 
  - 주소표시줄의 상태를 가져와서 쓰게 되는 것
  - 주소표시줄의 상태가 바뀌면 우리 페이지도 바뀌게 된다. 

- 빌드란? 
  - 빌드는 우리가 개발해놨던 파일을 압축하고 합치는 과정이다.
  - 빌드과정을 마친 파일은 변경되지 않는다.
  - 환경변수를 이 사이트에서 바꿨다고 해도 파일이 이미 만들어진 상태이다. 
  - 이미 만들어진 파일 값을 바꿀 수가 없어서 다시 한 번 빌드를 해줘야 한다.
  - 환경변수는 빌드과정에서만 쓰인다.
  - 빌드가 끝나면 환경변수를 바꿔도 아무런 소용이 없다. 

