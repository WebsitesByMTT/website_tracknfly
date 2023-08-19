import React from "react";
import "./benefits.scss";

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="container">
        <div className="cards">
          <div className="card">
            <div className="img">
              <img
                src="/cuctomer-care.png"
                alt="customer-care"
                loading="lazy"
              />
            </div>
            <div className="text">
              <p className="title">24/7 Customer Support </p>
              <p className="subtitle">
                Our travel experts provide quality service whenever you need it
              </p>
            </div>
          </div>

          <div className="card">
            <div className="img">
              <img src="/easy-steps.png" alt="customer-care" loading="lazy" />
            </div>
            <div className="text">
              <p className="title"> Easy and fast booking </p>
              <p className="subtitle">Few and Easy steps to book online</p>
            </div>
          </div>

          <div className="card">
            <div className="img">
              <img src="/best-price.png" alt="customer-care" loading="lazy" />
            </div>
            <div className="text">
              <p className="title">Best Price Guarantee </p>
              <p className="subtitle">
                Morbi semper fames lobortis ac hac penatibus
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
