import React, { useEffect, useRef } from "react";
export default function CrossScroll() {
  const tape1Ref = useRef(null);
  const tape2Ref = useRef(null);
  const pos1 = useRef(0);
  const pos2 = useRef(0);
  useEffect(() => {
    const tape1 = tape1Ref.current;
    const tape2 = tape2Ref.current;
    const width1 = tape1.scrollWidth / 2;
    const width2 = tape2.scrollWidth / 2;
    const SPEED = 0.8;
    const animate = () => {
      pos1.current -= SPEED;
      if (Math.abs(pos1.current) >= width1) pos1.current = 0;
      tape1.style.transform = `translateX(${pos1.current}px)`;
      pos2.current += SPEED;
      if (pos2.current >= width2) pos2.current = 0;
      tape2.style.transform = `translateX(${pos2.current}px)`;

      requestAnimationFrame(animate);
    };
    animate();
  }, []);
  const text = (
    <>
      TILE ADHESIVE &nbsp;▪&nbsp; GROUT & SEALANTS &nbsp;▪&nbsp; WATERPROOFING
      &nbsp;▪&nbsp; BLOCK JOINTING MORTAR &nbsp;▪&nbsp; WALL PUTTY &nbsp;▪&nbsp;
    </>
  );
  const renderTrack = () => (
    <>
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>

      {/* Duplicate set */}
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
    </>
  );
  return (
    <section className="cross-section">
      <div className="cross-container container">
        {/* Tape 1 */}
        <div className="tape tape-1">
          <div className="scrolling-track" ref={tape1Ref}>
            {renderTrack()}
          </div>
        </div>
        {/* Tape 2 */}
        <div className="tape tape-2">
          <div className="scrolling-track" ref={tape2Ref}>
            {renderTrack()}
          </div>
        </div>
      </div>
    </section>
  );
}
