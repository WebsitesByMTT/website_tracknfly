import React from "react";
import EasyStepsIMG from "/easy-steps.png"
import BestPriceIMG from "/best-price.png"
import "./benefits.scss";

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="container">
        <div className="cards">
          <div className="card">
            <div className="img">
              <img src={EasyStepsIMG} alt="customer-care" loading="lazy" />
            </div>
            <div className="text">
              <p className="title"> Easy and fast booking </p>
              <p className="subtitle">Few and Easy steps to book online</p>
            </div>
          </div>

          <div className="card">
            <div className="img">
              <img src={BestPriceIMG} alt="customer-care" loading="lazy" />
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
