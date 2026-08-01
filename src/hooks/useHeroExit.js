import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useHeroExit() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "60% center",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // ==========================
      // HERO LEAVES
      // ==========================

      // Main title
      tl.to(
        ".hero-title",
        {
          y: -180,
          opacity: 0,
          ease: "none",
        },
        0,
      );

      // Subtitle
      tl.to(
        ".hero-subtitle",
        {
          y: -130,
          opacity: 0,
          ease: "none",
        },
        0.05,
      );

      // Buttons
      tl.to(
        ".hero-buttons",
        {
          y: -80,
          opacity: 0,
          ease: "none",
        },
        0.1,
      );

      // Floating tech badges
      tl.to(
        ".tech-badge",
        {
          y: -60,
          opacity: 0,
          stagger: 0.04,
          ease: "none",
        },
        0.08,
      );

      // Scroll indicator
      tl.to(
        ".scroll-indicator",
        {
          y: 40,
          opacity: 0,
          ease: "none",
        },
        0,
      );

      // Hero spotlight fades
      tl.to(
        ".hero-spotlight",
        {
          opacity: 0,
          scale: 0.85,
          ease: "none",
        },
        0,
      );

      // Background lights
      tl.to(
        ".hero-light",
        {
          opacity: 0,
          scale: 0.8,
          stagger: 0.05,
          ease: "none",
        },
        0,
      );

      // 3D Canvas
      tl.to(
        ".hero-canvas",
        {
          scale: 0.88,
          y: 80,
          opacity: 0.45,
          ease: "none",
        },
        0,
      );

      // Hero darkens
      tl.to(
        ".hero",
        {
          filter: "brightness(.65)",
          ease: "none",
        },
        0,
      );

      // ==========================
      // FEATURED ENTERS
      // ==========================

      tl.fromTo(
        ".featured-heading",
        {
          opacity: 0,
          y: 120,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
        },
        0.45,
      );

      tl.fromTo(
        ".large",
        {
          opacity: 0,
          y: 140,
          scale: 0.94,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power3.out",
        },
        0.55,
      );

      tl.fromTo(
        ".project-grid .project-card",
        {
          opacity: 0,
          y: 120,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          ease: "power3.out",
        },
        0.72,
      );

      tl.fromTo(
        ".view-all",
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
        },
        0.9,
      );
    });

    return () => ctx.revert();
  }, []);
}
