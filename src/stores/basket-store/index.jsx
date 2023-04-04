import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket : []
}

export const { reducer , actions } = createSlice({
    name : "basket",
    initialState,
    reducers : {
        addToBasket : (state, action) => {
            const product = action.payload
            const basPro = state.basket.find(b => b.id === product.id)
            if(basPro){
                basPro.count++
            }
            else{
                state.basket.push(action.payload)
            }
        }
    }
})