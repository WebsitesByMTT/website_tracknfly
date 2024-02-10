import React from "react";
import "./topFlightOffer.scss";

const TopFlightOffer = () => {
  return (
    <div className="topFlightOffer">
      <div className="container">
        <div className="text">
          <h2 className="title">
            Top <span> Flight Offers</span>
          </h2>
          <p className="desc">
            If you’re planning your next adventure, we’ve got the best cheap
            flight deals ready to whisk you away to your favourite locations.
            Whether it’s a fast-paced city escape in bustling New York, exotic
            weather in the Philippines or a far-flung trip to Sydney you’re
            seeking, we’ve got a variety of cheap flights available from United
            States to other major airports. We have close partnerships with over
            150 airlines
          </p>
        </div>
        <div className="content">
          <div className="row1">
            <div className="left">
              <div
                className="card"
                style={{
                  backgroundImage:
                    "url(/top-flight-card-1.jpeg)",
                }}
              >
                <div className="card-container">
                  <div className="card-container-inner">
                    <div className="text">
                      <p>Start From USD 92</p>
                      <h3>Istanbul</h3>
                    </div>
                    <button>Book Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div
                className="card"
                style={{
                  backgroundImage:
                    "url(/top-flight-card-2.jpeg)",
                }}
              >
                <div className="card-container">
                  <div className="card-container-inner">
                    <div className="text">
                      <p>Start From USD 92</p>
                      <h3>Istanbul</h3>
                    </div>
                    <button>Book Now</button>
                  </div>
                </div>
              </div>
              <div
                className="card"
                style={{
                  backgroundImage:
                    "url(/top-flight-card-3.jpeg)",
                }}
              >
                <div className="card-container">
                  <div className="card-container-inner">
                    <div className="text">
                      <p>Start From USD 92</p>
                      <h3>Istanbul</h3>
                    </div>
                    <button>Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row2">
            <div className="left">
              <div
                className="card"
                style={{
                  backgroundImage:
                    "url(/top-flight-card-4.jpeg)",
                }}
              >
                <div className="card-container">
                  <div className="card-container-inner">
                    <div className="text">
                      <p>Start From USD 92</p>
                      <h3>Istanbul</h3>
                    </div>
                    <button>Book Now</button>
                  </div>
                </div>
              </div>
              <div
                className="card"
                style={{
                  backgroundImage:
                    "url(/top-flight-card-5.jpeg)",
                }}
              >
                <div className="card-container">
                  <div className="card-container-inner">
                    <div className="text">
                      <p>Start From USD 92</p>
                      <h3>Istanbul</h3>
                    </div>
                    <button>Book Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div
                className="card"
                style={{
                  backgroundImage:
                    "url(/top-flight-card-6.jpeg)",      
                }}
              >0...............
                <div className="card-container">
                  <div className="card-container-inner">
                    <div className="text">
                      <p>Start From USD 92</p>
                      <h3>Istanbul</h3>
                    </div>
                    <button>Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFlightOffer;
