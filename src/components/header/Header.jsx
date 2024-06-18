import React, { useState } from "react";
import "./header.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/tracknfly-logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="Container">
        <nav className="top space-x-5">
          <ul className="left">
            <li>
              <Link to="/">
                <img src={logo} alt="logo" className="logo" loading="lazy" />
              </Link>
            </li>
            {/* <a href="tel:+1 888-812-2145" className="md:block hidden">
              <li className="flex items-center bg-[#2E70AB] hover:bg-opacity-80 text-white   py-2 px-[1.6rem] rounded-full space-x-4">
                <button className=" text-[1.6rem]">
                  Call Now : +1 888-812-2145
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide cursor-pointer hover:scale-105 transition-all lucide-phone-outgoing"
                >
                  <polyline points="22 8 22 2 16 2" />
                  <line x1="16" x2="22" y1="8" y2="2" />
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </li>
            </a> */}
          </ul>
          <div
            className={`mobile-menu-btn ${open && "opened"}`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
        <div className="bottom">
          <ul>
            <li>
              <Link to="/flights">FLIGHTS</Link>
            </li>
            <li>
              <Link to="/hotels">HOTELS</Link>
            </li>
            <li>
              <Link to="/cars-on-rent">CARS ON RENT</Link>
            </li>
            <li>
              <Link to="/best-deals">BEST DEALS</Link>
            </li>
            <li>
              <Link to="/contact-us">CONTACT US</Link>
            </li>
            <li>
              <Link to="/about-us">ABOUT US</Link>
            </li>
          </ul>
        </div>

        {open && (
          <div onClick={() => setOpen(false)} className="mobile-menu">
            <div className="mobile-menu-container">
              <ul>
                <li>
                  <Link to="/flights" className="flex items-center space-x-8">
                    <span>
                      <img src="/flight.png" alt="error" />
                    </span>
                    <span>FLIGHTS</span>
                  </Link>
                </li>
                <li>
                  <Link to="/hotels" className="flex items-center space-x-8">
                    <span>
                      <img src="/hotel.png" alt="error" />
                    </span>
                    <span>HOTELS</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cars-on-rent"
                    className="flex items-center space-x-8"
                  >
                    <span>
                      <img src="/car.png" alt="error" />
                    </span>
                    <span>CARS ON RENT</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/best-deals"
                    className="flex items-center space-x-8"
                  >
                    <span>
                      <img src="/deals.png" alt="error" />
                    </span>
                    <span>BEST DEALS</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="flex items-center space-x-8"
                  >
                    <span>
                      <img src="/contact.png" alt="error" />
                    </span>
                    <span>CONTACT US</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className="flex items-center space-x-8">
                    <span>
                      <img src="/about.png" alt="error" />
                    </span>
                    <span>ABOUT US</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
