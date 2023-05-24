import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToDo } from '../store/slices/todoSlice';

function AddTodoToolkit() {
    const [title, settitle] = useState('');

    let dispatch = useDispatch();

    const addNewTodo = () => {
        let newTodo = {
            id: Math.floor(Math.random() * 10000),
            title:title
        }

        dispatch(addToDo(newTodo))
    }

  return (<>
    <input type='text' onChange={(e) => settitle(e.target.value) } />
    <button onClick={addNewTodo}>Add New Todo</button>
  </>
  )
}

export default AddTodoToolkit