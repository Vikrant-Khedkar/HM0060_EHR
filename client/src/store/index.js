import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../features/model/loginSlice';
import metamaskReducer from '../features/model/metamaskSlice'

export const store = configureStore({

    reducer : {
        loggedIn : loginReducer,
        metamaskLogin : metamaskReducer
    },
})