// home-section.js

export function initHomeAnimations() {

  // ============================ design process section Start ============================ //

  let dpSection = document.querySelector(".creative-section.design-process-section");
  let dpTopWrap = document.querySelector(".design-top-wrap");
  let dpBox1 = document.querySelector(".box-one._1");
  let dpBox2 = document.querySelector(".box-one._2");
  let dpBoxTwo = document.querySelector(".box-two");
  let dpImages = document.querySelectorAll(".design-process-image");

  if (!dpSection) return;

  function dpEaseOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function updateDesignProcess() {
    const rect = dpSection.getBoundingClientRect();
    const dpTop = rect.top + window.scrollY;
    const dpHeight = dpSection.offsetHeight;
    const scrollY = window.scrollY;

    const progress = Math.max(
      0,
      Math.min(1, (scrollY - dpTop) / (dpHeight - window.innerHeight))
    );

    // dpTopWrap.style.opacity = Math.min(1, progress * 2);
    dpTopWrap.style.transform = `scale(${1 + 0.05 * progress})`;

    dpBox1.style.transform = `translate(-50%, -50%) scale(${2 * progress})`;
    dpBox2.style.transform = `translate(-50%, -50%) scale(${3 * Math.max(0, progress - 0.3)})`;

    const boxTwoStart = 0.39;
    const boxTwoProg = Math.max(0, (progress - boxTwoStart) / (0.09 + boxTwoStart));
    dpBoxTwo.style.opacity = dpEaseOutCubic(boxTwoProg);

    dpImages.forEach((img, index) => {
      const delay = index * 0.04;
      const prog = Math.max(0, progress - 0.8 - delay);
      const opacity = Math.min(1, prog * 20);

      let translateX = index === 1 ? -50 : -150;
      translateX += Math.min(1, prog) * Math.abs(translateX);

      img.style.opacity = opacity;
      img.style.transform = `translateX(${translateX}px)`;
    });
  }

  function dpScrollHandler() {
    requestAnimationFrame(updateDesignProcess);
  }

  window.addEventListener("scroll", dpScrollHandler);
  updateDesignProcess();

  // ============================ design process section End ============================ //



  // ======================= creative section Start ======================= //

  let crSection = document.querySelector(".creative-section.creative");
  let crTitleSpans = document.querySelectorAll(".text-gray");
  let crLineImg = document.querySelector(".line-image");
  let crStarImg = document.querySelector(".star-image");
  let crCircleImg = document.querySelector(".circle-image");

  if (!crSection) return;

  function updateCreativeSection() {
    const rect = crSection.getBoundingClientRect();
    const crTop = rect.top + window.scrollY;
    const crHeight = crSection.offsetHeight;
    const scrollY = window.scrollY;

    const progress = Math.max(
      0,
      Math.min(1, (scrollY - crTop) / (crHeight - window.innerHeight))
    );

    crTitleSpans.forEach((span, index) => {
      const delay = index * 0.1;
      const opacity = Math.min(1, progress + (0.2 - delay));
      const scale = 0.9 + 0.1 * Math.min(1, (progress - delay) / 0.8);
      span.style.opacity = opacity;
      span.style.transform = `scale(${scale})`;
    });

    crLineImg.style.opacity = progress;
    crLineImg.style.transform = `translateX(${ -100 + 100 * progress }px) rotate(0deg)`;

    crStarImg.style.opacity = progress;
    crStarImg.style.transform = `translateX(${ -300 + 300 * progress }px) rotateZ(${190 * progress}deg)`;

    crCircleImg.style.opacity = progress;
    crCircleImg.style.transform = `scale(${0.98459 * progress}) rotateZ(${360 * progress}deg)`;
  }

  function crScrollHandler() {
    requestAnimationFrame(updateCreativeSection);
  }

  window.addEventListener("scroll", crScrollHandler);
  updateCreativeSection();

  // ======================= creative section End ======================= //
}
