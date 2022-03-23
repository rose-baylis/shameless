import React, { Component, useState, useEffect } from "react"

import { fetchEpisodes } from "../../actions/index"

import { useDispatch } from "react-redux"
import { addEpisode, getEpisodes } from "../../apis"

import TextInput from "../common/form/TextInput"
import TwoColFormLayout from "../common/form/TwoColFormLayout"
import FormFooter from "../common/form/FormFooter"
import FormContainer from "../common/form/FormContainer"
import EpisodeList from "./EpisodeList"

function AddEpisodeForm(props) {
  const [episodes, setEpisodes] = useState()
  const [formData, setFormData] = useState({
    episode_name: "",
    episode_date: "",
  })

  const handleChange = (e) => {
    e.preventDefault()

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const fetchEpisodes = () => {
    getEpisodes(episodes).then((episodes) => {
      setEpisodes(episodes)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addEpisode(formData).then(() => {
      fetchEpisodes()
    })

    setFormData({
      episode_name: "",
      episode_date: "",
    })
  }

  useEffect(() => {
    fetchEpisodes()
  }, [])

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
                name: "episode_name",
                htmlFor: "episode_name",
                onChange: handleChange,
                value: formData.episode_name,
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
                  name="episode_date"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full   sm:text-sm border-gray-300 rounded-md"
                  onChange={handleChange}
                  value={formData.episode_date}
                />
              </div>
            </div>
          </FormContainer>
          <FormFooter />
        </form>
      </TwoColFormLayout>
      <EpisodeList episodes={episodes} />
    </div>
  )
}

export default AddEpisodeForm
