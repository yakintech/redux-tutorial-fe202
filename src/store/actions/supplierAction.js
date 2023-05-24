import axios from "axios"

export const supplierActions = {
    add: (payload) => {
        return {
            type: 'ADD',
            payload: payload
        }
    },
    empty: () => {
        return {
            type: 'EMPTY'
        }
    },
    load: () => {

        return async (dispatch) => {
            axios.get('https://northwind.vercel.app/api/suppliers')
                .then(res => {
                    dispatch({
                        type: 'LOAD',
                        payload: res.data
                    })
                })
        }
    }
}