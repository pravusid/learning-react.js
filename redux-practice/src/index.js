import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import BookList from "./containers/book-list";
import rootReducer from './reducers';

class App extends Component {
  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById("app")
);
