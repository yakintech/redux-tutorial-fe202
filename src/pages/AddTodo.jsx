import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function AddTodo() {

    const [title, settitle] = useState('');

    let dispatch = useDispatch();

    let todos = useSelector(state => state)

    const add = () => {
        let newTodoItem = {
            id: Math.floor(Math.random() * 1000),
            title: title
        }

        dispatch({ type: 'ADD', payload: newTodoItem });
    }


    const removeToDo = (id) => {
        dispatch({type:'REMOVE', payload:id})
    }

    return (<>
        <div>
            <label htmlFor="">Title</label>
            <input type='text' onChange={(e) => settitle(e.target.value)} />
            <button onClick={add}>Add</button>
        </div>
        <div>
            <ul>
                {
                    todos && todos.map((item) => <li onClick={() => removeToDo(item.id)} key={item.id}>{item.title}</li>)
                }
            </ul>
        </div>
    </>
    )
}

export default AddTodo


// {
//     id:1,
//     title:'Login sayfası yapılacak'
// }