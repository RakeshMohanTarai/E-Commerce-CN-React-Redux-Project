// ProductList.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteProduct, deleteProductFromCart } from "../actions/actions";
import { Link } from "react-router-dom";
import "../styles/ProductList.css"; 

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.cart.cart);
  const [notification, setNotification] = useState(null);

  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  const handleDelete = (productId) => {
    // Delete the product from both products and cart
    dispatch(deleteProduct(productId));

    // Check if the product is in the cart and delete it from the cart if it is
    if (isProductInCart(productId)) {
      dispatch(deleteProductFromCart(productId));
    }

    setNotification({
      type: "delete",
      message: "Product Deleted Successfully",
    });

    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  const handleAddToCart = (product) => {
    if (isProductInCart(product.id)) {
      setNotification({
        type: "error",
        message: "Product is already in the cart",
      });
    } else {
      dispatch(addToCart(product));
      setNotification({
        type: "success",
        message: "Product Added To Cart",
      });
    }

    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

//   const listItemStyle = {
//     listStyle: "none",
//     border: "1px solid #ddd",
//     padding: "15px",
//     marginBottom: "15px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     borderRadius: "8px",
//     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//     background: "#fff",
// };

// const buttonStyle = {
//     padding: "10px",
//     margin: "0 10px",
//     cursor: "pointer",
//     borderRadius: "4px",
//     border: "none",
//     outline: "none",
//     fontSize: "14px",
//     fontWeight: "bold",
//     transition: "background-color 0.3s, color 0.3s, transform 0.3s",
// };

// const hoverButtonStyle = {
//     ...buttonStyle,
//     ":hover": {
//         background: "#218838", // Darker shade on hover
//         transform: "translateY(-2px)", // Move up on hover
//     },
// };

// const linkStyle = {
//     textDecoration: "none",
//     color: "#007BFF",
//     margin: "0 10px",
//     fontSize: "14px",
//     fontWeight: "bold",
// };

  return (
    <div className="product-list">
      <h2 style={{ textAlign: "center" }}>Product List</h2>
      {/* {notification && (
                <div style={{
                    maxWidth: "148px",
                    textAlign: "right",
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "4px",
                    color: "#fff",
                    background: notification.type === "error" ? "#dc3545" : "#4CAF50"
                }}>
                    {notification.message}
                </div>
            )} */}
      {notification && (
        <div
          className={`notification ${
            notification.type === "delete" ? "delete" : notification.type
          }`}
        >
          {notification.message}
        </div>
      )}
      <ul>
        {products.map((product) => (
          <li key={product.id} className="list-item">
            <span className="product-info">
              {product.name} - Rs.{product.price}
            </span>
            <button
              className="button add-to-cart"
              onClick={() => handleAddToCart(product)}
            >
              Add To Cart
            </button>
            <Link to={`/product/${product.name}`} className="details">
              Details
            </Link>
            <button
              className="button delete"
              onClick={() => handleDelete(product.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
