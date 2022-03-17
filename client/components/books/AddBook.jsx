import React, { Component, useState, useEffect } from "react"

import { addBook, fetchEpisodes } from "../../actions/index"

import { useDispatch } from "react-redux"

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
  }

  return (
    <>
          <section className="container mx-auto">

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title </label>
          <input
            type="text"
            name="title"
            id="name"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="name"
            onChange={handleChange}
            required
          />
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Mich</option>
          <option>Zara</option>
          <option>Both</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
        <div>
          <label htmlFor="recommended_by">Recommended by</label>

          <select name="recommended_by" id="recommended_by"  onChange={handleChange}>
            <option value="">--Select--</option>
            <option value="Mich">Mich</option>
            <option value="Zara">Zara</option>
            <option value="Zara">Both</option>
          </select>
        </div>
        <button type="submit">Submit</button>

      </form>
      </S

    </>
  )
}

export default AddBook
