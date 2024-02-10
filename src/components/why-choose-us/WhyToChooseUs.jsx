import React from "react";
import "./whyToChooseUs.scss";
import Rating1IMG from "/rating1.jpg";
import  WtcuPrimaryIMG  from "/wtcu-primary.jpg"
import WtcuSecondaryIMG from "/wtcu-secondary.jpg"

const WhyToChooseUs = () => {
  return (
    <div className="whyToChooseUs">
      <div className="container">
        <div className="titles">
          <h2>Why You Should Choose Us</h2>
          <p>
            You Should Choose us because we provide the best accomodation and we
            have sorted all the flights here based on their rating
          </p>
        </div>

        <div className="content">
          <div className="left">
            <ul className="list">
              <li>
                <span className="series">1</span>
                <h3>We Provide the best choice for you</h3>
                <p>
                  We always prioriize customer comfort and satisfaction. That's
                  why we onlu accept the best flight
                </p>
              </li>
              <li>
                <span className="series">2</span>
                <h3>Low Price with best quality</h3>
                <p>
                  although the price tends to be cheaper but it will not affect
                  the quality of service, so don't worry
                </p>
              </li>
              <li>
                <span className="series">3</span>
                <h3>Can refund up to 100%</h3>
                <p>
                  Don't worry if suddenly you have a problem and want to do a
                  refund, you can get a full refund.
                </p>
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="right-container">
              <div className="rating">
                <div className="profile">
                  <img
                    src={Rating1IMG}
                    alt="user-rating"
                    loading="lazy"
                  />
                </div>
                <div className="text">
                  <h4>Tom Holland</h4>
                  <p>
                    Giving rating <span>4.5</span>
                  </p>
                </div>
              </div>
              <div className="primary-img">
                <div className="primary-img-container">
                  <img
                    src={WtcuPrimaryIMG}
                    alt="wtcu-primary"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="secondary-img">
                <img
                  src={WtcuSecondaryIMG}
                  alt="wtcu-secondary"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyToChooseUs;
