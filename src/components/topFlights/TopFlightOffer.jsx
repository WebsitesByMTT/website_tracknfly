import React from "react";
import "./topFlightOffer.scss";
import card1Img from "../../assets/images/top-flight-card-1.jpeg";
import card2Img from "../../assets/images/top-flight-card-2.jpeg";
import card3Img from "../../assets/images/top-flight-card-3.jpeg";
import card4Img from "../../assets/images/top-flight-card-4.jpeg";
import card5Img from "../../assets/images/top-flight-card-5.jpeg";
import card6Img from "../../assets/images/top-flight-card-6.jpeg";

const TopFlightOffer = () => {
  return (
    <div className="topFlightOffer">
      <div className="Container">
        <div className="text">
          <h2 className="title">Book Top Flight with Flexibility</h2>
          <p className="desc">
            Are you looking for your next trip? then check out the top airline
            ticket deals. If you want to discover the vibrant city of New York
            or explore the beauty of Sydney there is everything for everyone.
            Here you can book and compare the cheapest airline and flight
            tickets. With our exclusive packages, find the perfect holiday
            packages and make unforgettable memories.
          </p>
        </div>
        <div className="content">
          <div className="row1">
            <div className="left">
              <div
                className="card"
                style={{
                  backgroundImage: `url('${card1Img}')`,
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
                  backgroundImage: `url('${card2Img}')`,
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
                  backgroundImage: `url('${card3Img}')`,
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
                  backgroundImage: `url('${card4Img}')`,
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
                  backgroundImage: `url('${card5Img}')`,
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
                  backgroundImage: `url('${card6Img}')`,
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
        </div>
      </div>
    </div>
  );
};

export default TopFlightOffer;
