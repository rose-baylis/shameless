import React, { Component, useState, useEffect } from "react"

// import { addBook } from "../../actions/index"

import { useDispatch } from "react-redux"

import { getEpisodes, addBook } from "../../apis"

import TextInput from "../common/form/TextInput"
import SelectSingle from "../common/form/SelectSingle"
import TwoColFormLayout from "../common/form/TwoColFormLayout"
import FormFooter from "../common/form/FormFooter"
import FormContainer from "../common/form/FormContainer"

function AddBookForm(props) {
  const dispatch = useDispatch()

  const [episodes, setEpisodes] = useState([
    { value: "default", label: "Select episode" },
  ])

  const [formData, setFormData] = useState({})

  useEffect(() => {
    getEpisodes().then((returnedEps) => {
      //Change the format so they can be use as select options
      const selectOptions = returnedEps.map((episode) => {
        return {
          value: episode.id,
          label: episode.episode_name,
        }
      })
      setEpisodes(selectOptions)
    })
  }, [])

  const handleChange = (e) => {
    e.preventDefault()

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addBook(formData)
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
                    { value: "default", label: "Select host", disabled: true },
                    { value: "mich", label: "Mich" },
                    { value: "zara", label: "Zara" },
                    { value: "Both", label: "Both" },
                  ],
                  onChange: handleChange,
                  isRequired: true,
                }}
              />
              {/* Select episode */}
              <SelectSingle
                formElement={{
                  label: "Episode",
                  name: "episode_id",
                  htmlFor: "episode_id",
                  defaultValue: "default",
                  options: episodes,
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
