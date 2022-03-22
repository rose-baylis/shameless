import React from "react"

function SelectSingle(props) {
  const { formElement } = props

  return (
    <div className="w-full mb-6 md:mb-0">
      <label
        htmlFor={formElement.htmlFor}
        className="block text-sm font-medium text-gray-700"
      >
        {formElement.label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <select
          name={formElement.name}
          id={formElement.name}
          onChange={formElement.onChange}
          required={formElement.isRequired}
          className="block appearance-none w-full border border-gray-200 text-gray-600 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          defaultValue={formElement.defaultValue}
        >
          {formElement.options.map((option, i) => {
            return (
              <option
                value={option.value}
                key={option.value}
                disabled={i === 0 ? true : false}
              >
                {option.label}
              </option>
            )
          })}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
      </div>
    </div>
  )
}

export default SelectSingle
