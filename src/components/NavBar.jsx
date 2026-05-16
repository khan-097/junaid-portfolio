import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={navbar ${scrolled ? "scrolled" : "not-scrolled"}}>
      <div className="inner">
        <a href="#hero" className="logo">JK. Portfolio</a>

        {/* Desktop Nav — আগের মতোই */}
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}><span>{name}</span><span className="underline" /></a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}} />
          <span className={block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}} />
          <span className={block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}} />
        </button>

        <a href="#contact" className="contact-btn group hidden md:block">
          <div className="inner"><span>Contact Me</span></div>
        </a>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-black-100 border-t border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <a
                  href={link}
                  className="text-white-50 text-lg hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="text-purple-400 font-semibold text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
