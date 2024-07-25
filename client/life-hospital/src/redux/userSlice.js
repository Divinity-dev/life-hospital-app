import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice(
    {
        name:"user",
        initialstate:{
           isFetching:true,
           currentUser:{},
           isFailure:false

        },
        reducers:{
            loginstart:(state)=>{
                state.isFetching=true;
            },
            loginsuccess:(state, action)=>{
              state.isFetching = false;
              state.currentUser = action.payload;
              state.isFailure = false;
            },
            loginfailure:(state)=>{
                state.isFetching = false;
                state.isFailure = true;
            },
            logout:(state)=>{
              state.currentUser = null;
            }
        }
    }
)

export const  { loginStart, loginfailure, loginSuccess, logout  } = userSlice.actions
export default userSlice.reducer