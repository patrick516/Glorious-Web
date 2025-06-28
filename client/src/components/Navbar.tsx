import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [desktopAboutOpen, setDesktopAboutOpen] = useState(false);
  const [getInvolvedOpen, setGetInvolvedOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false); // Separate state for Services
  const [desktopGetInvolvedOpen, setDesktopGetInvolvedOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const aboutLinks = [
    { to: "/about/history", label: "History" },
    { to: "/about/mission", label: "Mission & Vision" },
    { to: "/about/team/staff", label: "Staff" },
    { to: "/about/team/board", label: "Board & Advisors" },
    { to: "/about/partners", label: "Partners" },
    { to: "/about/sustainability", label: "Sustainability" },
    { to: "/about/media", label: "Media & Awards" },
    { to: "/about/impact", label: "Our Impact" },
  ];

  const servicesLinks = [
    { to: "/services/method", label: "Method" },
    { to: "/services/programs", label: "Programs" },
    { to: "/services/programs/tree", label: "Tree Programs" },
    {
      to: "/services/initiatives/million-farm-transformation",
      label: "Million Farm Transformation",
    },
    {
      to: "/services/initiatives/clinton-global-initiative",
      label: "Clinton Global Initiative",
    },
    { to: "/services/research", label: "Research" },
  ];

  const getInvolvedLinks = [
    { to: "/get-involved/ways-to-give", label: "Ways to Give" },
    { to: "/get-involved/become-sustainer", label: "Become a Sustainer" },
    { to: "/get-involved/signup", label: "Sign Up" },
    { to: "/get-involved/events", label: "Events" },
    { to: "/get-involved/employment", label: "Employment" },
  ];

  const navLinks = [
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
    setAboutOpen(false);
    setGetInvolvedOpen(false);
  };

  const closeAllDropdowns = () => {
    setDesktopAboutOpen(false);
    setDesktopServicesOpen(false);
    setDesktopGetInvolvedOpen(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeAllDropdowns();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (setter: (open: boolean) => void) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setter(true);
  };

  const handleMouseLeave = (setter: (open: boolean) => void) => {
    timeoutRef.current = setTimeout(() => {
      setter(false);
    }, 50);
  };

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 text-white bg-red-500 shadow-md"
    >
      <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
        <img src="/images/Logo.webp" alt="Logo" className="w-10 h-10" />
        <h1 className="text-2xl font-bold">Glorious Farming</h1>

        <div className="items-center hidden space-x-6 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-gray-200 ${isActive ? "font-semibold underline" : ""}`
            }
          >
            Home
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter(setDesktopAboutOpen)}
            onMouseLeave={() => handleMouseLeave(setDesktopAboutOpen)}
          >
            <span className="cursor-pointer hover:text-gray-200">About Us</span>
            <div
              className={`absolute left-0 z-50 w-64 py-2 mt-2 text-sm text-black bg-white rounded-md shadow-lg transition-opacity duration-200 ${
                desktopAboutOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              {aboutLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDesktopAboutOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter(setDesktopServicesOpen)}
            onMouseLeave={() => handleMouseLeave(setDesktopServicesOpen)}
          >
            <span className="cursor-pointer hover:text-gray-200">Services</span>
            <div
              className={`absolute left-0 z-50 w-64 py-2 mt-2 text-sm text-black bg-white rounded-md shadow-lg transition-opacity duration-200 ${
                desktopServicesOpen
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
            >
              {servicesLinks
                .filter((link) => link.to !== "/services/impact")
                .map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setDesktopServicesOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter(setDesktopGetInvolvedOpen)}
            onMouseLeave={() => handleMouseLeave(setDesktopGetInvolvedOpen)}
          >
            <span className="cursor-pointer hover:text-gray-200">
              Get Involved
            </span>
            <div
              className={`absolute left-0 z-50 w-64 py-2 mt-2 text-sm text-black bg-white rounded-md shadow-lg transition-opacity duration-200 ${
                desktopGetInvolvedOpen
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
            >
              {getInvolvedLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDesktopGetInvolvedOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `hover:text-gray-200 ${
                  isActive ? "font-semibold underline" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-red-600 text-white shadow-lg transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-red-700">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={closeMenu}
            className="text-white focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-2 overflow-y-auto h-[calc(100%-64px)]">
          <NavLink
            to="/"
            onClick={closeMenu}
            className="block py-2 hover:text-gray-300"
          >
            Home
          </NavLink>

          <div>
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex items-center justify-between w-full py-2 font-medium text-left hover:text-gray-300"
            >
              <span>About Us</span>
              {aboutOpen ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </button>
            {aboutOpen && (
              <div className="flex flex-col pl-4 space-y-1 text-sm">
                {aboutLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={closeMenu}
                    className="block py-1 hover:text-gray-300"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
              className="flex items-center justify-between w-full py-2 font-medium text-left hover:text-gray-300"
            >
              <span>Services</span>
              {desktopServicesOpen ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </button>
            {desktopServicesOpen && (
              <div className="flex flex-col pl-4 space-y-1 text-sm">
                {servicesLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={closeMenu}
                    className="block py-1 hover:text-gray-300"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setGetInvolvedOpen(!getInvolvedOpen)}
              className="flex items-center justify-between w-full py-2 font-medium text-left hover:text-gray-300"
            >
              <span>Get Involved</span>
              {getInvolvedOpen ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </button>
            {getInvolvedOpen && (
              <div className="flex flex-col pl-4 space-y-1 text-sm">
                {getInvolvedLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={closeMenu}
                    className="block py-1 hover:text-gray-300"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className="block py-2 hover:text-gray-300"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </nav>
  );
}

export default Navbar;
