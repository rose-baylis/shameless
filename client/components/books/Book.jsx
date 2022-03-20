import React from "react"

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

      <div className="drop-shadow-md bg-white grid grid-cols-3 grid-rows-3 gap-4 ">
        <div className="col-span-1 row-span-3 ... ">
          <img src="img/placeholder-2.jpg" className="object-cover h-48 w-96" />
        </div>
        {/* <div className=""> */}
        <div className="row-span-3 col-span-2 ... p-3">
          <div className="mb-2">
            <p className="text-lg font-bold">{book.title}</p>
          </div>
          <div className="mb-2">
            <p className="text-sm text-gray-400	">Recommended by</p>
            <p>{book.recommended_by}</p>
          </div>
          <div className="mb-2">
            <p className="text-sm text-gray-400	">Author</p>
            <p>{book.author}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Book
