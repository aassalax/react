import counter from "./features/counter.js";
import {configureStore} from "@reduxjs/toolkit";
import fruits from "./features/fruits.js";
import fruitsCart from "./features/fruitsCart.js";


export const store = configureStore({
    reducer : {
        counter,
        fruits,
        fruitsCart
    }
})