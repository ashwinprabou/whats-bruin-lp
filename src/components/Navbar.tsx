import { useState, useEffect } from "react";
import { Coffee, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <Coffee
            size={28}
            className={`${isScrolled ? "text-ucla-blue" : "text-white"}`}
          />
          <span
            className={`text-xl font-bold font-serif ${
              isScrolled ? "text-ucla-blue" : "text-white"
            }`}
          >
            What's Bruin?
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#problem"
            className={`navbar-link ${
              isScrolled ? "text-gray-700" : "text-white-100"
            }`}
          >
            Problem
          </a>
          <a
            href="#solution"
            className={`navbar-link ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            Solution
          </a>
          <a
            href="#features"
            className={`navbar-link ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            Features
          </a>
          <a
            href="#about"
            className={`navbar-link ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            About
          </a>
          <button
            className={`${
              isScrolled ? "bg-ucla-blue text-white" : "bg-white text-ucla-blue"
            } px-5 py-2 rounded-lg font-medium transition duration-300 hover:shadow-md`}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X
              size={24}
              className={isScrolled ? "text-gray-700" : "text-white"}
            />
          ) : (
            <Menu
              size={24}
              className={isScrolled ? "text-gray-700" : "text-white"}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full py-4 px-4 fade-in">
          <div className="flex flex-col space-y-3">
            <a
              href="#problem"
              className="navbar-link text-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Problem
            </a>
            <a
              href="#solution"
              className="navbar-link text-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solution
            </a>
            <a
              href="#features"
              className="navbar-link text-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#about"
              className="navbar-link text-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <button className="bg-ucla-blue text-white px-5 py-2 rounded-lg font-medium transition duration-300 hover:shadow-md w-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
