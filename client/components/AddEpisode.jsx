import React, { useState } from "react"

import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import Select from "react-select"

import { addBook } from "../actions/index"

import { useDispatch } from "react-redux"

import dayjs from "dayjs"
import dayjsPluginUTC from "dayjs-plugin-utc"

function AddEpisode(props) {
  const [validated, setValidated] = useState(false)

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
   
  }

  return <>
  <Form.Group
          className="mb-3"
          controlId="bookRecommendedBy"
          onChange={(e) => setRecommendedBy(e.target.value)}
        >
          <Form.Label>Recommended by</Form.Label>
          <Select
            isMulti
            options={
              [{ value: "Mich", label: "Mich" },
              { value: "Zara", label: "Zara" },
              { value: "Zara", label: "Zara"},
              { value: "Zara", label: "Zara"} 
             ]
            }
          />
        </Form.Group></>
}

export default AddEpisode
