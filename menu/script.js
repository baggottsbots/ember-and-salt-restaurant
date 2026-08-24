const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = document.querySelectorAll('.reveal');
const parallaxImages = document.querySelectorAll('.parallax-wrap img');

if (!reduceMotion) {
  gsap.set(revealEls, { autoAlpha: 0, y: 26 });
  gsap.utils.toArray('.reveal').forEach((el, i) => {
    gsap.to(el, {
      autoAlpha: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      delay: i * 0.03,
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true
      }
    });
  });

  parallaxImages.forEach(img => {
    const parent = img.parentElement;
    gsap.fromTo(img, { yPercent: -8, scale: 1.08 }, {
      yPercent: 8,
      scale: 1.02,
      ease: 'none',
      scrollTrigger: {
        trigger: parent,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.8
      }
    });
  });
}

gsap.registerPlugin(ScrollTrigger);