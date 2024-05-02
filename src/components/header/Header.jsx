import React, { useState } from "react";
import "./header.scss";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="Container">
        <nav className="top">
          <ul className="left">
            <li>
              <Link to="/">
                <img
                  src="/tracknfly-logo.png"
                  alt="logo"
                  className="logo"
                  loading="lazy"
                />
              </Link>
            </li>
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
              <NavLink to="/flights">FLIGHTS</NavLink>
            </li>
            <li>
              <NavLink to="/hotels">HOTELS</NavLink>
            </li>
            <li>
              <NavLink to="/car-on-rent">CAR ON RENT</NavLink>
            </li>
            <li>
              <NavLink to="/best-deals">BEST DEALS</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">CONTACT US</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">ABOUT US</NavLink>
            </li>
            <li>
              <NavLink to="/signin">SIGN IN</NavLink>
            </li>
          </ul>
        </div>

        {open && (
          <div onClick={() => setOpen(false)} className="mobile-menu">
            <div className="mobile-menu-container">
              <ul>
                <li>
                  <Link to="/flights">FLIGHTS</Link>
                </li>
                <li>
                  <Link to="/hotels">HOTELS</Link>
                </li>
                <li>
                  <Link to="/car-on-rent">CAR ON RENT</Link>
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
                <li>
                  <Link to="/signin">SIGN IN</Link>
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
