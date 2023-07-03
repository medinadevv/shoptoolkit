import {createSlice} from "@reduxjs/toolkit";

export const ToDoSlice = createSlice({
    name: "TODO",
    initialState: {
        todo : []
    },
    reducers : {
        addTodo(state,action){
            return{...state,todo: action.payload}
        }
    }
})
export const {addTodo} = ToDoSlice.actions
export default ToDoSlice.reducer