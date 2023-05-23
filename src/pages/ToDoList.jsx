import React from 'react'
import { useSelector } from 'react-redux'

function ToDoList() {

    let {todoState} = useSelector(state => state);


  return (<>
  <ul>
    {
        todoState && todoState.map((item) => <li key={item.id}>{item.title}</li>)
    }
  </ul>
  </>
  )
}

export default ToDoList