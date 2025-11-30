import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../style/homepage.css';
import Starimage from '../assets/start-image.png';
import lineImage from '../assets/line-start.png';
import streemImage from '../assets/streem-round.png';
import Manicon from '../assets/foundation-image.png';

const CreativeSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = (e) => {
    if (e) e.preventDefault();
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <section className="creative-section creative creative-foundation sticky-section">
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
                    <img src={lineImage} loading="lazy" alt="line-image" className="line-image" />
                    <img src={Starimage} loading="lazy" alt="star-image" className="star-image" />
                    <div className="circle-image-wrapper" onClick={togglePopup} style={{ cursor: 'pointer' }}>
                      <div className="circle-link">
                        <img src={streemImage} loading="lazy" alt="circle-image" className="circle-image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            className="video-popup-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            onClick={togglePopup}
          >
            <motion.div
              className="video-popup-content"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.5, type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-popup-btn" onClick={togglePopup}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className="video-wrapper">
                <video
                  controls
                  autoPlay
                  className="popup-video"
                  src="/src/assets/video/launch-video.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default CreativeSection;