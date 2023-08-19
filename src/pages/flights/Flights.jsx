import React from "react";
import "./flight.scss";
import { GoLocation } from "react-icons/go";
import WhyToChooseUs from "../../components/why-choose-us/WhyToChooseUs";
import MostPopularFlightDest from "../../components/mostPopularFlightDest/MostPopularFlightDest";

const Flights = () => {
  return (
    <>
      <div className="flights">
        <div className="container">
          <h2>Discover the touch of Nature</h2>

          <div className="content">
            <div className="cards">
              <div className="card">
                <div className="card-container">
                  <div className="card-content">
                    <div className="card-title">
                      <GoLocation />
                      <span>Tanzania</span>
                    </div>
                    <img src="/f-c-1.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-container">
                  <div className="card-content">
                    <div className="card-title">
                      <GoLocation />
                      <span>Colombia</span>
                    </div>
                    <img src="/f-c-2.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-container">
                  <div className="card-content">
                    <div className="card-title">
                      <GoLocation />
                      <span>Bahrain</span>
                    </div>
                    <img src="/f-c-3.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-container">
                  <div className="card-content">
                    <div className="card-title">
                      <GoLocation />
                      <span>Mauritius</span>
                    </div>
                    <img src="/f-c-4.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhyToChooseUs />
      <MostPopularFlightDest />
    </>
  );
};

export default Flights;
