import { DELETE_PRODUCT, ADD_PRODUCT } from "../actions/actionTypes";

const initialState = {
  products: [
    { id: 1, name: "Television", price: 50000 },
    { id: 2, name: "Mobile", price: 30000 },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload),
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export default productReducer;
