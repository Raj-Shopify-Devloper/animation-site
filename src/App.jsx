import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/header.jsx';
import Home from './pages/home.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div> 
    </BrowserRouter>
  );
}

export default App;
