import { Link } from "react-router-dom";
import "./navigation.scss";
import { useState } from "react";
function Navigation() {
  const [mobileNav, setMobileNav] = useState(false);
  const handleMobileNav = () => {
    setMobileNav((pre) => !pre);
  };
  return (
    <div className="navigate">
      <div className="logo">
        luxury
        <span>hotels</span>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/facilities">Facilities</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact-us</Link>
          </li>
        </ul>
      </nav>
      <div className="mobile-nav" onClick={handleMobileNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        {mobileNav && (
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/facilities">Facilities</Link>
              </li>
              <li>
                <Link to="/rooms">Rooms</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact-us</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Navigation;
