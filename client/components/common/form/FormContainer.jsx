import React from "react"
import PrimaryButton from "../PrimaryButton"

function FormContainer(props) {

  return (
    <div className="grid grid-cols-1 gap-6 px-4 py-4 sm:p-6">
        {props.children}
    </div>
    
  )
}

export default FormContainer
