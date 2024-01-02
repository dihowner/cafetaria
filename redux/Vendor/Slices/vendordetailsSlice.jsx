import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    vendorDetails: null
}
const vendorDetails = createSlice({
    name: 'vendor',
    initialState,
    reducers: {
        setVendorDetails(state, action) {
            state.vendorDetails = action.payload
        }
    }
})


export const { setVendorDetails } = vendorDetails.actions
export default vendorDetails.reducer