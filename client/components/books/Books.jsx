import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import { fetchBooks } from "../../actions"
import { useDispatch } from "react-redux"

import Book from "./Book"
import AddBook from "./AddBook"
import Header from "../common/Header"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

function Books(props) {
  const books = useSelector((state) => state.books)

  const dispatch = useDispatch()

  useEffect(() => {
    document.title = `Books`
    dispatch(fetchBooks())
  }, [])

  return (
    <>
      <h1>Books</h1>
      <AddBook />
      <section>
        {books.map((book, i) => (
          <Book key={i} book={book} />
        ))}
      </section>

      {/* <Header title="Books"/>
    <Container>
      <Row className="mb-3">
        <AddBook />

      </Row>
      <Row className="g-4">
        {books.map((book, i) =>
          <Book
            key={i}
            book={book}
          />
        )}
      </Row>


    </Container> */}
    </>
  )
}

export default Books
