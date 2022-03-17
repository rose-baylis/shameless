import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Navigation(props) {
  return (
    <nav className="container mx-auto p-4">
       <Link className="pr-2" to="/books">Books</Link>
       <Link className="pr-2 " to="/episodes">Episodes</Link>
    </nav>
  )
}

export default Navigation
