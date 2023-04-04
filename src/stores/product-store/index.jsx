import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    products : [] ,
    product : {}
}

export const fetchProduct = createAsyncThunk("product/fetchProduct" , async () => {
    try{
        const json = await fetch("https://fakestoreapi.com/products");
        const data = await json.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
})

export const fetchProductDetail = createAsyncThunk("product/fetchProductDetail" , async (id) => {
    try{
        const json = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await json.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
})

export const { reducer , actions} = createSlice({
    name : "products" ,
    initialState ,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.products = action.payload
        })
        builder.addCase(fetchProductDetail.fulfilled , (state , action) => {
            state.product = action.payload
        })
    }
})