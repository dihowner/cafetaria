import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allstat: null
}

const statSlice = createSlice({
    name: 'stat',
    initialState,
    reducers: {
        setStat: (state, action) => {
            state.allstat = action.payload
        }
    }
})
export default statSlice.reducer
export const { setStat } = statSlice.actions