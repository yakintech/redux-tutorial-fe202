import React from 'react'
import { useSelector } from 'react-redux'

function ToDoList() {

    let todos = useSelector(state => state);


  return (<>
  <ul>
    {
        todos && todos.map((item) => <li key={item.id}>{item.title}</li>)
    }
  </ul>
  </>
  )
}

export default ToDoList