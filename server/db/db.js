const config = require("./knexfile").development;
const connection = require("knex")(config);

function addBook(book, db = connection) {
  return db("books")
    .insert(book)
}

function getAllBooks(db = connection) {
  return db("books").select()
  .orderBy('created_at', 'desc')
}

function addEpisode(episode, db = connection) {
  return db("episodes")
    .insert(episode)
}

function getAllEpisodes(db = connection) {
  return db("episodes").select()
  .orderBy('created_at', 'desc')

}



module.exports = {
  getAllBooks,
  addBook,
  getAllEpisodes,
  addEpisode
}