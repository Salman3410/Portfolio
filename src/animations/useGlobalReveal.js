import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGlobalReveal() {
  useLayoutEffect(() => {
    const sections = gsap.utils.toArray(
      ".hero, .featured, .services, .skills, .about, .contact, .footer",
    );

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);
}
