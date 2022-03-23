import React, { useState, useEffect } from "react"
import Header from "./common/Header"
import AddBookForm from "./books/AddBookForm"
import AddEpisodeForm from "./episodes/AddEpisodeForm"
import { setCurrentPage } from "./../actions/index"
import { useDispatch } from "react-redux"
import EpisodeList from "./episodes/EpisodeList"

function AddRecommendation(props){

  const {urlSelected} = props
  const dispatch = useDispatch()
  const [selected, setSelected] = useState(urlSelected)
  const [tabComponent, setTabComponent] = useState()
  const activeClass =
    "inline-block py-4 px-4 text-sm font-medium text-center text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 transition transition-all duration-400	"
  const basicClass =
    "inline-block py-4 px-4 text-sm font-medium text-center text-gray-400 rounded-t-lg border-b-2 border-transparent hover:text-gray-400 hover:border-gray-300  transition   transition-all duration-400  "

  useEffect(() => {
    // Sets the page to highlight in the navigation
    dispatch(setCurrentPage("/new-recommendation"))
  }, [])

  useEffect(() => {
    switch (selected) {
      case "book":
        setTabComponent(<AddBookForm />)
        break
      case "episode":
        setTabComponent(<AddEpisodeForm />)
        break
      default:
    }
  }, [selected])

  const handleTab = (e) => {
    setSelected(e.target.name)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-3 ">
        <div className="py-5">
          <h3 className="text-2xl font-bold mb-1">Add new recommendation </h3>
          <p className="text-gray-400">
            Find all the recommendations from the Shameless team
          </p>
        </div>

        <div className="border-b border-gray-200 ">
          <ul className="flex flex-wrap">
            <li className="mr-2">
              <a
                name="book"
                href="/new-recommendation/book"
                className={selected === "book" ? activeClass : basicClass}
                onClick={handleTab}
              >
                Book
              </a>
            </li>
            <li className="mr-2">
              <a
                name="episode"
                href="/new-recommendation/episode"
                className={selected === "episode" ? activeClass : basicClass}
                aria-current="page"
                onClick={handleTab}
              >
                Episode
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto">{tabComponent}</div>
    </div>
  )
}

export default AddRecommendation
