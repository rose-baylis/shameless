import React from "react"

function Book(props) {
  const { book } = props
  return (
    <div>
      <img src="img/placeholder.jpg" />
      <p>{book.title}</p>
      <p>{book.recommended_by}</p>
      <p>{book.date}</p>
      <p>{book.author}</p>
    </div>
  )
}

export default Book
