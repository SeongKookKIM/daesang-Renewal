gsap
  .timeline({
    scrollTrigger: {
      trigger: "#banner",
      start: "top top",
      end: "bottom 10%",
      scrub: 2,
      pin: true,
    },
  })
  .to(".bg", { scale: 10, duration: 0.5 });
