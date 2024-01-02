import { createSlice } from "@reduxjs/toolkit";
const ISSERVER = typeof window !== 'undefined'


const initialState = {
    token: ISSERVER && localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
    user: ISSERVER && localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    name: ISSERVER && localStorage.getItem('name') ? JSON.parse(localStorage.getItem('name')) : null,
    Id: ISSERVER && localStorage.getItem('Id') ? JSON.parse(localStorage.getItem('Id')) : null,
    vendor_id: ISSERVER && localStorage.getItem('vendor_id') ? JSON.parse(localStorage.getItem('vendor_id')) : null
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload.token,
                state.user = action.payload.data.role,
                state.name = action.payload.data.name,
                state.Id = action.payload.data.id,
                localStorage.setItem('token', JSON.stringify(action.payload.token)),
                localStorage.setItem('user', JSON.stringify(action.payload.data.role)),
                localStorage.setItem('name', JSON.stringify(action.payload.data.name)),
                localStorage.setItem('Id', JSON.stringify(action.payload.data.id))
            { state.user === 'vendor' ? localStorage.setItem('vendor_id', JSON.stringify(action.payload.data.vendor_id)) : null }

        },
        logout: (state) => {
            state.token = null
            state.user = null
            state.name = null
            state.Id = null
            state.vendor_id = null
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            localStorage.removeItem('name')
            localStorage.removeItem('Id')
            localStorage.removeItem('vendor_id')
        }
    },

})
export default authSlice.reducer
export const { setToken, logout } = authSlice.actions


