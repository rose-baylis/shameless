import React from "react"

function PrimaryButton(props) {
  const { type, text } = props

  return (
    <button
    className="bg-green-600 text-white uppercase tracking-wide  text-xs font-bold p-3 rounded"
    type={type}
  >
    {text}
  </button>
  )
}

export default PrimaryButton
