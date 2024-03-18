import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./TodoSlice";

const store = configureStore({
    reducer:{
        todos: todoSlice.reducer
    }
})


export default store