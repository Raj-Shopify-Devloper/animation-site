import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/header.jsx';
import Home from './pages/home.jsx';
import Footer from './component/footer.jsx';
import PecoGrid from './pages/peco-grid.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<PecoGrid />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
