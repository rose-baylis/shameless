import request from "superagent";

export function fetchAllBooks() {
  return request.get("/api/v1/books").then((response) => {
    return response.body
  })
}
