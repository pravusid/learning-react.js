import { combineReducers } from "redux";
import reducerBooks from "./reducer-books";

const rootReducer = combineReducers({
  books: reducerBooks
});

export default rootReducer;
