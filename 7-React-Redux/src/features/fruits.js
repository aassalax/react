import {createSlice} from "@reduxjs/toolkit";
import mango from '../assets/mango.jpeg'
import watermelon from '../assets/watermelon.jpeg'


const initialState = {
    list : [
        {
            name: "Mango",
            url: mango,
            price:5,
            id: 15613186
        },
        {
            name: "Watermelon",
            url: watermelon,
            price:7,
            id: 24596236
        },
    ]
}

export const fruits = createSlice({
    name: "fruits",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase("fruitsCart/addOne", (state, action) => {
            console.log("Hello fruit reducer is triggered by an fruitsCart actions")
        })
    }
})

export default fruits.reducer