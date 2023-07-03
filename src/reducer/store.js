import {configureStore} from "@reduxjs/toolkit";
import BasketSlice from "./BasketSlice";
import FavoriteSlice from "./FavoriteSlice";
import ToDoSlice from "./ToDoSlice";

export const store = configureStore({
    reducer : {
        BasketSlice,
        FavoriteSlice,
        ToDoSlice
    }
})
