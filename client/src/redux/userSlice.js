import {createSlice} from "@reduxjs/toolkit"

const user = JSON.parse(localStorage.getItem("user"));

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: user ? user : null,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state) => {
          state.isFetching = true
        },
        loginSuccess: (state, action) => {
          state.isFetching = false,
          state.currentUser = action.payload
          localStorage.setItem('user', JSON.stringify(action.payload))
        },
        loginFailure: (state) => {
          state.isFetching = false,
          state.error = true
        },
        logout: (state) => {
          state.currentUser = null
        }
    }
});

export const {loginFailure, loginStart, loginSuccess} = userSlice.actions
export default userSlice.reducer