import { RECEIVE_BOOKS, REQUEST_BOOKS } from "../actions";

function waiting(state = false, action) {
  switch (action.type) {
    case REQUEST_BOOKS:
      return true;

    case RECEIVE_BOOKS:
      return false;

    // case SHOW_ERROR:
    //   return false;

    default:
      return state;
  }
}

export default waiting;
