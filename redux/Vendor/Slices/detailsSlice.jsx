import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Details: null
}
const Details = createSlice({
    name: 'details',
    initialState,
    reducers: {
        setDetails(state, action) {
            state.Details = { ...state.Details, ...action.payload };
        }
    }
})


export const { setDetails } = Details.actions
export default Details.reducer