import React from "react"
import Tag from "../common/Tag"

function Book(props) {
  const { book } = props
  return (
    <>
      <div className="drop-shadow-md bg-white grid grid-cols-3 grid-rows-1 max-h-56">
        <div className="col-span-1 row-span-1 ... ">
          <img
            src="img/placeholder-2.jpg"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="col-span-2 row-span-1  ... p-5">
          <Tag text="Book" link="/books" />
          <div className="mb-2">
            <p className="text-lg font-bold">{book.title}</p>
          </div>
          <div className="mb-2">
            <p className="text-sm text-gray-400	">Recommended by</p>
            <p>{book.recommended_by}</p>
          </div>

          <div className="">
            <p className="text-sm text-gray-400	">Author</p>
            <p>{book.author}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Book
