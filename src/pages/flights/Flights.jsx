import React, { lazy } from "react";
import "./flight.scss";
import { GoLocation } from "react-icons/go";
import WhyToChooseUs from "../../components/why-choose-us/WhyToChooseUs";
import MostPopularFlightDest from "../../components/mostPopularFlightDest/MostPopularFlightDest";
import FC1IMG from "/f-c-1.jpg"
import FC2IMG from "/f-c-2.jpg" 
import FC3IMG from "/f-c-3.jpg" 
import FC4IMG from "/f-c-4.jpg" 

const Flights = () => {
  return (
    
    <>
      <div className="flights">
        <div className="Container">
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
                    <img src={FC1IMG} alt="" loading="lazy"/>
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
                    <img src={FC2IMG} alt="" loading="lazy" />
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
                    <img src={FC3IMG} alt="" loading="lazy"/>
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
                    <img src={FC4IMG} alt="" loading="lazy" />
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
