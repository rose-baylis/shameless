import React, { Component, useState, useEffect } from "react"

import { addBook, fetchEpisodes } from "../../actions/index"

import { useDispatch } from "react-redux"

import TextInput from "../common/form/TextInput"
import SelectSingle from "../common/form/SelectSingle"
import PrimaryButton from "../common/PrimaryButton"

function AddBookForm(props) {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({})

  const [selectEpisodes, setSelectEpisodes] = useState([])

  useEffect(() => {
    getEpisodes()
  }, [])
   

  const getEpisodes = () => {
    dispatch(fetchEpisodes()).then((episodes) => {
      setSelectEpisodes(episodes)
    })
  }

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
      <section className="container mx-auto mb-5 p-4">
        <h3 className="text-2xl font-bold mb-4">Add Book</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
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

            <div className="w-full mb-6 md:mb-2">
             <PrimaryButton text="Submit" type="submit" />
            </div>
          </div>
        </form>
      </section>
    </>
  )
}

export default AddBookForm
