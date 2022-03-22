import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

function Navigation(props) {
  const currentPage = useSelector((state) => state.page)
  console.log(currentPage)
  const linkStyle= "pr-5 text-shamelessLilac-600 active:text-shamelessLilac-700 hover:text-shamelessLilac-700 transition"
  return (
    <nav className="bg-shamelessLilac-500">
      <div className="container mx-auto p-4 bg-shamelessLilac-500">
        {currentPage}
        <Link className={linkStyle} to="/books">
          Books
        </Link>
        <Link className={linkStyle} to="/episodes">
          Episodes
        </Link>
        <Link className={linkStyle} to="/new-recommendation">
          Add new
        </Link>
      </div>
    </nav>
  )
}

export default Navigation
