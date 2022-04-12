import React, { forwardRef, useState, useEffect } from "react"

import DatePicker from "react-datepicker"
// import "react-datepicker/dist/react-datepicker.css";

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

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(
    new Date().setMonth(startDate.getMonth() + 1)
  )

  useEffect(() => {
    if (startDate > endDate) setStartDate(endDate)
  }, [endDate])

  useEffect(() => {
    if (startDate > endDate) setEndDate(startDate)
  }, [startDate])

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

  const handleDate = (e) => {
    console.log("Date picker", e)
    setStartDate(e)
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
        <form onSubmit={handleSubmit} className="overflow-visible	">
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

            {/* <div className="w-full mb-6 md:mb-0">
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
            </div> */}
            <div className="relative w-40">
              <DatePicker
                selected={startDate}
                onChange={handleDate}
                popperClassName="react-datepicker-left"
                nextMonthButtonLabel=">"
                previousMonthButtonLabel="<"
              />
            </div>
          </FormContainer>

          <FormFooter />
        </form>
      </TwoColFormLayout>
      {/* <div className="relative w-40">
                    <DatePicker
                        selected={startDate}
                        onChange={handleDate}
                        // selectsStart
                        startDate={startDate}
                        // endDate={endDate}
                        nextMonthButtonLabel=">"
                        previousMonthButtonLabel="<"
                        // popperClassName="react-datepicker-left"
                    />
                </div> */}
      <EpisodeList episodes={episodes} />
    </div>
  )
}
const ButtonInput = forwardRef(({ value, onClick }, ref) => (
  <button
    onClick={onClick}
    ref={ref}
    type="button"
    className="inline-flex justify-start w-full px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500"
  >
    {format(new Date(value), "dd MMMM yyyy")}
  </button>
))

export default AddEpisodeForm
