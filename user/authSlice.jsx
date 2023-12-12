import { createSlice } from "@reduxjs/toolkit";
const ISSERVER = typeof window !== 'undefined'


const initialState = {
    token: ISSERVER && localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
    user: ISSERVER && localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    name: ISSERVER && localStorage.getItem('name') ? JSON.parse(localStorage.getItem('name')) : null,
}
// const ONE_HOUR = 60 * 60 * 1000;
// const ONE_MINUTE = 60 * 1000;
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            // const expirationTime = new Date().getTime() + ONE_MINUTE

            state.token = action.payload.token
            state.user = action.payload.data.role
            state.name = action.payload.data.name,
                // state.expirationTime = expirationTime;
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
            // localStorage.removeItem("expirationTime");
        }
    },

})
export default authSlice.reducer
export const { setToken, logout } = authSlice.actions


