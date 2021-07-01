
import { CartActionType } from "./cart.type";

import { addItemToCart, removeItemFromCart } from "./cart.utils";

 const INITIAL_STATE = {
    hidden:true,
    cartItems:[]
}

const cartReducer = (state=INITIAL_STATE, action) => {

    switch(action.type) {
        case CartActionType.CART_TOOGLE_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
             };
        case CartActionType.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CartActionType.CART_ITEM_REMOVE:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id  
                )
            };
        case CartActionType.REMOVE_ITEM :
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
       default:
           return state; 
    }
}
export default cartReducer;