import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface ProductState {
    products: string[]
}

const initialState: ProductState = {
    products: []
}

export const productSlice = createSlice({

    name: "product",

    initialState,

    reducers: {
        getProducts: (state, action: PayloadAction<string>) => {
            // find product by movie id
            state.products = [ "n1", "n2", "n3" ]
        
        },

        addProduct: (state, action: PayloadAction<number>) => {
            // Get Input about product and add it to DB

        }

    }

})

export const {getProducts, addProduct} = productSlice.actions;

export default productSlice.reducer;