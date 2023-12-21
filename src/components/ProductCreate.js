import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/actions';
import "../styles/ProductCreate.css"

const ProductCreate = () => {
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });
  const [notification, setNotification] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Check if the input is for the "Name" field and if it contains numeric characters
    if (name === 'name' && /\d/.test(value)) {
      // If numeric characters are present, do not update the state
      return;
    }

    // For the "Price" field, allow only numeric characters
    if (name === 'price' && isNaN(value)) {
      // If non-numeric characters are present, do not update the state
      return;
    }

    setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleAddProduct = () => {

    // Check if both name and price are not blank
    if (newProduct.name.trim() === '' || newProduct.price.trim() === '') {
      setNotification({ type: 'error', message: 'Name and price cannot be blank' });
      return;
    }

    dispatch(addProduct(newProduct));
    setNotification({ type: 'success', message: 'Product added successfully' });
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  // const containerStyle = {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: '40vh',
  // };

  // const contentStyle = {
  //   textAlign: 'center',
  //   maxWidth: '300px',
  // };

  // const notificationStyle = {
  //   padding: '10px',
  //   marginBottom: '10px',
  //   borderRadius: '4px',
  //   color: '#fff',
  //   fontWeight: 'bold',
  // };

  // const successStyle = {
  //   background: '#4CAF50', // Green background for success
  // };

  // const formStyle = {
  //   display: 'flex',
  //   flexDirection: 'column',
  // };

  // const labelStyle = {
  //   marginBottom: '8px',
  //   color: '#333',
  // };

  // const inputStyle = {
  //   padding: '8px',
  //   marginBottom: '16px',
  //   border: '1px solid #ccc',
  //   borderRadius: '4px',
  // };

  // const buttonStyle = {
  //   maxWidth: '100px',
  //   padding: '10px',
  //   background: '#008CBA', // Blue background for the button
  //   color: '#fff',
  //   cursor: 'pointer',
  //   border: 'none',
  //   borderRadius: '4px',
  //   transition: 'background 0.3s ease-in-out',
  //   marginLeft: '80px'
  // };

  // const errorStyle = {
  //   background: 'red', // Red background for error
  // };

  return (
    <div className="container">
      <div className="content">
        <h2 style={{color: "black"}}>Create Product</h2>
        {notification && (
          <div className={`notification ${notification.type === 'success' ? 'success' : 'error'}`}>
            {notification.message}
          </div>
        )}
        <form className="form">
          <label className="label">
            Name:{' '}
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              className="input"
            />
          </label>
          <label className="label">
            Price:{' '}
            <input
              type="text"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              className="input"
            />
          </label>
          <button
            type="button"
            onClick={handleAddProduct}
            className="button"
            id='createButton'
            onMouseOver={(e) => (e.target.style.background = '#007BAC')}
            onMouseOut={(e) => (e.target.style.background = '#008CBA')}
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductCreate;
