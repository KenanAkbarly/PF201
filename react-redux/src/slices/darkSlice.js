import { createSlice } from "@reduxjs/toolkit";

const darkMode = createSlice({
    name:'darkMode',
    initialState:false,
    reducers:{
        toggleDarkMode:(state)=>{
            return !state
        }
    }
})

export const {toggleDarkMode} = darkMode.actions;
export default darkMode.reducer;