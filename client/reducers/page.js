import { SET_CURRENT_PAGE} from "../actions";

function page(state = [], action) {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      state = action.page;
      return state

    default:
      return state;
  }
}

export default page;
