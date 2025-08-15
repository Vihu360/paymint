import React, { useState, useEffect } from "react";

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    className="text-slate-300 hover:text-pink-400 transition-colors duration-300"
  >
    {children}
  </a>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <nav
        className={`fixed top-0 z-50 h-20 transition-all duration-500 w-3/4 px-5 rounded-3xl border bg-gradient-to-r from-white/5 via-white/10 to-white/5 ${
          scrolled
            ? "bg-black/20 backdrop-blur-2xl border-b border-white/20 shadow-2xl shadow-black/50 "
            : "bg-black/10 backdrop-blur-md border-b border-white/10 "
        }`}
        style={{
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 "></div>

        <div className="relative container mx-auto flex justify-between items-center h-full px-4">
          <a href="#" className="flex items-center gap-2">
            <span className="font-bold text-xl text-white drop-shadow-lg">
              Transekt
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink href="#">Products</NavLink>
            <NavLink href="#">Solutions</NavLink>
            <NavLink href="#">Pricing</NavLink>
            <NavLink href="#">About</NavLink>
          </div>

          <div className="hidden lg:block">
            <a
              href="#"
              className="relative border border-pink-500/60 bg-pink-500/10 text-pink-400 px-5 py-2 rounded-full text-sm font-semibold hover:bg-pink-500 hover:text-black hover:border-pink-500 transition-all duration-300 backdrop-blur-sm shadow-lg shadow-pink-500/20"
            >
              Sign In
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white z-50 p-1 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {!isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black/30 backdrop-blur-3xl z-40 pt-24 px-8 transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        {/* Glassmorphism overlay for mobile menu */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-pink-500/10 backdrop-blur-2xl"></div>

        <div className="relative flex flex-col items-center gap-10 text-xl">
          <NavLink href="#">Products</NavLink>
          <NavLink href="#">Solutions</NavLink>
          <NavLink href="#">Pricing</NavLink>
          <NavLink href="#">About</NavLink>
          <a
            href="#"
            className="mt-8 border border-pink-500/60 bg-pink-500/10 text-pink-400 px-6 py-2 rounded-full font-semibold hover:bg-pink-500 hover:text-black hover:border-pink-500 transition-all duration-300 "
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
