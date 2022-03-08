const express = require("express");
const db = require("../db/db");
const router = express.Router();
const utils = require("../utils");



// Get a list of blog posts
// http://localhost:3000/api/v1/books
router.get("/", (req, res) => {
  db.getAllBooks().then((books) => {
    // utils.readyForJS(books);
    // console.log("hit the db", books)
    res.json(books)
  })
})

// Get a list of blog posts
// http://localhost:3000/api/v1/books/
router.post("/", (req, res) => {
  console.log("about to insert", req.body);
  db.addBook(req.body).
    then((bookId) => {
    res.json(bookId[0])
  }) 
})

module.exports = router;

// {
//    "date": "20/1/2022",
//    "title": "Roses book",
//    "author": "By Torrey Peters",
//    "recommended_by": "Zara"
// }