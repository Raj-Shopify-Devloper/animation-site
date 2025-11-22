import React from 'react';
import '../style/homepage.css';
import Starimage from '../assets/start-image.png';
import lineImage from '../assets/line-start.png'; 
import streemImage from '../assets/streem-round.png'; 
import Manicon from '../assets/foundation-image.png';

const CreativeSection = () => {
  return (
    <section className="creative-section creative creative-foundation">
      <div className="design-sticky-wrap">
        <div className="container">
          <div className="design-wrapper">
            <div className="design-top-wrap">
              <div className="content-wrap">
                <div className="man-image">
                    <img src={Manicon} loading="lazy" alt="Pecoshelldirect Man" />  
                </div>
                <div className="left-content">
                  <h2 className="deesign-title">
                    <span className="text-gray _01 f-70 f-m-48 first-font w-800 white-color l-h-1-2">FROM</span>{' '}
                    <br></br>
                    <span className="text-gray _02 f-70 f-m-48 first-font w-800 white-color l-h-1-2">FOUNDATION</span>
                    <br></br>
                    <span className="text-gray _03 f-70 f-m-48 first-font w-800 white-color l-h-1-2">TO FINISH</span>{' '}
                    <br></br>
                    <span className="text-gray _04 f-70 f-m-48 first-font w-800 white-color l-h-1-2">PICO HAS</span>{' '}
                    <br></br>
                    <span className="text-gray _05 f-70 f-m-48 first-font w-800 white-color l-h-1-2">YOU COVERED.</span>{' '}
                  </h2>
                  <img src={lineImage} loading="lazy" alt="line-image" className="line-image"/>
                  <img src={Starimage} loading="lazy" alt="star-image" className="star-image"/>
                  <img src={streemImage} loading="lazy" alt="circle-image" className="circle-image"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CreativeSection;