import React, { useState, useEffect } from "react"

function TextInput(props) {
  const { formElement } = props

  return (
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label
        htmlFor={formElement.name}
        className="block text-sm font-medium text-gray-700"
      >
        {formElement.label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="text"
          name={formElement.name}
          id={formElement.name}
          onChange={formElement.onChange}
          required={formElement.isRequired}
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full  pr-12 sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </div>
  )
}

export default TextInput
