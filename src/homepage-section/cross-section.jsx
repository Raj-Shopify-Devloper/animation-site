import React, { useEffect, useRef } from "react";

export default function CrossScroll() {
  const tape1Ref = useRef(null);
  const tape2Ref = useRef(null);

  const autoX = useRef(0);

  useEffect(() => {
    const tape1 = tape1Ref.current;
    const tape2 = tape2Ref.current;

    const AUTO_SPEED = 0.5;

    // Infinite auto scrolling
    const animate = () => {
      autoX.current += AUTO_SPEED;

      tape1.style.transform = `translateX(${-autoX.current}px)`;
      tape2.style.transform = `translateX(${autoX.current}px)`;

      if (autoX.current > 20000) autoX.current = 0;

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

  return (
    <section className="cross-section">
      <div className="cross-container container">

        {/* Tape 1 */}
        <div className="tape tape-1">
          <div className="scrolling-content" ref={tape1Ref}>
            <span>{text}</span>
            <span>{text}</span>
            <span>{text}</span>
            <span>{text}</span>
          </div>
        </div>

        {/* Tape 2 */}
        <div className="tape tape-2">
          <div className="scrolling-content reverse" ref={tape2Ref}>
            <span>{text}</span>
            <span>{text}</span>
            <span>{text}</span>
            <span>{text}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
