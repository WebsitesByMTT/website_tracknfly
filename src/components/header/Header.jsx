import React, { useState } from "react";
import "./header.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/tracknfly-logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="Container">
        <nav className="top">
          <ul className="left">
            <li>
              <Link to="/">
                <img src={logo} alt="logo" className="logo" loading="lazy" />
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
              <NavLink to="/cars-on-rent">CARS ON RENT</NavLink>
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
                  <Link to="/flights" className="flex items-center space-x-8"><span><img src="/flight.png" alt="error"/></span><span>FLIGHTS</span></Link>
                </li>
                <li>
                  <Link to="/hotels" className="flex items-center space-x-8"><span><img src="/hotel.png" alt="error"/></span><span>HOTELS</span></Link>
                </li>
                <li>
                  <Link to="/cars-on-rent" className="flex items-center space-x-8"><span><img src="/car.png" alt="error"/></span><span>CARS ON RENT</span></Link>
                </li>
                <li>
                  <Link to="/best-deals" className="flex items-center space-x-8"><span><img src="/deals.png" alt="error"/></span><span>BEST DEALS</span></Link>
                </li>
                <li>
                  <Link to="/contact-us" className="flex items-center space-x-8"><span><img src="/contact.png" alt="error"/></span><span>CONTACT US</span></Link>
                </li>
                <li>
                  <Link to="/about-us" className="flex items-center space-x-8"><span><img src="/about.png" alt="error"/></span><span>ABOUT US</span></Link>
                </li>
                <li>
                  <Link to="/signin" className="flex items-center space-x-8"><span><img src="/login.png" alt="error"/></span><span>SIGN IN</span></Link>
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
