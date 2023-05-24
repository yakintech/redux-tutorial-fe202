const { createSlice } = require("@reduxjs/toolkit");


const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
        empty: (state) => {
            state.value = 0;
        },
        incrementByValue: (state, action) =>{
            state.value = state.value + action.payload
        }
    }
})


export default counterSlice.reducer

export const { increment, decrement, empty, incrementByValue } = counterSlice.actions