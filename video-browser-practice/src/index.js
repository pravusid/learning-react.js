import React from 'react';
import ReactDOM from 'react-dom';

// HTML을 만드는 컴포넌트 생성 (컴포넌트 인스턴스가 아님)
const App = () => <div>Hi</div>;

// 컴포넌트에서 생성한 HTML을 받아서 인스턴스화 하고 출력할 대상을 지정하여 출력
ReactDOM.render(<App />, document.querySelector('.container'));
