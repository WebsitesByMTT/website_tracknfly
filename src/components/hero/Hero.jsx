import React, { useState, useEffect } from "react";
import "./hero.scss";
import { FaPlane } from "react-icons/fa";
import Popup from "../popup/Popup";
import ErrorPopup from "../errorPopup/ErrorPopup";
import Script from "../../utils/Script";
const images = ["/f-c-1.jpg", "f-c-2.jpg", "f-c-3.jpg", "f-c-4.jpg"];

const Hero = ({ text, activeTab = "flight" }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [active, setActive] = useState(activeTab);
  const [error, setError] = useState("");
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <>
      <div
        className="hero"
        style={{ backgroundImage: `url(${images[currentSlide]})` }}
      >
        {popup && <Popup />}
        {error && (
          <ErrorPopup error={error} setError={setError} setPopup={setPopup} />
        )}
        <div className="Container">
          <div className="title">
            <h1>
              <div className="icon">
                <FaPlane />
              </div>
              {text}
            </h1>
            <h2>Search. Book. Travel.</h2>
          </div>

          <div className="content">
            <div className="flex text-[1.8rem] space-x-2 items-center">
              <div
                onClick={() => setActive("flight")}
                className={` ${
                  active === "flight" ? "bg-[#F99C00] text-white" : "bg-white"
                } py-2 px-6 rounded-tl-md rounded-tr-md cursor-pointer`}
              >
                Flights
              </div>
              <div
                onClick={() => setActive("hotel")}
                className={` ${
                  active === "hotel" ? "bg-[#F99C00] text-white" : "bg-white"
                } py-2 px-6 rounded-tl-md rounded-tr-md cursor-pointer`}
              >
                Hotels
              </div>
              <div
                onClick={() => setActive("car")}
                className={` ${
                  active === "car" ? "bg-[#F99C00] text-white" : "bg-white"
                } py-2 px-6 rounded-tl-md rounded-tr-md cursor-pointer`}
              >
                Cars
              </div>
            </div>

            {!iframeLoaded && (
              <div className="relative">
                <div className="absolute top-0 left-0 h-full w-full bg-opacity-40 animate-pulse bg-white animate-shine"></div>
                <div className="flex items-center justify-center h-[42rem] md:h-[9.3rem]  rounded-lg shadow-md"></div>
              </div>
            )}

            <iframe
              scrolling="no"
              frameBorder="0"
              src={
                "//www.travelpayouts.com/widgets/22205c47ab682a18e67bf3138082cce3.html?v=2203"
              }
              allowFullScreen={true}
              onLoad={() => setIframeLoaded(true)}
              // className={(active === "flight" || iframeLoaded) ? 'h-[70rem] md:h-[20rem] lg:h-[15rem]' : 'hidden'}
              className={`${
                active != "flight" || !iframeLoaded
                  ? "hidden"
                  : "h-[70rem] md:h-[20rem] lg:h-[15rem]"
              }`}
              title="Flights"
            ></iframe>

            <iframe
              scrolling="no"
              frameBorder="0"
              onLoad={() => setIframeLoaded(true)}
              src="//www.travelpayouts.com/widgets/c2fcc9c9f099c9a7e5502aa4dea71d3d.html?v=2267"
              className={`${
                active != "hotel" || !iframeLoaded
                  ? "hidden"
                  : "h-[70rem] md:h-[20rem] lg:h-[15rem]"
              }`}
              title="Hotels"
            ></iframe>

            <div
              id="cars-rental"
              className={`${
                active != "car" || !iframeLoaded ? "hidden" : "lg:h-[21.4rem]"
              }`}
            >
              <Script
                src={
                  "//c1.travelpayouts.com/content?promo_id=1486&shmarker=368154&trs=174684&language=en&currency=USD&from=&to=&theme=1&powered_by=true"
                }
                target={"cars-rental"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
