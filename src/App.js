import React from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ProductCreate from "./components/ProductCreate";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/create" element={<ProductCreate />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
