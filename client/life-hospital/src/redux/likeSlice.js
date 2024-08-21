import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
    name:"like",
    initialState:{
        like:null
    },
    reducers:{
        addlike:(state, action)=>{
           state.like=action.payload
        },
        removelike:(state)=>{
            state.like=null
        }
    }
})

export const {addlike, removelike} = likeSlice.actions
export default likeSlice.reducer