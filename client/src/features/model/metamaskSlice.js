import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn : false,
    user_address : null
}

const metamaskSlice = createSlice({

    name : 'metamaskLogin',
    initialState,
    reducers : {
        metamaskLogin : (state, action) => {
            state.isLoggedIn = true;
            state.user_address = action.payload.account;
        },
        metamaskLogout : (state) => {
            state.user_address = null;
            state.isLoggedIn = false;
        }
    }
})

export const { metamaskLogin, metamaskLogout } = metamaskSlice.actions;

export default metamaskSlice.reducer;