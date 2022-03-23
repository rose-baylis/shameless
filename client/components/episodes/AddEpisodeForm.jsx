import React, { Component, useState, useEffect } from "react"

import { addBook, fetchEpisodes } from "../../actions/index"

import { useDispatch } from "react-redux"

import TextInput from "../common/form/TextInput"
import TwoColFormLayout from "../common/form/TwoColFormLayout"
import FormFooter from "../common/form/FormFooter"
import FormContainer from "../common/form/FormContainer"

function AddEpisodeForm(props) {
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
    <TwoColFormLayout
      heading="Add an epside"
      subheading="It's helpful listeners to know what episodes the recommendation was made on."
    >
      <form onSubmit={handleSubmit}>
      <FormContainer>

          <TextInput
            formElement={{
              label: "Episode Name",
              name: "episodeName",
              htmlFor: "episodeName",
              onChange: handleChange,
              isRequired: true,
            }}
          />

          <div className="w-full mb-6 md:mb-0">
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="date"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full   sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </FormContainer>
        <FormFooter />
      </form>
    </TwoColFormLayout>
  )
}

export default AddEpisodeForm
