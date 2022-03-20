import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import { fetchBooks } from "../actions"
import { useDispatch } from "react-redux"

import Book from "./books/Book"
import Header from "./common/Header"

// import * as Scroll from "react-scroll"
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"

function Home(props) {
  const books = useSelector((state) => state.books)

  const dispatch = useDispatch()

  useEffect(() => {
    document.title = `Home`
    dispatch(fetchBooks())
  }, [])

  const handleActive = (athing) => {
    console.log("active")
  }

  return (
    <>
      <Header title="Home"></Header>
      <section className="container mx-auto p-3 bg-lightYellow flex min-h-screen">
        <div className="basis-1/5">
          <div className="fixed z-10">
            <p>section for scroll list</p>
            <Link
              activeClass="active bg-yellow-500"
              className="test1"
              to="test1"
              spy={true}
              smooth={true}
              duration={500}
            >
              Test 1
            </Link>     <Link
              activeClass="active bg-yellow-500"
              className="test2 "
              to="test2"
              spy={true}
              smooth={true}
              duration={500}
            >
              Test 2
            </Link>
          </div>
        </div>
        <div className="basis-4/5">
          <div className="grid gap-4 sm:grid-cols-2 grid-rows-3">
            {books.map((book, i) => (
              <Book key={i} book={book} />
            ))}
          </div>
        </div>
      </section>
      <Element name="test1" className="element min-h-screen" >
          test 1
        </Element>
        <Element name="test2" className="element min-h-screen" >
          test 2
        </Element>
        <Element name="test3" className="element min-h-screen" >
          test 3
        </Element>
   
    </>
  )
}

export default Home
