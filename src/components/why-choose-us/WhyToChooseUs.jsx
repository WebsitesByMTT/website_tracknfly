import React from "react";
import "./whyToChooseUs.scss";
import Rating1IMG from "/rating1.jpg";
import  WtcuPrimaryIMG  from "/wtcu-primary.jpg"
import WtcuSecondaryIMG from "/wtcu-secondary.jpg"

const WhyToChooseUs = () => {
  return (
    <div className="whyToChooseUs">
      <div className="Container">
        <div className="titles">
          <h2>Why choose us</h2>
          <p>Trackn Fly is one of the best travel website where you will find exclusive offers on cheap airline tickets. If you are struggling to find last-minute hotels and flights, then worry not because there are numerous affordable hotels and flights. We also offer cheap cars on rent. So, without any hurry create your own memory with us.</p>
        </div>

        <div className="content">
          <div className="left">
            <ul className="list">
              <li>
                <span className="series">1</span>
                <h3>We provide the most comfortable choice for you</h3>
                <p>
                For us, customer satisfaction is the top most priority.
                </p>
              </li>
              <li>
                <span className="series">2</span>
                <h3>Cheap price but the best services</h3>
                <p>
                We provide cheap plane tickets and hotel bookings to our clients. But that does not mean that they are of bad quality or worse services. So, without any doubt book your last-minute flights and save your money.
                </p>
              </li>
              <li>
                <span className="series">3</span>
                <h3>Hassle-free refunds</h3>
                <p>
                Wondering about the refunds? Then don’t worry because we understand you. You need to cancel your flight tickets before 24 hours and you will be entitled to a refund. It will be credited to your account between 7 to 12 days.
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
