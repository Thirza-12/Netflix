import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
const appstore=configureStore({
    reducer: {
        user: userSlice,
    },
})

export default appstore;