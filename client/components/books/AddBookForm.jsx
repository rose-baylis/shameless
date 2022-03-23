import React, { Component, useState, useEffect } from "react"

import { addBook, fetchEpisodes } from "../../actions/index"

import { useDispatch } from "react-redux"

import TextInput from "../common/form/TextInput"
import SelectSingle from "../common/form/SelectSingle"
import TwoColFormLayout from "../common/form/TwoColFormLayout"
import FormFooter from "../common/form/FormFooter"
import FormContainer from "../common/form/FormContainer"

function AddBookForm(props) {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    e.preventDefault()

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addBook(formData))
    //todo clear form data
  }

  return (
    <>
      <TwoColFormLayout
        heading="Add a book"
        subheading="Find all the recommendations from the Shameless team"
      >
        {
          <form onSubmit={handleSubmit}>
            <FormContainer>
              {/* Title */}
              <TextInput
                formElement={{
                  label: "Title",
                  name: "title",
                  htmlFor: "title",
                  onChange: handleChange,
                  isRequired: true,
                }}
              />

              {/* Author */}
              <TextInput
                formElement={{
                  label: "Author",
                  name: "author",
                  htmlFor: "author",
                  onChange: handleChange,
                  isRequired: true,
                }}
              />

              {/* Recommended by */}
              <SelectSingle
                formElement={{
                  label: "Recommended by",
                  name: "recommended_by",
                  htmlFor: "recommended_by",
                  defaultValue: "default",
                  options: [
                    { value: "default", label: "Select host" },
                    { value: "mich", label: "Mich" },
                    { value: "zara", label: "Zara" },
                    { value: "Both", label: "Both" },
                  ],
                  onChange: handleChange,
                  isRequired: true,
                }}
              />
            </FormContainer>
            <FormFooter />
          </form>
          
        }
      </TwoColFormLayout>
    </>
  )
}

export default AddBookForm
