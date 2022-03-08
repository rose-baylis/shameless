const config = require("./knexfile").development;
const connection = require("knex")(config);

// Get a list of blog posts
function getAllBooks(db = connection) {
  return db("books").select()
  .orderBy('created_at', 'desc');
}

// Get a list of episodes
function getAllEpisodes(db = connection) {
  return db("episodes").select();
}

// Get a list of blog posts
function addBook(book, db = connection) {
  return db("books")
    .insert(book)
}

module.exports = {
  getAllBooks,
  addBook,
  getAllEpisodes
}