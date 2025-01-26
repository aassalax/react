import counter from "./features/counter.js";
import {configureStore} from "@reduxjs/toolkit";
import fruits from "./features/fruits.js";
import fruitsCart from "./features/fruitsCart.js";
import mango from "./assets/mango.jpeg";


export const store = configureStore({
    reducer: {
        counter,
        fruits,
        fruitsCart
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        /*customMiddleware*/
    )
})

function customMiddleware(store) {
    return function (next) {
        return function (action) {
            //console.log(store.getState());
            //console.log(next);
            //console.log(action);

            //remplacer toute les actions par une autre :
            /*next({
                type: "fruitsCart/addOne",
                payload: {
                    name: "Mango",
                    url: "mangoURL",
                    price: 999,
                    id: 15613186
                }
            })*/
        }
    }
}