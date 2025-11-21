import React from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backgroundVideoThumbnail from "../assets/demo-image.png";
import pecoshieldProductImage  from "../assets/testing-image.jpg";

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
      background: "your-second-bg.jpg",
      product: "your-second-product.png",
      title: "WATERPROOFING SYSTEM",
      videoLabel: false,
    },
  ];

  const Slider = Slick && (Slick.default || Slick);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
  };

  return (
    <div className="hero-banner">
      <div className="container">
        <Slider {...settings}>
          {slides.map((item) => (
            <div key={item.id} className="hero-slide">
              <div
                className="hero-background"
                style={{ backgroundImage: `url(${item.background})` }}
              >
                <div className="hero-overlay"></div>
              </div>

              {item.videoLabel && (
                <div className="hero-video-label">
                  <h3 className="hero-video-text">Video</h3>
                </div>
              )}

              <div className="hero-product-wrap">
                <img
                  src={item.product}
                  alt="Pecoshield 2K"
                  className="hero-product"
                />
              </div>

              <div className="hero-title-wrap">
                <h1 className="hero-title">
                  {item.title}
                </h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroBanner;