import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    bankDetails: null
}

const bankDetailSlice = createSlice({
    name: 'Bank Details',
    initialState,
    reducers: {
        setBankDetails: (state, action) => {
            state.bankDetails = action.payload
        }
    }
})
export default bankDetailSlice.reducer
export const { setBankDetails } = bankDetailSlice.actions