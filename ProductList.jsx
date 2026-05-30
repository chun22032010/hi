import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

const ProductList = () => {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  
  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying",
      plants: [
        { name: "Snake Plant", image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=200", cost: 15 },
        { name: "Spider Plant", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=200", cost: 12 },
        { name: "Peace Lily", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?q=80&w=200", cost: 18 },
        { name: "Boston Fern", image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=200", cost: 22 },
        { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=200", cost: 10 },
        { name: "English Ivy", image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?q=80&w=200", cost: 14 }
      ]
    },
    {
      category: "Aromatic",
      plants: [
        { name: "Lavender", image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=200", cost: 20 },
        { name: "Rosemary", image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e2?q=80&w=200", cost: 14 },
        { name: "Mint", image: "https://images.unsplash.com/photo-1603094881045-8fe08b5e28cb?q=80&w=200", cost: 8 },
        { name: "Basil", image: "https://images.unsplash.com/photo-1608797178974-15b35a61d121?q=80&w=200", cost: 9 },
        { name: "Jasmine", image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=200", cost: 24 },
        { name: "Eucalyptus", image: "https://images.unsplash.com/photo-1550948390-6eb7fa78e4bc?q=80&w=200", cost: 16 }
      ]
    },
    {
      category: "Low Maintenance",
      plants: [
        { name: "Jade Plant", image: "https://images.unsplash.com/photo-1597055181300-e3633a207518?q=80&w=200", cost: 18 },
        { name: "ZZ Plant", image: "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?q=80&w=200", cost: 25 },
        { name: "Pothos", image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=200", cost: 12 },
        { name: "Cast Iron Plant", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=200", cost: 30 },
        { name: "Chinese Evergreen", image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=200", cost: 22 },
        { name: "Succulent Mixed", image: "https://images.unsplash.com/photo-1520302832304-4a14f37b9016?q=80&w=200", cost: 15 }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 30px', background: '#2f855a', color: 'white', alignItems: 'center' }}>
        <h3 onClick={() => setShowCart(false)} style={{ cursor: 'pointer' }}>Paradise Nursery</h3>
        <div style={{ display: 'flex', gap: '20px' }}>
          <span onClick={() => setShowCart(false)} style={{ cursor: 'pointer' }}>Plants</span>
          <span onClick={() => setShowCart(true)} style={{ cursor: 'pointer', position: 'relative' }}>
            🛒 Cart ({totalCartCount})
          </span>
        </div>
      </nav>

      {!showCart ? (
        <div style={{ padding: '30px' }}>
          {plantsArray.map((categoryGroup, index) => (
            <div key={index} style={{ marginBottom: '40px' }}>
              <h2 style={{ borderBottom: '2px solid #2f855a', paddingBottom: '5px', color: '#2f855a' }}>{categoryGroup.category}</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
                {categoryGroup.plants.map((plant, pIndex) => {
                  const isAdded = cartItems.some(item => item.name === plant.name);
                  return (
                    <div key={pIndex} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '15px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                      <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }} />
                      <h4 style={{ margin: '10px 0 5px 0' }}>{plant.name}</h4>
                      <p style={{ color: '#4a5568', fontWeight: 'bold' }}>${plant.cost}</p>
                      <button 
                        onClick={() => handleAddToCart(plant)} 
                        disabled={isAdded}
                        style={{ marginTop: '10px', background: isAdded ? '#cbd5e1' : '#38a169', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: isAdded ? 'not-allowed' : 'pointer' }}
                      >
                        {isAdded ? 'Added' : 'Add to Cart'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
};

export default ProductList;
