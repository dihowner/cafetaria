import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    banks: null
}

const bankSlice = createSlice({
    name: 'bankList',
    initialState,
    reducers: {
        setBanks: (state, action) => {
            state.banks = action.payload
        }
    }
})
export default bankSlice.reducer
export const { setBanks } = bankSlice.actions