import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

function Navigation(props) {
  const currentPage = useSelector((state) => state.page)
  const linkStyle =
    " text-shamelessLilac-600 hover:text-shamelessLilac-700 transition"
  const activeStyle = "text-shamelessLilac-700 transition"

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Books", link: "/books" },
    { name: "Add new", link: "/new-recommendation" },
  ]

  return (
    <nav className="bg-shamelessLilac-500">
      <div className="container flex items-center mx-auto p-2 gap-5 bg-shamelessLilac-500">
        <img src="/img/shameless-logo.svg" />
        {navItems.map((navItem) => {
          return (
            <Link
              className={currentPage === navItem.link ? activeStyle : linkStyle}
              to={navItem.link}
              key={navItem.name}
            >
              {navItem.name}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default Navigation
