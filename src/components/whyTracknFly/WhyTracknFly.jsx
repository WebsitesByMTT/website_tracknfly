import React from "react";

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
    <div className=" overflow-hidden py-[5rem] px-[2rem] md:py-[10rem] md:px-[4rem]">
      <div className=" ">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[4rem]">
          {data.map((item) => (
            <div className=" flex flex-col gap-[1.6rem]">
              <h3 className=" text-[2rem] font-[500] text-left">
                {item.title}
              </h3>
              <p className=" text-[1.6rem] text-justify">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyTracknFly;
