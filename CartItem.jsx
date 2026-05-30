import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (item.cost * item.quantity), 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (itemName) => {
    dispatch(removeItem(itemName));
  };

  const handleCheckout = () => {
    alert('Checkout functionality is Coming Soon!');
  };

  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Your Shopping Cart</h2>
      <h3 style={{ textAlign: 'right', color: '#2f855a' }}>Total Cart Amount: ${calculateTotalAmount()}</h3>
      
      <div style={{ marginTop: '20px' }}>
        {cartItems.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#718096' }}>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', padding: '15px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <img src={item.image} alt={item.name} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '4px' }} />
                <div>
                  <h4 style={{ margin: '0' }}>{item.name}</h4>
                  <p style={{ margin: '4px 0', color: '#718096' }}>Unit Price: ${item.cost}</p>
                  <p style={{ margin: '0', fontWeight: 'bold', color: '#2f855a' }}>Subtotal: ${item.cost * item.quantity}</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button onClick={() => handleDecrement(item)} style={{ padding: '2px 8px' }}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)} style={{ padding: '2px 8px' }}>+</button>
                <button onClick={() => handleRemove(item.name)} style={{ marginLeft: '20px', background: '#e53e3e', color: 'white', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
        <button onClick={onContinueShopping} style={{ background: '#4a5568', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}>
          Continue Shopping
        </button>
        <button onClick={handleCheckout} style={{ background: '#2f855a', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
