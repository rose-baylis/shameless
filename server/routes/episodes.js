const express = require("express");
const db = require("../db/db");
const router = express.Router();



// http://localhost:3000/api/v1/episodes
router.get("/", (req, res) => {
  db.getAllEpisodes().then((episodes) => {
    res.json(episodes)
  })
})

// // http://localhost:3000/api/v1/episodes
// router.post("/", (req, res) => {
//   console.log(req.body)
//   db.addEpisode().then((episodes) => {
//     res.json(episodes)
//   })
// })

module.exports = router;
