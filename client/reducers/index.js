import { combineReducers } from "redux";

import books from "./books";
import waiting from "./waiting";


export default combineReducers({
  books,
  waiting
});
