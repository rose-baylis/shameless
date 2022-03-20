import React from "react"
import Tag from "../common/Tag"

function Book(props) {
  const { book } = props
  return (
    <>
      {/* <div class="grid grid-rows-3 grid-flow-col gap-4">
  <div class="row-span-3 ...">        <img src="img/placeholder.jpg" />
</div>
  <div class="col-span-2 ...">02</div>
  <div class="row-span-2 col-span-2 ...">03</div>
</div> */}

      <div className="drop-shadow-md bg-white grid grid-cols-3 grid-rows-1 max-h-64">
        <div className="col-span-1 row-span-1 ... ">
          <img src="img/placeholder-2.jpg" className="object-cover h-full w-full" />
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
