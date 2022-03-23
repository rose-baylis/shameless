import { combineReducers } from "redux";

import books from "./books";
import page from "./page";
import waiting from "./waiting";
import episodes from "./episodes";


export default combineReducers({
  books,
  waiting,
  page,
  episodes
});
