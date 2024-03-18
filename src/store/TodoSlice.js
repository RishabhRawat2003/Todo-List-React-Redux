import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'todo',
    initialState : [],
    reducers : {
        addTodo(state,action){
            state.push(action.payload)
        },
        removeTodos(state,action){
            state.splice(action.payload,1)
        }
    }
})


export const {addTodo , removeTodos} = todoSlice.actions;
export default todoSlice;