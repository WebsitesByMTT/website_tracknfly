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
                    "url(https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
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
                    "url(https://images.pexels.com/photos/7054237/pexels-photo-7054237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
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
                    "url(https://images.pexels.com/photos/9796785/pexels-photo-9796785.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)",
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
                    "url(https://images.pexels.com/photos/6485389/pexels-photo-6485389.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)",
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
                    "url(https://images.pexels.com/photos/1121176/pexels-photo-1121176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
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
                    "url(https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
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
