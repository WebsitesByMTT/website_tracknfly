import React, { useState } from "react";
import "./header.scss";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="container">
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
            <li>
              <div className="mail">
                <FiMail />
                <span>admin@flynfare.com</span>
              </div>
            </li>
          </ul>
          <div className="right">
            <FiPhoneCall className="icon" />
            <div className="text">
              <span>Call Us Today!</span>
              <span>1-888-831-1814</span>
            </div>
          </div>
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
          </ul>
        </div>

        {open && (
          <div className="mobile-menu">
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
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
