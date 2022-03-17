import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import { fetchBooks } from "../../actions"
import { useDispatch } from "react-redux"

import Book from "./Book"
import AddBook from "./AddBook"
import Header from "../common/Header"

function Books(props) {
  const books = useSelector((state) => state.books)

  const dispatch = useDispatch()

  useEffect(() => {
    document.title = `Books`
    dispatch(fetchBooks())
  }, [])

  return (
    <>
    <Header title='Books'></Header>
      <AddBook />
      <section className="container mx-auto">
      <div class="grid gap-4 sm:grid-cols-3 grid-rows-3">


        {books.map((book, i) => (
          <Book key={i} book={book} />
        ))}
        </div>
      </section>
    </>
  )
}

export default Books
