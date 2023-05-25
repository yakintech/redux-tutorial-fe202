import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    orders: [],
    loading: true,
    error: {}
}


//middleware
export const getOrders = createAsyncThunk(
    "api/orders",
    async (thunkAPI, {rejectWithValue}) => {
        try {
            let res = await axios.get('https://northwind.vercel.app/api/orders');
            return res.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const orderSlice = createSlice({
    name: 'orderSlice',
    initialState: initialState,
    extraReducers: {
        [getOrders.pending]: (state) => {
            state.loading = true
            state.orders = []
            state.error = null
        },
        [getOrders.rejected]: (state, { payload }) => {
             state.loading = false
             state.orders = []
             state.error = payload;
        },
        [getOrders.fulfilled]: (state, { payload }) => {
            state.orders = payload;
            state.loading = false
            state.error = null
        }
    }
})


export default orderSlice.reducer