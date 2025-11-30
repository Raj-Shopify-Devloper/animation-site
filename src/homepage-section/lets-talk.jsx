import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

const LetsTalkSection = () => {
  const ref = useRef(null);

  // Mouse position motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the movement
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };

  // Wrapper moves with mouse (The "whole section" effect)
  const wrapperX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-30, 30]), springConfig);
  const wrapperY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-30, 30]), springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();

    // Calculate normalized mouse position (-0.5 to 0.5)
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      className="lets-talk-section-new"
      ref={ref}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="footer_text_wrapper"
        style={{ x: wrapperX, y: wrapperY }}
      >
        <div className="footer_text">
          Lets talk
        </div>

        <MagneticButton />

        <div className="footer_text">
          with us
        </div>

        {/* Hidden slider wrapper for now */}
      </motion.div>
    </section>
  );
};

const MagneticButton = () => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.5, y: middleY * 0.5 }); // 0.5 = magnetic strength
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  // Smooth spring animation for the magnetic effect
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  return (
    <motion.a
      href="/contact"
      className="circle_button footer w-inline-block"
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
      viewport={{ once: true }}
    >
      <img
        src="https://cdn.prod.website-files.com/67f35087f2c378bfbd44b7eb/67f3bba7d54d780f404fdf93_curve%20text%402x%20(1).avif"
        loading="eager"
        width="171.5"
        alt=""
        className="curve_text_image"
      />
      <div className="circle_link footer">
        <div className="cirle_link_svg footer w-embed">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 44" height="auto" width="auto">
            <g clipPath="url(#clip0_12145_1726)">
              <path fill="currentColor" d="M16.042 32.2887V40.7917C16.042 41.3857 16.4233 41.9119 16.988 42.0989C17.1292 42.1447 17.274 42.1667 17.417 42.1667C17.846 42.1667 18.2603 41.965 18.5243 41.6057L23.4982 34.837L16.042 32.2887Z"></path>
              <path fill="currentColor" d="M43.4226 0.254996C43.0009 -0.0438375 42.4473 -0.0841709 41.9889 0.155996L0.738915 21.6977C0.251248 21.9525 -0.0365851 22.4732 0.00374821 23.0213C0.0459149 23.5713 0.410748 24.0407 0.929582 24.2185L12.3971 28.1382L36.8189 7.2565L17.9209 30.0247L37.1398 36.5935C37.2828 36.6412 37.4331 36.6668 37.5834 36.6668C37.8328 36.6668 38.0803 36.599 38.2984 36.467C38.6468 36.2543 38.8833 35.8968 38.9438 35.4953L43.9854 1.57866C44.0606 1.06533 43.8443 0.555662 43.4226 0.254996Z"></path>
            </g>
            <defs>
              <clipPath id="clip0_12145_1726">
                <rect fill="white" height="44" width="44"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </motion.a>
  );
};

export default LetsTalkSection;
