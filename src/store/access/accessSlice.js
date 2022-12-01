import {createSlice} from '@reduxjs/toolkit';

export const accessSlice = createSlice({
    name: 'access',
    initialState:false
    ,
    reducers:{
        accessGranted: (state)=>{
            state=true;
            return state;
        },
        accessDenied: (state)=>{
            state=false;
            return state;
        },
    }
});

export const {accessGranted, accessDenied} = accessSlice.actions;
export default accessSlice.reducer;