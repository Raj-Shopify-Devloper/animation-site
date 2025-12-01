import React, { useEffect } from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import backgroundVideoThumbnail from "../assets/hero-image.png";
import pecoshieldProductImage from "../assets/pecoshield-2k.png";
import epoxyGroutBucket from '../assets/epoxy-grout-bucket.png';
import smoothPutty from '../assets/smooth-putty.png';
import { delay } from "framer-motion/dom";

const HeroBanner = () => {
  const slides = [
    {
      id: 1,
      background: backgroundVideoThumbnail,
      product: pecoshieldProductImage,
      title: "CONSTRUCTION",
      subtext: "SOLUTIONS",
      videoLabel: true,
    },
    {
      id: 2,
      background: backgroundVideoThumbnail,
      product: epoxyGroutBucket,
      title: "CONSTRUCTION",
      subtext: "SOLUTIONS",
      videoLabel: false,
    },
    {
      id: 3,
      background: backgroundVideoThumbnail,
      product: smoothPutty,
      title: "CONSTRUCTION",
      subtext: "SOLUTIONS",
      videoLabel: false,
    }
  ];
  const Slider = Slick && (Slick.default || Slick);
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    delay: 0,
    autoplaySpeed: 1800,
    fade: true,
    arrows: false
  };

  return (
    <div className="hero-banner">
      <div className="container">
        <Slider {...settings}>
          {slides.map((item) => (
            <div key={item.id} className="hero-slide fade-animate">
              <div className="hero-background">
                <img
                  src={item.background}
                  alt="Slide Background"
                  className="hero-bg-img"
                />
              </div>
              <div className="hero-title-wrap">
                <h1 className="hero-title f-110 f-m-48 white-color w-800 l-h-1 first-font">{item.title}<span className="designers" data-text={item.subtext}> {item.subtext}</span></h1>
                <div className="pecoshield-2k-wrap">
                  <img
                    src={item.product}
                    alt="Product"
                    className="pecoshield-2k"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroBanner;
