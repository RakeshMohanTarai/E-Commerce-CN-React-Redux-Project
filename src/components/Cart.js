import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDeleteCart } from "../actions/actions";


const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cart);
    const [notification, setNotification] = useState('null');

    const deleteCartItem = (productId) => {
        // Delete the product from both products and cart
        console.log("delete",productId);
        dispatch(handleDeleteCart(productId));

        setNotification({
            type: "delete",
            message: "Item Removed From Cart",
        });

        setTimeout(() => {
            setNotification(null);
        }, 2000);
    };

    const cartContainerStyle = {
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f8f9fa", // Light gray background
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        marginTop: "50px"
    };

    const cartHeaderStyle = {
        fontSize: "24px",
        marginBottom: "10px",
        color: "#333",
    };

    const listItemStyle = {
        listStyle: "none",
        padding: "10px",
        marginBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff", // White background for each item
        border: "1px solid #ddd",
        borderRadius: "4px",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
    };

    const itemNameStyle = {
        flex: 1,
        marginRight: "10px",
        color: "black",
    };

    const itemPriceStyle = {
        minWidth: "70px",
        textAlign: "right",
        color: "#007BFF",
    };

    return (
        <div style={cartContainerStyle}>
            <h2 style={cartHeaderStyle}>Shopping Cart</h2>
            {notification && (
                <div
                    className={`notification ${notification.type === "delete" ? "delete" : notification.type
                        }`}
                >
                    {notification.message}
                </div>
            )}
            <ul style={{ padding: 0 }}>
                {cartItems.map(item => (
                    <li key={item.id} style={listItemStyle}>
                        <span style={itemNameStyle}>{item.name}</span>
                        <span style={itemPriceStyle}>Rs.{item.price}</span>
                        <button className="button delete"
                            onClick={() => deleteCartItem(item.id)}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
