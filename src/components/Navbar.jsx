import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const NavBar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth < 768) {
      setIsMenuOpen(!isMenuOpen);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); // Close the menu on desktop screens
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isActive = (path) => location.pathname === path;
  return (
    <>
      <nav className="container relative top-0 z-50 flex flex-col items-center justify-between bg-white p-7 md:flex-row md:justify-around">
        <div className="w-full max-md:flex max-md:items-center max-md:justify-between md:w-1/3 lg:w-1/4">
          <Link to="/">
            <img src="./website_logo.png" className="h-4" alt="Website logo" />
          </Link>
          <div className="toggle-icon hidden max-md:block">
            <svg
              onClick={toggleMenu}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`size-6 ${isMenuOpen ? "hidden" : "block"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              onClick={toggleMenu}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`size-6 ${isMenuOpen ? "block" : "hidden"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div
          className={`flex w-full flex-col justify-between gap-3 overflow-hidden transition-all duration-700 md:w-2/3 md:flex-row lg:w-1/2 ${isMenuOpen ? "max-md:mt-6 max-md:h-fit max-md:opacity-100" : "max-md:h-0 max-md:opacity-0"} `}
        >
          <ul className="flex flex-col items-center gap-x-9 md:flex-row">
            <li className="max-md:mb-5">
              <Link
                className={`text-xs font-bold uppercase ${isActive("/stories") ? "text-gray-500 underline" : "text-black"}`}
                to="/stories"
              >
                stories
              </Link>
            </li>
            <li className="max-md:mb-5">
              <Link
                className={`text-xs font-bold uppercase ${isActive("/features") ? "text-gray-500 underline" : "text-black"}`}
                to="/features"
              >
                features
              </Link>
            </li>
            <li className="max-md:mb-5">
              <Link
                className={`text-xs font-bold uppercase ${isActive("/pricing") ? "text-gray-500 underline" : "text-black"}`}
                to="/pricing"
              >
                pricing
              </Link>
            </li>
          </ul>
          <hr className="hidden max-md:mb-6 max-md:block" />
          <button className="theme-main-btn">get an invite</button>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-20 bg-black bg-opacity-50 ${isMenuOpen ? "max-md:block" : "hidden"}`}
      ></div>
    </>
  );
};

export default NavBar;
