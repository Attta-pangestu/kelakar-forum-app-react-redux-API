import { configureStore } from "@reduxjs/toolkit";
// reducer
import authUserReducer from "./authUser/reducer";


const store = configureStore({
    reducer: {
        authUser: authUserReducer, 
    }
})