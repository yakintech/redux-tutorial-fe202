import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementByValue } from '../store/slices/counterSlice';

function CounterReduxToolKit() {
    const [number, setnumber] = useState(0)


    let { counterReducer } = useSelector(state => state);

    let dispatch = useDispatch();

    const increaseCounter = () => {
        dispatch(increment())
    }

    const increaseByValueCounter = () => {
        dispatch(incrementByValue(Number(number)))
    }

    return (<>
        <h1>{counterReducer.value}</h1>
        <button onClick={increaseCounter}>Increase</button>

        <hr></hr>

        <input type='text' onChange={(e) => setnumber(e.target.value)} />
        <button onClick={increaseByValueCounter}>Increase</button>
    </>
    )
}

export default CounterReduxToolKit