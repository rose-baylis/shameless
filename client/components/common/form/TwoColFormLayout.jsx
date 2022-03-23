import React from "react"

function TwoColForm(props) {
  const { heading, subheading } = props
  return (
    <div className="md:grid md:grid-cols-3 md:gap-9 md:p-6">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {heading}
          </h3>
          <p className="mt-1 text-sm text-gray-600">{subheading}</p>
        </div>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="bg-white space-y-6">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TwoColForm
