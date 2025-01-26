import counter from "./features/counter.js";
import {configureStore} from "@reduxjs/toolkit";


export const store = configureStore({
    reducer : {
        counter
    }
})