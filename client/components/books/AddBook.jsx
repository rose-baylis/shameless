import React, { Component, useState, useEffect } from "react"

import { addBook, fetchEpisodes } from "../../actions/index"

import { useDispatch } from "react-redux"

import TextInput from "../common/form/TextInput"
import SelectSingle from "../common/SelectSingle"
function AddBook(props) {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({})

  const [selectEpisodes, setSelectEpisodes] = useState([])

  useEffect(() => {
    getEpisodes()
  }),
    []

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
      <section className="container mx-auto mb-5">
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

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-2">
              <button
                className="bg-fuchsia-700 text-white uppercase tracking-wide  text-xs font-bold p-3 rounded"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}

export default AddBook
