import React from "react";
import "./howWeCanHelp.scss";
import { RiEarthLine } from "react-icons/ri";
import { BsCoin, BsTicketPerforated } from "react-icons/bs";

const HowWeCanHelp = () => {
  return (
    <div className="howWeCanHelp">
      <div className="container">
        <div className="titles">
          <h2>Make your journey memorable with us</h2>
          <p>We provide pocket-friendly services that make your journey more enjoyable</p>
        </div>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <RiEarthLine />
            </div>
            <h3>Delve yourself into your favorite place</h3>
            <p>
               At Trackn Fly, you can search for your most awaited travel destination. With us, travel the whole world in your budget.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <BsTicketPerforated />
            </div>
            <h3>Flight and hotel booking</h3>
            <p>
              Once you selected your destination, now you can find the cheapest hotel and flight tickets.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <BsCoin />
            </div>
            <h3>Pay and explore</h3>
            <p>
              After booking a hotel and flight, explore more holiday packages. Enjoy your trip ahead.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeCanHelp;
