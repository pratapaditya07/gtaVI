CustomEase.create(
    "custom",
    "M0,0 C0.699,0.147 0.737,0.089 0.791,0.279 0.855,0.402 0.818,1.001 1,1  "
);

gsap.to("#page2 p", {
    duration: 1.5,
    rotate: "108deg",
    scale: 15,
    y: 500,
    ease: "custom" });