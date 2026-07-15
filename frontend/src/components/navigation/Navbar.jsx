import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import Button from "../ui/Button";
import Container from "../ui/Container";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="fixed top-0 left-0 z-50 w-full"
    >
      <Container>
        <nav
  className="
    mt-4
    flex
    h-20
    items-center
    justify-between
    rounded-2xl
    px-6
    transition-all
    duration-300
  "
  style={{
    background: scrolled
      ? "var(--navbar-bg)"
      : "transparent",

    border: scrolled
      ? "1px solid var(--navbar-border)"
      : "1px solid transparent",

    backdropFilter: scrolled
      ? "blur(18px)"
      : "blur(0px)",

    WebkitBackdropFilter: scrolled
      ? "blur(18px)"
      : "blur(0px)",

    boxShadow: scrolled
      ? "0 10px 35px rgba(0,0,0,.15)"
      : "none",
  }}
>
          <Logo />

          <NavLinks />

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Button variant="secondary">
              Login
            </Button>

            <Button>
              Get Started
            </Button>

            <MobileMenu />
          </div>
        </nav>
      </Container>
    </motion.header>
  );
}

export default Navbar;