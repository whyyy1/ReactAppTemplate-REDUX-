import { configureStore } from "@reduxjs/toolkit"
import userReducer from './UserInfo'

export const mainData = configureStore({
    reducer: {
        users: userReducer
    }
})