const express = require('express')
const path = require('path')

const server = express()

const books = require("./routes/books");
const episodes = require("./routes/episodes");

server.use(express.static(path.join(__dirname, "public")));
server.use(express.json());

server.use("/api/v1/books", books);
server.use("/api/v1/episodes", episodes);
server.use("/api/v1/*", (req, res) => res.sendStatus(404));


server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

module.exports = server
