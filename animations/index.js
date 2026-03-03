import gsap from "gsap";

export const stagger = (target, fromVars, toVars) => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  return gsap.fromTo(
    target,
    { opacity: 0, ...fromVars },
    { opacity: 1, ...toVars, duration: 0.45, stagger: 0.07, ease: "power2.out" }
  );
};
