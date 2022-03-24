const express = require("express");
const db = require("../db/db");
const router = express.Router();
const utils = require("../utils");



// http://localhost:3000/api/v1/books
router.get("/", (req, res) => {
  db.getAllBooks().then((books) => {
    res.json(books)
  })
})

// http://localhost:3000/api/v1/books/
router.post("/", (req, res) => {
  db.addBook(req.body).
    then((bookId) => {
    res.json(bookId[0])
  }) 
})

module.exports = router;
