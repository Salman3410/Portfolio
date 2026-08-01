import { useEffect, useRef } from "react";

export default function HeroSpotlight() {
  const spotlight = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!spotlight.current) return;

      spotlight.current.style.left = `${e.clientX}px`;
      spotlight.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return <div ref={spotlight} className="hero-spotlight" />;
}
