import { createSlice } from '@reduxjs/toolkit'
const isServer = typeof window === 'undefined'
const initialState = {
  currentUser: localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser'))
    : null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.currentUser = action.payload
      localStorage.setItem('currentUser', JSON.stringify(action.payload))
    },
    logout: (state, action) => {
      state.currentUser = null
      localStorage.removeItem('currentUser')
    },
  },
  // extraReducers:{}
})
export default authSlice.reducer
export const { setCredentials, logout } = authSlice.actions
