import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useHeroScroll() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,

        onUpdate: (self) => {
          const progress = Math.min(Math.max(self.progress, 0), 1);

          gsap.set(".hero-content", {
            opacity: 1 - progress,
            y: -120 * progress,
          });

          gsap.set(".hero-canvas", {
            scale: 1 - self.progress * 0.07,
            y: self.progress * 80,
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);
}
