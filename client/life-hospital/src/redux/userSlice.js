import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice(
    {
        name:"user",
        initialState:{
           isFetching:true,
           currentUser:null,
           isFailure:false

        },
        reducers:{
            loginstart:(state)=>{
                state.isFetching=true;
            },
            loginSuccess:(state, action)=>{
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

export const  { loginstart, loginfailure, loginSuccess,  logout } = userSlice.actions
export default userSlice.reducer