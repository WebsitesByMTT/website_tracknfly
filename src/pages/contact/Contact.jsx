import React from "react";
import "./contact.scss";
import { FiMapPin } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import AboutTrackenFly from "../../components/aboutTrackenFly/AboutTrackenFly";
import { Link } from "react-router-dom";
import WhyTracknFly from "../../components/whyTracknFly/WhyTracknFly";
import ProductOffering from "../../components/productOffering/ProductOffering";
import { Helmet } from "react-helmet";
import Hero from "../../components/hero/Hero";

const social = [
  {
    id: 1,
    logo: "/facebook.svg",
    name: "facebook",
    url: "",
  },
  {
    id: 2,
    logo: "/instagram.svg",
    name: "instagram",
    url: "",
  },
  {
    id: 3,
    logo: "/twitter.svg",
    name: "twitter",
    url: "",
  },
  {
    id: 4,
    logo: "/linkedin.svg",
    name: "linkedin",
    url: "",
  },
];
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>CONTACT US - Trackn Fly</title>
        <meta
          name="description"
          content="Trackn Fly -  Trackn Fly is the best travel agency around the world that offers cheap hotels, flights, and cars on rentals. It has some coupons where you can save money."
        />
        <meta
          property="og:url"
          content="https://www.tracknfly.com/contact-us"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CONTACT US - Trackn Fly" />
        <meta property="og:site_name" content="CONTACT US" />
        <meta
          property="og:description"
          content="Trackn Fly is the best travel agency around the world that offers cheap hotels, flights, and cars on rentals. For more information contact us anytime."
        />
        <meta
          property="og:image"
          content="https://i.im.ge/2024/04/30/ZPv6SY.Final-logo.jpeg"
        />
      </Helmet>
      <Hero text={"Explore Flights - Hotels Online & Cars on Rent"} />

      <div className="contact-us">
        <div className="Container py-[7rem] flex flex-col gap-[7rem]">
          <div className="px-[2rem] md:px-[4rem] flex items-center justify-center flex-col gap-[1rem] ">
            <h2 className="text-black text-center tracking-wide font-semibold  text-[4rem]">
              We are here to help
            </h2>
            <p className=" text-[2rem] w-full md:w-[80%] text-center">
              Are you struggling to find flights or hotels? or do you need
              another help regarding the website? we have our most experienced
              staff who will provide you with guidance at any time. You can ask
              anything at any time with our expert team via phone and email.
              They will ensure you have a smooth experience because your
              satisfaction is the top most priority.
            </p>
          </div>
          <div className="content flex flex-col lg:flex-row">
            <div className="left  py-[4rem] px-[2rem] md:px-[7rem]">
              <div className="flex flex-col gap-[1rem]">
                <h3 className=" text-[3rem] font-semibold  tracking-wide ">
                  Get in touch with us and make your trip more enjoyable
                </h3>

                <p className=" text-[2rem]">
                  At FLYNFARE LLC we're constantly satisfied to get with both
                  new and existing customers, So in the event that you have a
                  question or require any information, Please feel free to reach
                  on below contact details.
                </p>
              </div>
              <ul className=" flex flex-col gap-[2rem]">
                <li className=" text-[2rem] flex items-center gap-[1rem]">
                  <FiMapPin className="icon" />
                  <span>Address: </span> Irving, TX 75038, USA.
                </li>
                <li className=" text-[2rem] flex items-center gap-[1rem]">
                  <IoIosCall />
                  <span>Phone : </span> 1-888-831-1814
                </li>
                <li className=" text-[2rem] flex items-center gap-[1rem]">
                  <AiOutlineMail />
                  <span>E-mail : </span> admin@flynfare.com
                </li>
              </ul>

              <ul className=" flex flex-row gap-[2rem]">
                {social.map((item) => (
                  <li key={item?.id} className=" cursor-pointer">
                    <Link to={item?.url}>
                      <img
                        src={item?.logo}
                        className=" w-[3.5rem] h-[3.5rem]"
                      />
                    </Link>
                  </li>
                ))}
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
        </div>
        <div className=" w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.7723108535197!2d77.11295177466656!3d28.69645688117642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03e51f3e8eb9%3A0xae6f0e1fa75cfb07!2sVardhman%20Premium%20Mall%2C%20Deepali%2C%20Pitampura%2C%20Delhi%2C%20110083!5e0!3m2!1sen!2sin!4v1690628221714!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className=" w-full"
          ></iframe>
        </div>
        <WhyTracknFly />
        <AboutTrackenFly />
      </div>
    </>
  );
};

export default Contact;
