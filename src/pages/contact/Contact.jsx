import React from "react";
import "./contact.scss";
import { FiMapPin } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact-us">
      <div className="container">
        <h2>
          Get <span>In Touch With Us</span>
        </h2>
        <div className="content">
          <div className="left">
            <div className="titles">
              <h3>Contact Informaion</h3>
              <p>
                At FLYNFARE LLC we're constantly satisfied to get with both new
                and existing customers, So in the event that you have a question
                or require any information, Please feel free to reach on below
                contact details.
              </p>
            </div>
            <ul className="details">
              <li>
                <FiMapPin className="icon" />
                <span>Address: </span> Irving, TX 75038, USA.
              </li>
              <li>
                <IoIosCall />
                <span>Phone : </span> 1-888-831-1814
              </li>
              <li>
                <AiOutlineMail />
                <span>E-mail : </span> admin@flynfare.com
              </li>
            </ul>

            <ul className="social">
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
          <div className="right">
            <div className="titles">
              <h2>Contact Form</h2>
              <p>
                You can leave us your query below; our support team will be in
                touch with you shortly.
              </p>
            </div>

            <form className="form">
              <input type="text" placeholder="Name" required />
              <input type="text" placeholder="Contact Number" required />
              <input type="text" placeholder="E-mail" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Message" rows={5} />
              <button>Submit</button>
            </form>
          </div>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.7723108535197!2d77.11295177466656!3d28.69645688117642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03e51f3e8eb9%3A0xae6f0e1fa75cfb07!2sVardhman%20Premium%20Mall%2C%20Deepali%2C%20Pitampura%2C%20Delhi%2C%20110083!5e0!3m2!1sen!2sin!4v1690628221714!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
