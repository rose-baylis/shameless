import React from "react"

// import Card from 'react-bootstrap/Card'
// import Col from 'react-bootstrap/Col'
// import ListGroup from 'react-bootstrap/ListGroup'
// import ListGroupItem from 'react-bootstrap/ListGroupItem'

function Book(props) {
  const { book } = props
  return (
    <div>
      <img src="img/placeholder.jpg" />
      <p>{book.title}</p>
      <p>{book.recommended_by}</p>
      <p>{book.date}</p>
      <p>{book.author}</p>
    </div>

    // <Col lg={3} md={6}>
    //   <Card>
    //     <Card.Img variant="top" src="img/placeholder.jpg  " />
    //     <Card.Body>
    //       <Card.Title>{book.title}</Card.Title>
    //       <Card.Text className="text-muted">
    //         {/* Reccomended on {book.date},  */}
    //         Recommended by {book.recommended_by}
    //       </Card.Text>
    //     </Card.Body>
    //     <ListGroup className="list-group-flush">
    //       <ListGroupItem>{book.author}</ListGroupItem>
    //     </ListGroup>

    //   </Card>

    // </Col>
  )
}

export default Book
