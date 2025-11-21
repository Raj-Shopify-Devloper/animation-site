import CreativeSection from '../homepage-section/creative.jsx';
import { useEffect, useRef, useState, useMemo } from "react";
import DesignProcessSection from '../homepage-section/process.jsx';
import OfferSection from '../homepage-section/faq.jsx';
import HeroBanner from '../homepage-section/hero-banner.jsx';
import { initHomeAnimations } from '../script/home-section';

export default function Home() {
  useEffect(() => {
    initHomeAnimations();
  }, []);
    
  return (
    <>
      <HeroBanner />
      <CreativeSection />
      <OfferSection />
      <DesignProcessSection />
    </>
  );
}