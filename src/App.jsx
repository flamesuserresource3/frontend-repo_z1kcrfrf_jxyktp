import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-white to-purple-50 text-black">
      <Navbar />
      <Hero />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default App;
