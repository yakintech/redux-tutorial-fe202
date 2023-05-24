export function SupplierReducer(state, action) {
    if (state == undefined)
        return [];

    if (action.type == 'ADD') {
        return [...state, action.payload]
    }
    else if (action.type == 'EMPTY') {
        return []
    }
    else if (action.type == 'LOAD') {
        return action.payload
    }
    else {
        return state;
    }
}