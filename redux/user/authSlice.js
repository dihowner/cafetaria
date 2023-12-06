import { createSlice } from '@reduxjs/toolkit'
const isServer = typeof window === 'undefined'
const initialState = {
  // loading: false,
  currentUser:
    !isServer && localStorage.getItem('currentUser')
      ? JSON.parse(localStorage.getItem('currentUser'))
      : null,
  // error: null,
  // success: false,
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
