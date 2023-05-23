import React from 'react'
import { useSelector } from 'react-redux'

function Home() {

  const state = useSelector(state => state)

  return (<>
  <h2>Counter: {state}</h2>
  </>)
}

export default Home