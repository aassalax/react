import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

export const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment : (state, action) => {
            console.log(action);
            state.value++
        },
        decrement : (state, action) => {
            state.value--
        },
        multiply : (state, action) => {
            if(action.payload === 0 ) state.value = 0
            else state.value *= 10
        },
        divide : (state, action) => {
            state.value /= 10
        },
    }
})
export const {
    increment,
    decrement,
    multiply,
    divide
} = counter.actions
export default counter.reducer