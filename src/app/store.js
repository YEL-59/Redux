
import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../features/Transaction/transactionSlice";

export const store = configureStore({
    reducer: {
        transaction: transactionReducer,
    },
});