import React, { useState, useEffect } from "react"

function Toast(props) {
  const { title, text, toastActions } = props
    const dismissToast = () => toastActions.setShowToast(false)
  return (
    <div className="relative...">
      <div className="absolute top-5 right-5">
        <div
          id="toast-success"
          className={`flex items-top w-full max-w-xs gap-3 p-4 mb-4 text-gray-500 bg-white rounded-lg shadow transition-all duration-700 ease-in-out ${
            toastActions.showToast ? "opacity-100" : "opacity-0"
          }`}
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg ">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div>
            <div className="ml-3 text-sm font-bold">{title}</div>
            <div className="ml-3 text-sm font-normal">{text}</div>
          </div>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 "
            data-dismiss-target="#toast-success"
            aria-label="Close"
            onClick={dismissToast}
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Toast