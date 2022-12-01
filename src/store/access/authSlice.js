import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState:false
    ,
    reducers:{
        authGranted: (state)=>{
            state=true;
            return state;
        },
        authDenied: (state)=>{
            state=false;
            return state;
        },
    }
});

export const {authGranted, authDenied} = authSlice.actions;
export default authSlice.reducer;