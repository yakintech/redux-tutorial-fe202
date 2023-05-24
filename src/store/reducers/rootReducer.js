import { combineReducers } from "redux";
import { CounterReducer } from "./counterReducer";
import { favoriteReducer } from "./favoritesReducer";
import { todoReducer } from "./todoReducer";
import { SupplierReducer } from "./SupplierReducer";


export const rootReducer = combineReducers({
    counterState : CounterReducer,
    favoritesState: favoriteReducer,
    todoState: todoReducer,
    suppliersState: SupplierReducer
})