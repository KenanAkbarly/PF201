
import { createSlice } from "@reduxjs/toolkit";
const initialState = 0;
const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            return state+=1
        },
        decrement:(state)=>{
            return state-=1

        },
        reset:(state)=>{
            return state = initialState
        },
        addCustomValue:(state,action)=>{
            return state = state + action.payload
        }

    }

})

export const {increment, decrement, reset, addCustomValue} = counterSlice.actions;
export default counterSlice.reducer