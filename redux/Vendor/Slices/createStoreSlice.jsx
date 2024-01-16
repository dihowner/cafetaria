import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    storeProp: null
}


const createMealSlice = createSlice({
    name: 'storeProp',
    initialState,
    reducers:{
        set_storeProp(state,action){
            state.storeProp=action.payload
        },
        
    }
})