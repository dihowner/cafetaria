import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    token: null,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload.token
            state.user = action.payload.data.role
        }
    },
    logout: (state) => {

        state.token = null
        state.user = null
    }
})
export default authSlice.reducer
export const { setToken, logout } = authSlice.actions