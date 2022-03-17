import React from "react"

function Book(props) {
  const { book } = props
  return (
    <div className="drop-shadow-md bg-white">
      <div>
        <img src="img/placeholder.jpg" />
      </div>
      <div className="p-5">
        <div className="mb-2">
         <p className="text-lg font-bold">{book.title}</p>
        </div>
        <div className="mb-2">
          <p className="text-sm text-gray-400	">Recommended by</p>
          <p>{book.recommended_by}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400	">Author</p>
          <p>{book.author}</p>
        </div>
      </div>
    </div>
  )
}

export default Book
