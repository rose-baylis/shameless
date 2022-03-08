import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

function Header(props) {
  const { title } = props

  return (
    <Container className="my-3 page-header">
      <header>
        <h1>{title}</h1>
      </header>
    </Container>
  )
}

export default Header
