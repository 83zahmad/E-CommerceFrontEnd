import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import AboutUs from './pages/AboutUs';  //create the AboutUs page
import Footer from './pages/Footer'; // Import the Footer component
import './styles/App.css';  // Ensure that your styles are properly imported

function App() {
  return (
    <Router>
      {/* Navigation Bar with Logo and Brand Name */}
      <nav>
        <div className="logo">
          <img src="https://img.freepik.com/premium-vector/minimalist-sustainable-fashion-logo-design-with-green-leaves-hanging-garment-design-minimalist-logo-representing-sustainable-fashion-products_538213-68064.jpg?w=740" alt="Brand Logo" /> {/* Update with the correct logo path */}
        </div>
        <div className="nav-links">
        <h1>Sustainable Fashion Marketplace</h1> {/* Our brand name */}
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about-us">About Us</Link> {/* About Us link */}
        </div>
      </nav>
      
      {/* Routes and Components */}
      <Routes>
        {/* Using element instead of component */}
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about-us" element={<AboutUs />} /> {/* About Us route */}
      </Routes>
      <Footer />

    </Router>

    
  );
}

export default App;
