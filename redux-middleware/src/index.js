import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import ReduxPromise from "redux-promise";
import SearchBar from "./containers/search-bar";
import WeatherList from "./containers/weather-list";
import rootReducer from "./reducers";

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={applyMiddleware(ReduxPromise)(createStore)(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById("app")
);
