import request from "superagent";

export function getEpisodes() {
  return request.get("/api/v1/episodes").then((response) => {
    return response.body
  })
}

// export function addEpisode(episode) {
//   return request.post("/api/v1/episodes").then((response) => {
//     return response.body
//   })
// }
