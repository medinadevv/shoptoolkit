import {createSlice} from "@reduxjs/toolkit";

export const BasketSlice = createSlice({
    name: "BASKET",
    initialState : {
        basket : []
    },
    reducers : {
        addBasket(state,action) {
            let  bas = state.basket.find(el => el.id === action.payload.id)
            if (bas) {
                return{...state,basket: state.basket.map((el)=> el.id === bas.id ? {...el, count: el.count + 1} :el)}
            } else {
                return {...state,basket: [...state.basket,{...action.payload, count: 1}]}
            }
        },
        delBasket(state,action){
            state.basket = state.basket.filter((el)=> el.id !== action.payload.id)
        },
        decBasket(state,action) {
            return{...state,basket: state.basket.map((el)=> el.id === action.payload.id && el.count > 1 ? {...el,count : el.count - 1 }: el)}
        }
    }
})
export const {addBasket,delBasket,decBasket} = BasketSlice.actions
export default BasketSlice.reducer




// return {...state, basket: state.basket.map((el) => {
//         if (el.id === action.payload.id && el.count > 1) {
//             return {...el, count: el.count - 1}
//         } else {
//             return el
//         }
//     })
// }