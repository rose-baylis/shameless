import React from "react"
import PrimaryButton from "../PrimaryButton"

function FormFooter(props) {

  return (
    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
    <PrimaryButton text="Save" type="submit" />
  </div>
  )
}

export default FormFooter
