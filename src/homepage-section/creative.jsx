import React from 'react';
import '../style/homepage.css';

const CreativeSection = () => {
  return (
    <section className="creative-section creative creative-foundation">
      <div className="design-sticky-wrap">
        <div className="container">
          <div className="design-wrapper">
            <div className="design-top-wrap">
              
              <div className="section-sub-title">Creative Lead</div>

              <div className="content-wrap">
                <h2 className="deesign-title">
                  <span className="text-gray _01">Short,</span>{' '}
                  <span className="text-gray _02">human-</span>
                  <br />
                  <span className="text-gray _03">centric</span>{' '}
                  <span className="text-gray _04">bio</span>{' '}
                  <span className="text-gray _05">focusing</span>{' '}
                  <span className="text-gray _06">on</span>{' '}
                  <span className="text-gray _07">passion</span>
                </h2>

                {/* Decorative Images */}
                <img
                  src="https://cdn.prod.website-files.com/6875b66038bb2a9e79587de1/6881df82614d08e943975665_line.svg"
                  loading="lazy"
                  alt=""
                  className="line-image"
                />
                <img
                  src="https://cdn.prod.website-files.com/6875b66038bb2a9e79587de1/6881df82f574b8ecbcb297a7_star.svg"
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

              <div className="deesign-button-wrap">
                <a
                  href="/contact"
                  className="primary white-text-primary-button"
                  data-w-id="006cf04a-a071-4cfb-717a-9039b92b3510"
                >
                  <div className="primary-button-wrapper white-button-wrapper">
                    <div className="primary-btn-wrap white-primary-btn-wrap">
                      <div className="primary-button-text white-text">Let’s Contact</div>
                      <div className="primary-button-text white-text">Let’s Contact</div>
                    </div>
                    <div className="primary-icon-wrap blue-with-shadow" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6875b66038bb2a9e79587de1/687878a19f8acee9eeaf0cc6_arrow-left.svg"
                        alt="Arrow icon"
                        className="primary-button-icon v1"
                      />
                    </div>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeSection;