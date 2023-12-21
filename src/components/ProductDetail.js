import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { id } = useParams();
    const product = useSelector(state => state.products.products.find(p => p.name === id));

    console.log("id:", id);
    console.log("products in store:", product);

    const containerStyle = {
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
    };

    const detailStyle = {
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: "#f8f9fa", // Light gray background
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    };

    const titleStyle = {
        fontSize: "24px",
        marginBottom: "10px",
        color: "white",
    };

    const priceStyle = {
        fontSize: "18px",
        color: "#007BFF",
        marginBottom: "20px",
    };

    const notFoundStyle = {
        fontSize: "18px",
        color: "#dc3545",
    };

    return (
        <div style={containerStyle}>
            <h2 style={titleStyle}>Product Details</h2>
            {product ? (
                <div style={detailStyle}>
                    <h3 style={{ color: "black" }}>{product.name}</h3>
                    <p style={priceStyle}>Price: Rs.{product.price}</p>
                </div>
            ) : (
                <div style={notFoundStyle}>Product not found</div>
            )}
        </div>
    );
};

export default ProductDetail;
