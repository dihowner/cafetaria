import { createSlice } from "@reduxjs/toolkit";
const ISSERVER = typeof window !== 'undefined'
const initialState = {
    token: ISSERVER && localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
    user: ISSERVER && localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    name: ISSERVER && localStorage.getItem('name') ? JSON.parse(localStorage.getItem('name')) : null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload.token
            state.user = action.payload.data.role
            state.name = action.payload.data.name
            localStorage.setItem('token', JSON.stringify(action.payload.token))
            localStorage.setItem('user', JSON.stringify(action.payload.data.role))
            localStorage.setItem('name', JSON.stringify(action.payload.data.name))
        },
        logout: (state) => {
            state.token = null
            state.user = null
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            localStorage.removeItem('name')
        }
    },

})
export default authSlice.reducer
export const { setToken, logout } = authSlice.actions