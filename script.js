gsap.from("#nav h2", {
  y: -90,
  delay: 0.4,
  duration: 0.8,
  opacity: 0,
  stagger: 0.3,
});
let tl = gsap.timeline();
tl.from("#main h1", {
  x: -500,
  delay: 2,
  opacity: 0,
  duration: 0.8,
  stagger: 0.4,
});
tl.from("img", {
  x: 100,
  opacity: 0,
  rotate: 90,
  duration: 0.8,
});
