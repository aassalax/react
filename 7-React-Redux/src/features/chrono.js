import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    value : 100,
    intervalId : undefined,
}

export const chrono = createSlice({
    name:"chrono",
    initialState,
    reducers:{
        tick: (state,action) => {
            state.value--
        },
        reset: (state,action) => {
            state.value = 100
            state.intervalId && window.clearInterval(state.intervalId)
            state.intervalId = undefined
        },
        setUpId: (state,action) => {
            state.intervalId = action.payload
        },
    }
})

export function startChrono(action) {
    return function(dispatch, getState){
        if(getState().chrono.intervalId) return
        const intervalId = setInterval(() => {
            dispatch(tick())
        },1000)
        dispatch(tick())
        dispatch(setUpId(intervalId))
    }
}

export const {tick, reset, setUpId} = chrono.actions
export default chrono.reducer