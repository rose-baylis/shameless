import React, { Component, useState, useEffect } from "react"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import { addBook, fetchEpisodes } from "../actions/index"

import { useDispatch } from "react-redux"

function AddBook(props) {
  const dispatch = useDispatch()
  const [validated, setValidated] = useState(false)

  const [formData, setFormData] = useState({})

  const [selectEpisodes, setSelectEpisodes] = useState([])

  useEffect(() => {
   getEpisodes()
  }),
    []

  const getEpisodes = () => {
    dispatch(fetchEpisodes()).then((episodes) => {
      setSelectEpisodes(episodes)
    })  }

  const handleChange = (e) => {
    e.preventDefault()

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    //const form = event.currentTarget
    console.log(formData)
    // if (form.checkValidity() === false) {
    //   event.preventDefault()
    //   event.stopPropagation()
    // }
    // setValidated(true)

    dispatch(addBook(formData))
   
    
  }

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="bookTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter title"
            required
            onChange={handleChange}
          />

          <Form.Control.Feedback type="invalid">
            Please enter a title
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="bookAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            name="author"
            placeholder="Enter title"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="bookRecommendedBy"
          onChange={handleChange}
          name="recommended_by"
        >
          <Form.Label>Recommended by</Form.Label>
          <Form.Select name="recommended_by">
            <option>Select</option>
            <option value="Mich">Mich</option>
            <option value="Zara">Zara</option>
            <option value="Zara">Both</option>
          </Form.Select>
        </Form.Group>

        {/* <Form.Group
          className="mb-3"
          controlId="formEpisode"
          name="episode"
          onChange={handleChange}
        >
          <Form.Label>Episode</Form.Label>
          <Form.Select aria-label="Default select example" name="episode">
            <option>Select an episode </option>
            {selectEpisodes.map((episode) => {
              return (
                <option key={episode.id} value={episode.id}>
                  {episode.name}
                </option>
              )
            })}
          </Form.Select>
        </Form.Group> */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default AddBook
