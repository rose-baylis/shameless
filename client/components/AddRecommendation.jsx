import React from "react"
import Header from "./common/Header"
import AddBookForm from "./books/AddBookForm"

function AddRecommendation() {
  return (
    <>
      {/* <Header title="Add new recommendation" /> */}
    <div  className="container mx-auto p-3">
      <div class="border-b border-gray-200 dark:border-gray-300">
        <ul class="flex flex-wrap -mb-px">
          <li class="mr-2">
            <a
              href="#"
              class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Book
            </a>
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block py-4 px-4 text-sm font-medium text-center text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
              aria-current="page"
            >
              Episode
            </a>
          </li>
          {/* <li class="mr-2">
            <a
              href="#"
              class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Settings
            </a>
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Contacts
            </a>
          </li>
          <li>
            <a class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
              Disabled
            </a>
          </li> */}
        </ul>
      </div>
      </div>

      <AddBookForm />
    </>
  )
}

export default AddRecommendation
