import { CART_ADD_ITEM } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch(action.type) {
        case CART_ADD_ITEM:
            const existItem = state.cartItems.find((x) => x.product === action.payload.product)
            if(existItem){
                return {...state}
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                }
            }

        default: 
            return state
    }
}