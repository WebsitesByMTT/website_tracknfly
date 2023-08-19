import React from "react";
import "./mostPopularFlightDest.scss";

const MostPopularFlightDest = () => {
  return (
    <div className="explore">
      <div className="container">
        <div className="titles">
          <h2>MOST POPULAR FLIGHT DESTINATIONS </h2>
          <p>
            Bringing you the latest deals and news articles hot off the press.
          </p>
        </div>

        <div className="content">
          <div className="cards">
            <div className="card">
              <div className="img">
                <img
                  src="/f-c-1.jpg"
                  alt="mostPopularFLightDest"
                  loading="lazy"
                />
              </div>
              <h4>Enjoy The Beauty of The Scotland</h4>
            </div>
            <div className="card">
              <div className="img">
                <img src="/f-c-2.jpg" alt="mostPopularFLightDest" />
              </div>
              <h4>Enjoy The Beauty of The switzerland</h4>
            </div>
            <div className="card">
              <div className="img">
                <img src="/f-c-3.jpg" alt="mostPopularFLightDest" />
              </div>
              <h4>Enjoy The Beauty of The mauritius</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopularFlightDest;
