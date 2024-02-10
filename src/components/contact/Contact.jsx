import React from "react";
import "./contact.scss";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import { CiFacebook } from "react-icons/ci";
import { IoLogoFacebook } from "react-icons/io";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="item">
            {/* <div className="img">
              <img src="/email.png" alt="email" loading="lazy" />
            </div> */}
            {/* <div className="text">
              <h3 className="title">For Email us</h3>
              <p className="subtitle">admin@flynfare.com</p>
            </div> */}
          </div>
          {/* <div className="item">
            <div className="img">
              <img src="/call-f.png" alt="call" loading="lazy" />
            </div>
            <div className="text">
              <h3 className="title">For reservation and booking </h3>
              <p className="subtitle">1-888-831-1814 </p>
              <p className="desc">
                calls may be recorded for training and quality purposes
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="misc">
        <div className="container">
          <div className="item">
            <h3>Location</h3>

            <div className="content">
              <ul>
                <li>
                  <FiPhoneCall className="icon" />
                  <p>1-888-831-1814 </p>
                </li>
                <li>
                  <AiOutlineMail className="icon" />
                  <p>admin@flynfare.com</p>
                </li>
              </ul>
              <ul>
                <li>
                  <ImLocation className="icon" />
                  <p>Irving, TX 75038, USA </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="item">
            <h3>Useful Links</h3>
            <div className="content">
              <ul>
                <li>Online Check-in</li>
                <li>Arilines Contact</li>
                <li>Pay Now</li>
              </ul>
            </div>
          </div>
          <div className="item social">
            <h3>Keep in Touch</h3>
            <div className="content">
              <ul>
                <li>
                  <IoLogoFacebook className="icon" />
                </li>
                <li>
                  <AiFillInstagram className="icon" />
                </li>
                <li>
                  <AiFillTwitterCircle className="icon" />
                </li>
                <li>
                  <AiFillLinkedin className="icon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
