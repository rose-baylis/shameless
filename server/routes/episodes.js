const express = require("express");
const db = require("../db/db");
const router = express.Router();



// Get a list of blog posts
// http://localhost:3000/api/v1/episodes
router.get("/", (req, res) => {
  db.getAllEpisodes().then((episodes) => {
    // utils.readyForJS(books);
    // console.log("hit the db", books)
    res.json(episodes)
  })
})


module.exports = router;
