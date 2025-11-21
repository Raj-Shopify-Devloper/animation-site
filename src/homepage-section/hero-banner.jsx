import React from "react";
import Slider from "react-slick";                     // ← THIS ONE WORKS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="/demo-image.png" alt="Slide 1" style={{ width: "100%" }} />
      </div>
      <div>
        <h3 style={{ color: "white", textAlign: "center" }}>Slide 2</h3>
      </div>
      <div>
        <h3 style={{ color: "white", textAlign: "center" }}>Slide 3</h3>
      </div>
    </Slider>
  );
};

export default HeroBanner;