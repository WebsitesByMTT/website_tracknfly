import React, { useState } from "react";
import "./header.scss";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

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
              <Link to="/flights">Flights</Link>
            </li>
            <li>
              <Link to="/hotels">Hotels</Link>
            </li>
            <li>
              <Link to="/car-on-rent">Car on rent</Link>
            </li>
            <li>
              <Link to="/best-deals">Best Deals</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/sign-in">Sign in</Link>
            </li>
          </ul>
        </div>

        {open && (
          <div onClick={() => setOpen(false)} className="mobile-menu">
            <div className="mobile-menu-container">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/flights">Flights</Link>
                </li>
                <li>Business Class</li>
                <li>Airline deals</li>
                <li>
                  <Link to="/contact-us">Contact us</Link>
                </li>
                <li>Car Booking</li>
                <li>Hotel Booking</li>
                <li>Flight Booking</li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
