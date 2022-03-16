import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// import Navbar from "react-bootstrap/Navbar"
// import Nav from "react-bootstrap/Nav"
// import Container from "react-bootstrap/Container"

function Navigation(props) {
  return (
    <nav>
       <Link to="/books">Books</Link>
    </nav>
    // <Navbar bg="light" variant="light">
    //   <Container>
    //     <Navbar.Brand href="#home">Shameless Recs</Navbar.Brand>
    //     <Nav className="me-auto">
    //       <Link to="/books">Books</Link>
    //       {/* <Link to="/episodes">Episodes</Link> */}
          
    //         {/* <Nav.Link href="/books">Books</Nav.Link>
    //         <Nav.Link href="/episodes">Episodes</Nav.Link> */}
    //     </Nav>
    //   </Container>
    // </Navbar>
  )
}

export default Navigation
