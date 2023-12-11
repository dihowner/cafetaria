import { createSlice } from "@reduxjs/toolkit";
const ISSERVER = typeof window !== 'undefined'
const initialState = {
    token: ISSERVER && localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
    user: ISSERVER && localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload.token
            state.user = action.payload.data.role
            localStorage.setItem('token', JSON.stringify(action.payload.token))
            localStorage.setItem('user', JSON.stringify(action.payload.data.role))
        },
        logout: (state) => {
            state.token = null
            state.user = null
            localStorage.removeItem('token')
            localStorage.removeItem('user')
        }
    },

})
export default authSlice.reducer
export const { setToken, logout } = authSlice.actions