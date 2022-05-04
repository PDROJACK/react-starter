import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

type Link = {
    website: string,
    url: string
}

export interface Post {
    username: string,
    instagram: string,
    links: Link[],
    email: string,
    profile: string
}

const initialState: Post = {
    username: "pdrojack",
    instagram: "pdrojack",
    links: [{
        website: "spotify",
        url: "http://spotify.com/pdrojac"
    }],
    email: "pdro@jack.com",
    profile: "profile.photo"
}

export const postSlice = createSlice({

    name: "post",

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

export const {getProducts, addProduct} = postSlice.actions;

export default postSlice.reducer;