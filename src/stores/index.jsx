import { configureStore } from "@reduxjs/toolkit";
import { reducer as userReducer } from "./user-stores";
import { reducer as productReducer } from "./product-store";
import { reducer as basketReducer } from "./basket-store";

export const store  = configureStore({
    reducer : {
        user : userReducer, 
        products :  productReducer ,
        basket : basketReducer
    }
})