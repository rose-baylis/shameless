import { combineReducers } from "redux";

import books from "./books";
import page from "./page";
import waiting from "./waiting";


export default combineReducers({
  books,
  waiting,
  page
});
