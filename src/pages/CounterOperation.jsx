import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../store/actions/counterAction';

function CounterOperation() {

    const [value, setvalue] = useState(0);


    let dispatch = useDispatch();

    let {counterState} = useSelector(state => state)

    const increase = () => {
        dispatch(counterActions.increase())
    }

    const decrease = () => {
        dispatch(counterActions.decrease())
    }

    const increaseByValue = () => {
        dispatch(counterActions.increaseByValue(value))
    }

    const empty = () => {
        dispatch(counterActions.empty())
    }

    return (<>
        <div>
            <h1>Counter: {counterState} </h1>
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

