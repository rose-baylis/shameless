import React, { useState, useEffect } from "react"

function Header(props) {
  const { title } = props

  return (
    <header className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">{title}</h1>
      </header>
  )
}

export default Header
