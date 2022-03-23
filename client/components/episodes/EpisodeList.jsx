import React, { Component, useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchEpisodes } from "../../actions"

function EpisodeList(props) {
  const {episodes} = props


  return (
    <>
      <div className="px-4 py-4 md:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-3">
          All Episodes
        </h3>
        <div className="relative overflow-x-auto shadow-sm sm:rounded-lg  border border-gray-200 ">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-600 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Episode date
                </th>
                <th scope="col" className="px-6 py-3">
                  Episode name
                </th>
              </tr>
            </thead>
            <tbody>
              {episodes?.map((episode) => {
                return (
                  <tr
                    key={episode.id}
                    className="border-b  odd:bg-white even:bg-gray-50"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                    >
                      {episode.episode_date}
                    </th>
                    <td className="px-6 py-4">{episode.episode_name}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default EpisodeList
