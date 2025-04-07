import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Add this import
import '../styles/App.css';

const images = [
  {src: 'https://greenwithless.com/wp-content/uploads/2022/05/sustainable-clothing-brands-1920x1200.jpg', alt: 'Eco-friendly Jacket'},
  {src: 'https://cdn.sanity.io/images/mqao5lrt/prod/4d6e855344e894d6c7ebb2462180eabb083fc16b-1456x816.png?rect=0,26,1456,764&w=1200&h=630&fit=crop&auto=format', alt: 'Sustainable Shoes'},
  {src: 'https://thefriskytimes.com/wp-content/uploads/2024/06/What-is-sustainable-fashion.webp', alt: 'Organic Cotton T-Shirt'},
];

// Example product data
const products = [
    { id: 1, name: 'Eco-Friendly T-Shirt', image: 'https://i.etsystatic.com/11065311/r/il/b17d8f/1969387221/il_1588xN.1969387221_fx68.jpg' },
    { id: 2, name: 'Recycled Sneakers', image: 'https://media-photos.depop.com/b1/41127019/1787996075_6a52fabe481f4caaab6835b91573e7ea/P0.jpg' },
    { id: 3, name: 'Sustainable Jeans', image: 'https://www.happyearthapparel.com/cdn/shop/files/Dress__Tank_Deco_00_5827a571-2d1e-44f2-bd87-04da0e324f55.jpg?v=1713803363&width=1600' }
  ];

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Discover Sustainable Fashion</h1>
          <p>Join the movement towards eco-friendly and stylish clothing.</p>
          <Link to="/products">
          <button className="cta-button">Shop Now</button>
          </Link>
        </div>
      </section>

      {/* Slideshow Section */}
      <section className="slideshow">
        <img src={images[currentSlide].src} alt={images[currentSlide].alt} className="slide-image" />
      </section>

      {/* Vision Section */}
      <section className="vision">
    <h2>Our Vision</h2>
    <p>
    We are committed to providing stylish, eco-friendly fashion that promotes sustainability. Our goal is to make ethical, sustainable 
    clothing accessible to everyone without compromising on style. Together, we can create a better future for fashion and the planet.
    </p>
      </section>

       {/* Featured Products Section */}
       <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <Link to={`/product/${product.id}`}>
                <button className="view-details">View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
