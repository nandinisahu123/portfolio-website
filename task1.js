// GSAP animations
gsap.from(".fade-in", {
  opacity: 0,
  y: -50,
  duration: 1.5,
  stagger: 0.3
});

gsap.from(".slide-up", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  delay: 1
});

gsap.from(".card", {
  scale: 0.5,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  delay: 1.5
});
