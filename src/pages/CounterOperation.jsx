import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function CounterOperation() {

    const [value, setvalue] = useState(0);


    let dispatch = useDispatch();

    let state = useSelector(state => state)

    const increase = () => {
        dispatch({ type: 'INCREASE' })
    }

    const decrease = () => {
        dispatch({ type: 'DECREASE' })
    }

    const increaseByValue = () => {
        dispatch({type:'INCREASE_BY_VALUE', payload:Number(value)})
    }

    const empty = () => {
        dispatch({type:'EMPTY'})
    }

    return (<>
        <div>
            <h1>Counter: {state} </h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>

            <div>
                <label>Value:</label>
                <input type="text" onChange={(e) => setvalue(e.target.value)} />
                <button onClick={increaseByValue}>Increase By Value</button>
            </div>
            <div>
                <button onClick={empty}>Empty</button>
            </div>
        </div>

    </>
    )
}

export default CounterOperation