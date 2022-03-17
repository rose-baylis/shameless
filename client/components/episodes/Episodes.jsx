import React, { useState, useEffect } from 'react'
import Header from '../common/Header'
import AddEpisode from './AddEpisode'

function Episodes(props) {
 
  return (
  <>
  <Header title="Episodes"/>
  <AddEpisode />
  </>
   
  )
}



export default Episodes  