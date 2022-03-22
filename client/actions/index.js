import request from "superagent"

export const RECEIVE_BOOKS = "RECEIVE_BOOKS"
export const REQUEST_BOOKS = "REQUEST_BOOKS"
export const REQUEST_EPISODES = "REQUEST_EPISODES"
export const ADD_BOOK = "ADD_BOOK"
export const SET_CURRENT_PAGE = "CURRENT_PAGE"

export function setCurrentPage(page){
  return {
    type: SET_CURRENT_PAGE,
    page: page
  }
}


export function receiveBooks(books) {
  return {
    type: RECEIVE_BOOKS,
    books,
  }
}

export function requestBooks() {
  return {
    type: REQUEST_BOOKS,
  }
}

export function requestEpisodes() {
  return {
    type: REQUEST_EPISODES,
  }
}

export function fetchBooks() {
  return (dispatch) => {
    dispatch(requestBooks())
    return request
      .get(`/api/v1/books`)
      .then((res) => {
        dispatch(receiveBooks(res.body))
        return null
      })
      .catch((err) => {
        // dispatch(showError(err.message));
      })
  }
}

export function fetchEpisodes() {
  return (dispatch) => {
    return request
      .get(`/api/v1/episodes`)
      .then((episodes) => {
        return episodes.body
      })
      .catch((err) => {
        // dispatch(showError(err.message));
      })
  }
}

//Type not needed as we aren't talking to the reducer we are going staight to the db
export function addBook(newBook) {
  console.log("addBook action triggered", newBook)
  return (dispatch) => {
    return request
      .post(`/api/v1/books`)
      .send(newBook)
      .then((bookID) => {
        return bookID
      }).then(()=>{
        dispatch(fetchBooks())
        return null
      })
      .catch((err) => {
        // dispatch(showError(err.message));
      })
  }
}
