import React, { useState, useEffect } from "react"
import Header from "./common/Header"
import AddBookForm from "./books/AddBookForm"
import AddEpisodeForm from "./episodes/AddEpisodeForm"
import { setCurrentPage } from "./../actions/index"
import { useDispatch } from "react-redux"

function AddRecommendation() {
  const dispatch = useDispatch()

  const [selected, setSelected] = useState('book')
  // const selected = "book"
  // const [tabComponent, setTabComponent] = useState()
  const activeClass =
    "inline-block py-4 px-4 text-sm font-medium text-center text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 transition transition-all duration-500	"
  const basicClass =
    "inline-block py-4 px-4 text-sm font-medium text-center text-gray-400 rounded-t-lg border-b-2 border-transparent hover:text-gray-400 hover:border-gray-300  transition   transition-all duration-500  "

  
    useEffect(() => {
      // Sets the page to highlight in the navigation
      dispatch(setCurrentPage('/new-recommendation'))
    }, [])
  
  
  const handleTab = (e) => {
    setSelected(e.target.name)

    // switch (e.target.name) {
    //   case "book":
    //     console.log("about to set")
    //      setTabComponent(<AddBookForm />)
    //      break
    //   case "episode":
    //      setTabComponent(<AddEpisodeForm />)
    //      break
    //   default:
    //     return console.log("tab not selected")
    // }
  }


  return (
    <>
      {/* <Header title="Add new recommendation" /> */}
      <div className="container mx-auto p-3">
        <div className="border-b border-gray-200 dark:border-gray-300">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2">
              <a
                name="book"
                href="#"
                className={selected === "book" ? activeClass : basicClass}
                onClick={handleTab}
              >
                Book
              </a>
            </li>
            <li className="mr-2">
              <a
                name="episode"
                href="#"
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
      {/* //!! causing the error

      the html we are rendering an unmounted component */}
      {/* Tab component changes based on what tab is selected */}
      {selected === "book" ? <AddBookForm /> : <AddEpisodeForm />}
    </>
  )
}

export default AddRecommendation


