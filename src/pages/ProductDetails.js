import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/App.css';

const products = [
  { 
    id: 1, 
    name: 'Eco-Friendly T-Shirt', 
    price: '$25', 
    description: 'A sustainable cotton t-shirt, made with organic cotton that feels soft and comfortable on your skin. Perfect for everyday wear.',
    image: 'https://i.etsystatic.com/11065311/r/il/b17d8f/1969387221/il_1588xN.1969387221_fx68.jpg',
    material: '100% Organic Cotton',
    sizes: ['S', 'M', 'L', 'XL'],
    care: 'Machine wash cold, tumble dry low, do not bleach.'
  },
  { 
    id: 2, 
    name: 'Recycled Sneakers', 
    price: '$50', 
    description: 'Sneakers made from recycled materials. These eco-friendly shoes are stylish and comfortable, perfect for everyday adventures.',
    image: 'https://media-photos.depop.com/b1/41127019/1787996075_6a52fabe481f4caaab6835b91573e7ea/P0.jpg',
    material: 'Recycled Rubber, Recycled Polyester',
    sizes: ['8', '9', '10', '11'],
    care: 'Spot clean with a damp cloth.'
  },
  { 
    id: 3, 
    name: 'Sustainable Jeans', 
    price: '$60', 
    description: 'Jeans made from organic cotton, featuring a classic design and a comfortable fit. These jeans are durable and sustainable.',
    image: 'https://www.happyearthapparel.com/cdn/shop/files/Dress__Tank_Deco_00_5827a571-2d1e-44f2-bd87-04da0e324f55.jpg?v=1713803363&width=1600',
    material: '98% Organic Cotton, 2% Spandex',
    sizes: ['30', '32', '34', '36'],
    care: 'Machine wash cold, hang dry.'
  }
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1); // State for tracking the quantity added to the cart

  if (!product) return <h2>Product not found!</h2>;

  // Handle Add to Cart functionality
  const handleAddToCart = () => {
    alert(`${quantity} ${product.name}(s) added to the cart!`);
  };

  return (
    <div className="product-details">
      <div className="image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">Price:{product.price}</p>
          
        <div className="product-info">
          <h3>Product Details:</h3>
          <p><strong>Material:</strong> {product.material}<br></br>
            <strong>Care Instructions:</strong> {product.care}<br></br>
            <strong>Available Sizes:</strong> {product.sizes.join(', ')}</p>
        </div>
        
        {/* Quantity selection */}
        <div className="quantity-selector">
          <label htmlFor="quantity">Quantity: </label>
          <input 
            type="number" 
            id="quantity" 
            value={quantity} 
            min="1" 
            onChange={(e) => setQuantity(e.target.value)} 
          />

        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;
