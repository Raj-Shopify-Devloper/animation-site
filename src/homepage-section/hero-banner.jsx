import React, { useEffect } from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import backgroundVideoThumbnail from "../assets/hero-image.png";
import pecoshieldProductImage from "../assets/hero-product.png";

const HeroBanner = () => {
  const slides = [
    {
      id: 1,
      background: backgroundVideoThumbnail,
      product: pecoshieldProductImage,
      title: "CONSTRUCTION SOLUTIONS",
      videoLabel: true,
    },
    {
      id: 2,
      background: backgroundVideoThumbnail,
      product: pecoshieldProductImage,
      title: "WATER PROOFING SYSTEM",
      videoLabel: false,
    },
    {
      id: 3,
      background: backgroundVideoThumbnail,
      product: pecoshieldProductImage,
      title: "WATER PROOFING SYSTEM",
      videoLabel: false,
    }
  ];
  const Slider = Slick && (Slick.default || Slick);
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,

    beforeChange: (current, next) => {
      const slides = document.querySelectorAll(".hero-slide");

      slides.forEach((slide) => {
        slide.classList.remove("fade-animate");
      });

      setTimeout(() => {
        const nextSlide = slides[next];
        if (nextSlide) {
          nextSlide.classList.add("fade-animate");
        }
      }, 20);
    },
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
                <h1 className="hero-title f-110 f-m-48 white-color w-800 l-h-1 first-font">{item.title}</h1>
                <div className="hero-product-wrap">
                  <img
                    src={item.product}
                    alt="Product"
                    className="hero-product"
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
