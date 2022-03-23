import React, { Component, useState, useEffect } from "react"

import { addBook, fetchEpisodes } from "../../actions/index"

import { useDispatch } from "react-redux"
import { addEpisode } from '../../apis'

import TextInput from "../common/form/TextInput"
import TwoColFormLayout from "../common/form/TwoColFormLayout"
import FormFooter from "../common/form/FormFooter"
import FormContainer from "../common/form/FormContainer"
import EpisodeList from "./EpisodeList"

function AddEpisodeForm(props) {
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
    addEpisode(formData)
    .then((result)=>{
      console.log(result)
    })
    
    //todo clear form data
  }

  return (
    <div>
    <TwoColFormLayout
      heading="Add an episode"
      subheading="It's helpful listeners to know what episode(s) the recommendation was made on."
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
     <EpisodeList/>

     </div>
  )
}

export default AddEpisodeForm
