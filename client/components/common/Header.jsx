import React, { useState, useEffect } from "react"

function Header(props) {
  const { title } = props

  return (
      <header>
        <h1 className="text-3xl font-bold underline">{title}</h1>
        {/* <h1>{title}</h1> */}
      </header>
  )
}

export default Header
