import React, { useEffect } from 'react';
import './App.css';
import CreativeSection from './homepage-section/creative.jsx';
import DesignProcessSection from './homepage-section/process.jsx';
import { initHomeAnimations } from './script/home-section';

function App() {
  useEffect(() => {
    initHomeAnimations();
  }, []);

  return (
    <>
      <CreativeSection />
      <DesignProcessSection />
    </>
  );
}

export default App;
