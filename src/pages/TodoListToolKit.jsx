import React from 'react'
import { useSelector } from 'react-redux'

function TodoListToolKit() {

    let { todoReducer } = useSelector(state => state);

    console.log('todoReducer', todoReducer.todos);

    return (<>
        <ul>
            {
                todoReducer.todos && todoReducer.todos.map(item => <li>{item.title}</li>)
            }

        </ul>

    </>
    )
}

export default TodoListToolKit