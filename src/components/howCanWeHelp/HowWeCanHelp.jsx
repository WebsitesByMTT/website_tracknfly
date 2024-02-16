import React from "react";
import "./howWeCanHelp.scss";
import { RiEarthLine } from "react-icons/ri";
import { BsCoin, BsTicketPerforated, BsXSquare } from "react-icons/bs";

const HowWeCanHelp = () => {
  return (
    <div className="howWeCanHelp">
      <div className="container">
        <div className="titles">
          <h2>How we can help you journey</h2>
          <p>Our service are very comfortable and can make you happy</p>
        </div>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <RiEarthLine />
            </div>
            <h3>Find your destination</h3>
            <p>
              Find your travel destination, we have covered all regions in the
              world
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <BsTicketPerforated />
            </div>
            <h3>Book a ticket</h3>
            <p>
              After finding the trip you want to go to, you can immediately
              order the ticket.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <BsCoin />
            </div>
            <h3>Pay and explore destination</h3>
            <p>
              After you pay you can immediately enjoy the trip to destination
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <BsXSquare />
            </div>
            <h3>Cancel Booking</h3>
            <p>If your plans change, you can cancel your booking with ease.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeCanHelp;
