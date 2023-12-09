import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loggedIn: false,
        username: '',
        request_token: ''
    },
    reducers: {
        login: (state, action) => {
            const { username, request_token } = action.payload;
            state.loggedIn = true;
            state.username = username;
            state.request_token = request_token;
        },
        logout: (state) => {
            state.loggedIn = false;
            state.username = '';
            state.request_token = '';
        },
    },
});

export const { login, logout } = authSlice.actions;

export const selectLoggedIn = (state) => state.auth.loggedIn;

export const selectUsername = (state) => state.auth.username;

export default authSlice.reducer;
