import { RECEIVE_BOOKS, ADD_BOOK } from "../actions";

function books(state = [], action) {
  switch (action.type) {

    case RECEIVE_BOOKS:
      state = action.books;
      return state

    default:
      return state;
  }
}

export default books;
