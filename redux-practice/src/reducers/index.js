import { combineReducers } from "redux";
import ActiveBook from "./reducer-active-book";
import reducerBooks from "./reducer-books";

const rootReducer = combineReducers({
  books: reducerBooks,
  activeBook: ActiveBook
});

export default rootReducer;
