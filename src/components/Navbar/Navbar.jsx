import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import "./Navbar.css";


const links = ["Home", "Projects", "Services", "Skills", "About", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);

      const sections = document.querySelectorAll("section[id]");

      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      if (current) {
        setActive(current.charAt(0).toUpperCase() + current.slice(1));
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`navbar ${scroll ? "navbar-scroll" : ""}`}
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
    >
      <div className="navbar-container">
        <a href="#" className="logo">
          Samfolio
        </a>

        <nav className={open ? "nav active" : "nav"}>
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`nav-item ${active === link ? "active" : ""}`}
            >
              {active === link && (
                <motion.div
                  layoutId="hover-pill"
                  className="hover-pill"
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 35,
                  }}
                />
              )}

              <span>{link}</span>
            </a>
          ))}
        </nav>

        <button className="resume-btn">
          Resume
          <FiArrowUpRight />
        </button>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>
    </motion.header>
  );
}
