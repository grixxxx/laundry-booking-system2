import {
  annotate,
  annotationGroup,
} from "https://unpkg.com/rough-notation?module";

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const circle = annotate(document.querySelector(".circle"), {
  type: "circle",
  color: "#274c77",
});
const underline = annotate(document.querySelector(".underline"), {
  type: "underline",
  padding: [-5, 0],
  color: "#274c77",
});

const ag = annotationGroup([circle, underline]);

ag.show();
