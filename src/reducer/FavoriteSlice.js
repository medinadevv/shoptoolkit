import {createSlice} from "@reduxjs/toolkit";

export const  FavoriteSlice = createSlice({
    name: "FAVORITE" ,
    initialState: {
        favorite:[]
    },
    reducers: {
        addFavorite(state,action){
            let fav = state.favorite.find(el=> el.id === action.payload.id)
            if (fav) {
                return{...state,favorite: state.favorite.filter((el)=> el.id !== fav.id)}
            } else {
                return {...state,favorite: [...state.favorite, {...action.payload}]}
            }
        }
    }
})

export const {addFavorite} = FavoriteSlice.actions
export default FavoriteSlice.reducer