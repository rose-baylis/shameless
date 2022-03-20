import React, { useState, useEffect } from "react"

function Header(props) {
  const { title } = props

  return (
    <header className="bg-shamelessOrange-500 ">
      <div className="container p-6 mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
        <p className="text-shamelessOrange-200">Find all the recommendations from the Shameless team</p>
        </div>
      </header>
  )
}

export default Header
