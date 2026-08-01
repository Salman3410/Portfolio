import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function usePortalTransition() {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills",
        start: "top 95%",
        end: "top 35%",
        scrub: 1.2,
      },
    });

    // Portal ring
    tl.to(
      ".portal-ring",
      {
        scale: 18,
        opacity: 1,
        rotation: 360,
        duration: 1,
        ease: "power3.out",
      },
      0,
    );

    // Portal core
    tl.to(
      ".portal-core",
      {
        scale: 30,
        opacity: 0.8,
        duration: 1,
        ease: "power3.out",
      },
      0,
    );

    // Services fade slightly
    tl.to(
      ".services",
      {
        opacity: 0.75,
        scale: 0.98,
        filter: "blur(3px)",
        duration: 1,
      },
      0,
    );

    // Skills reveal
    tl.fromTo(
      ".skills-content",
      {
        opacity: 0,
        y: 120,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      0.25,
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);
}
