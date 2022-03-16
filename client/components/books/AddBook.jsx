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

    </>
  )
}

export default AddBook
