import React from 'react'
import { useSelector } from 'react-redux'

function Home() {

  const {counterState} = useSelector(state => state)

  return (<>
  <h2>Counter: {counterState}</h2>
  </>)
}

export default Home