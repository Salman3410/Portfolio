import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollAnimations() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".featured-heading", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".featured",
          start: "top 70%",
        },
      });

      gsap.from(".project-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".project-grid",
          start: "top 75%",
        },
      });
    });

    return () => ctx.revert();
  }, []);
}
