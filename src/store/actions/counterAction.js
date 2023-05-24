export const counterActions = {
    increase: () => {
        return { type: 'INCREASE' }
    },
    decrease: () => {
        return { type: 'DECREASE' }
    },
    increaseByValue: (payload) => {
        return {
            type:'INCREASE_BY_VALUE',
            payload: Number(payload)
        }
    },
    empty : () => {
        return {
            type:'EMPTY'
        }
    }
}