import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function useNavbarAnimation() {
  useLayoutEffect(() => {
    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    const onScroll = () => {
      if (window.scrollY > 70) {
        gsap.to(navbar, {
          height: 72,
          background: "rgba(5,7,15,.75)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(255,255,255,.08)",
          duration: 0.35,
          ease: "power2.out",
        });
      } else {
        gsap.to(navbar, {
          height: 92,
          background: "transparent",
          backdropFilter: "blur(0px)",
          borderBottom: "1px solid transparent",
          duration: 0.35,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
