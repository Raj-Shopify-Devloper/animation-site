import React from 'react';
import '../style/homepage.css';
import Starimage from '../assets/start-image.png';
import lineImage from '../assets/line-start.png'; 

const CreativeSection = () => {
  return (
    <section className="creative-section creative creative-foundation">
      <div className="design-sticky-wrap">
        <div className="container">
          <div className="design-wrapper">
            <div className="design-top-wrap">
              <div className="content-wrap">
                <h2 className="deesign-title">
                  <span className="text-gray _01 f-90 f-m-48 first-font w-800 white-color l-h-1-2">FROM</span>{' '}
                  <br></br>
                  <span className="text-gray _02 f-90 f-m-48 first-font w-800 white-color l-h-1-2">FOUNDATION</span>
                  <br></br>
                  <span className="text-gray _03 f-90 f-m-48 first-font w-800 white-color l-h-1-2">TO FINISH</span>{' '}
                  <br></br>
                  <span className="text-gray _04 f-90 f-m-48 first-font w-800 white-color l-h-1-2">PICO HAS</span>{' '}
                  <br></br>
                  <span className="text-gray _05 f-90 f-m-48 first-font w-800 white-color l-h-1-2">YOU COVERED.</span>{' '}
                </h2>
                <img
                  src={lineImage}
                  loading="lazy"
                  alt=""
                  className="line-image"
                />
                <img
                  src={Starimage}
                  loading="lazy"
                  alt=""
                  className="star-image"
                />
                <img
                  src="https://cdn.prod.website-files.com/6875b66038bb2a9e79587de1/6881df82a5019220097cdde1_circle.svg"
                  loading="lazy"
                  alt=""
                  className="circle-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CreativeSection;