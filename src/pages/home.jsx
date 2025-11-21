import CreativeSection from '../homepage-section/creative.jsx';
import { useEffect, useRef, useState, useMemo } from "react";
import DesignProcessSection from '../homepage-section/process.jsx';
import OfferSection from '../homepage-section/faq.jsx';
// import '../style/hero-banner.css'; // Add this line
import { initHomeAnimations } from '../script/home-section';

export default function Home() {
  useEffect(() => {
    initHomeAnimations();
  }, []);
    
  return (
    <>
      <CreativeSection />
      <OfferSection />
      <DesignProcessSection />
    </>
  );
}