import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Navigation(props) {
  return (
    <nav>
       <Link to="/books">Books</Link>
       <Link to="/episodes">Episodes</Link>
    </nav>
  )
}

export default Navigation
