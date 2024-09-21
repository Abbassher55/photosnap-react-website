import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <nav className="container flex items-center justify-around p-7">
      <span className="logo">
        <Link to="/">
          <img src="./website_logo.png" className="h-4" alt="Website logo" />
        </Link>
      </span>
      <ul className="flex items-center gap-x-9">
        <li>
          <Link
            className={`text-xs font-bold uppercase ${isActive("/stories") ? "text-gray-500 underline" : "text-black"}`}
            to="/stories"
          >
            stories
          </Link>
        </li>
        <li>
          <Link
            className={`text-xs font-bold uppercase ${isActive("/features") ? "text-gray-500 underline" : "text-black"}`}
            to="/features"
          >
            features
          </Link>
        </li>
        <li>
          <Link
            className={`text-xs font-bold uppercase ${isActive("/pricing") ? "text-gray-500 underline" : "text-black"}`}
            to="/pricing"
          >
            pricing
          </Link>
        </li>
      </ul>
      <button className="theme-main-btn">get an invite</button>
    </nav>
  );
};

export default NavBar;
