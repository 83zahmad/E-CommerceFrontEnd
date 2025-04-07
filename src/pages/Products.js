import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const products = [
  { id: 1, name: 'Eco-Friendly T-Shirt', price: '$25', image: 'https://i.etsystatic.com/11065311/r/il/b17d8f/1969387221/il_1588xN.1969387221_fx68.jpg' },
  { id: 2, name: 'Recycled Sneakers', price: '$50', image: 'https://media-photos.depop.com/b1/41127019/1787996075_6a52fabe481f4caaab6835b91573e7ea/P0.jpg' },
  { id: 3, name: 'Sustainable Jeans', price: '$60', image: 'https://www.happyearthapparel.com/cdn/shop/files/Dress__Tank_Deco_00_5827a571-2d1e-44f2-bd87-04da0e324f55.jpg?v=1713803363&width=1600' }
];

function Products() {
  return (
    <div>
      <h1>All Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <Link to={`/product/${product.id}`} className="details-btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
