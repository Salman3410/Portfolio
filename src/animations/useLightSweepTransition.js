import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useLightSweepTransition() {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top 90%",
        end: "top 35%",
        scrub: 1.2,
      },
    });

    /* ==========================
       Light Beam Sweep
    ========================== */

    tl.fromTo(
      ".light-sweep",
      {
        x: "-40vw",
        opacity: 0,
        scaleX: 0.8,
      },
      {
        x: "170vw",
        opacity: 1,
        scaleX: 1,
        ease: "none",
        duration: 1,
      },
      0,
    );

    /* ==========================
       Skills fade into beam
    ========================== */

    tl.to(
      ".skills",
      {
        opacity: 0.45,
        scale: 0.985,
        filter: "blur(4px)",
        ease: "power2.out",
        duration: 1,
      },
      0,
    );

    /* ==========================
       About reveal
    ========================== */

    tl.fromTo(
      ".about-content-wrapper",
      {
        opacity: 0,
        y: 80,
        scale: 0.98,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",
        duration: 1,
      },
      0.2,
    );

    /* ==========================
       Beam disappears
    ========================== */

    tl.to(
      ".light-sweep",
      {
        opacity: 0,
        ease: "power2.out",
        duration: 0.25,
      },
      0.82,
    );

    /* ==========================
       Restore Skills
    ========================== */

    tl.to(
      ".skills",
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        ease: "power2.out",
        duration: 0.4,
      },
      1,
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);
}
