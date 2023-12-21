import { ADD_TO_CART, DELETE_PRODUCT_FROM_CART, DELETE_CART_ITEM } from "../actions/actionTypes";

const intialState = {
    cart: [],
};

const cartReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case DELETE_PRODUCT_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };
        case DELETE_CART_ITEM:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };
        default:
            return state;
    }
};

export default cartReducer;




