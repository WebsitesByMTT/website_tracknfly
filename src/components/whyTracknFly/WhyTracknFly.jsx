import React from "react";
import "./whyTracknFly.scss";

const data = [
  {
    id: 1,
    title: "Why Trackn Fly?",
    desc: "Trackn Fly is one of the most renowned leading company around the world. We offer great deals on airline, flight tickets, and hotel booking with exclusive discounts. There you can also hire a car on rental at a cheap price. By using our website, you will have the most seamless online booking experience without any hassle.",
  },
  {
    id: 2,
    title: "Book Flights with Trackn Fly",
    desc: "We at Trackn Fly offer the best deal on airline tickets in one place where you can not find cheap flight tickets but a hotel booking at a low price. We also get affordable and customized holiday packages. For us, our customer satisfaction is the top most priority and we have our dedicated staff who will be there to help you at any time. For the past few years, we are very happy to fulfill the dreams of many travelers who love to explore different places. So, with Trackn Fly discover the whole world without breaking your pocket.",
  },
  {
    id: 3,
    title: "Domestic Flights with Trackn Fly",
    desc: "Trackn Fly is the leading website for flight and airline bookings. We offer the cheapest fare guarantee and give instant notifications to update you on the current flight status with amazing discounts.",
  },
];

const WhyTracknFly = () => {
  return (
    <div className="whyTracknFly">
      <div className="container">
        <div className="cards">
          {data.map((item) => (
            <div className="card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyTracknFly;