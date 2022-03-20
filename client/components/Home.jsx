import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import { fetchBooks } from "../actions"
import { useDispatch } from "react-redux"

import Book from "./books/Book"
import Header from "./common/Header"

function Home(props) {
  const books = useSelector((state) => state.books)


  const dispatch = useDispatch()

  useEffect(() => {
    document.title = `Home`
    dispatch(fetchBooks())
  }, [])

  return (
    <>
    <Header title='Home'></Header>
    <section className="container mx-auto p-3 bg-lightYellow">
   
      <div className="grid gap-4 sm:grid-cols-2 grid-rows-3">
        {books.map((book, i) => (
          <Book key={i} book={book} />
        ))}
        </div>
      </section>
    </>
  )
}

export default Home
