import React from "react";
import EasyStepsIMG from "../../assets/images/easy-steps.png";
import BestPriceIMG from "../../assets/images/best-price.png";
import Support from "../../assets/images/24*7Support.png";
import "./benefits.scss";

const Benefits = () => {
  const data = [
    {
      image: Support,
      title: "24/7 Customer Support",
      subtitle:
        "Get in touch with us:  we are always here to help -  reach us 24 hours a day, 7 Days  a Week...",
    },
    {
      image: EasyStepsIMG,
      title: "Book effortlessly",
      subtitle:
        "We at Trackn Fly give you the best opportunity to find the perfect flight and hotel for your next adventure...",
    },
    {
      image: BestPriceIMG,
      title: "Exclusive deals on Trackn Fly",
      subtitle:
        "By simply downloading the Trackn Fly, you can have access to all the exclusive deals and discounts while..",
    },
  ];
  return (
    <div className="benefits">
      <div className="benefits_title">
        Explore and Save your money on Flights and Hotels
        <br className="break_text" /> Discover. Book.Travel
      </div>
      <div className="container">
        <div className="cards">
          {data?.map((item, ind) => (
            <div className="card" key={ind}>
              <div className="img">
                <img
                  src={item.image}
                  className="easy-steps"
                  alt="customer-care"
                  loading="lazy"
                />
              </div>
              <div className="text">
                <p className="title">{item.title}</p>
                <p className="subtitle">
                  {item.subtitle}
                  <span className="read_more">read more</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
