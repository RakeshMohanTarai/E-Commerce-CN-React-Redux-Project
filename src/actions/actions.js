import { DELETE_PRODUCT, ADD_TO_CART, ADD_PRODUCT, DELETE_PRODUCT_FROM_CART, DELETE_CART_ITEM } from "./actionTypes";

export const deleteProduct = (productId) => ({
   type: DELETE_PRODUCT,
   payload: productId 
});

export const addToCart = (product) => ({
   type: ADD_TO_CART,
   payload: product
});

export const addProduct = (newProduct) => ({
   type: ADD_PRODUCT,
   payload: newProduct,
 });

export const deleteProductFromCart = (productId) => ({
   type: DELETE_PRODUCT_FROM_CART,
   payload: productId ,
 });

export const handleDeleteCart = (productId) => ({
   type: DELETE_CART_ITEM,
   payload: productId ,
 });


 
