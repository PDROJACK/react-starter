import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

type Link = {
    website: string,
    url: string
}

export interface User {
    username: string,
    instagram: string,
    links: Link[],
    email: string,
    profile: string
}

const initialState: User = {
    username: "pdrojack",
    instagram: "pdrojack",
    links: [{
        website: "spotify",
        url: "http://spotify.com/pdrojac"
    }],
    email: "pdro@jack.com",
    profile: "profile.photo"
}

export const userSlice = createSlice({

    name: "user",

    initialState,

    reducers: {
        
        getProducts: (state, action: PayloadAction<string>) => {
            // find product by movie id
        
        },

        addProduct: (state, action: PayloadAction<number>) => {
            // Get Input about product and add it to DB

        }

    }

})

export const {getProducts, addProduct} = userSlice.actions;

export default userSlice.reducer;