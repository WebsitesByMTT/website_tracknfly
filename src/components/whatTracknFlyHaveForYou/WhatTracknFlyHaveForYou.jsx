import React from "react";
import "./whatTracknFlyHaveForYou.scss";
import discover from "../../assets/images/discover.png";
import hassleFree from "../../assets/images/hassle-free.png";
import freeToUse from "../../assets/images/free-to-use.png";
import planVocation from "../../assets/images/plan-vocation.png";

const data = [
  {
    id: 1,
    icon: discover,
    title: "Discover cheap flight tickets",
    desc: "Find the cheapest deals on airline tickets and compare them all with just a few clicks without any trouble.",
  },
  {
    id: 2,
    icon: hassleFree,
    title: "Book with hassle-free",
    desc: "It is the easiest way to book your flight tickets. There are unlimited flights so that you can compare it with others.",
  },
  {
    id: 3,
    icon: freeToUse,
    title: "Free to use",
    desc: "It is the most trusted website and has no hidden charges.",
  },
  {
    id: 4,
    icon: planVocation,
    title: "The simplest way to plan your vacation",
    desc: "Trackn Fly is the complete package for the wanderlust. Whether you are planning a trip with family or friends, it is the most useful website.",
  },
];

export const WhatTracknFlyHaveForYou = () => {
  return (
    <div className="whatTracknFlyHaveForYou flex flex-col gap-[7rem] py-[7rem] px-[2rem]">
      <div className="whatTracknFlyHaveForYou_title text-[3rem] md:text-[4rem]">
        What does Trackn Fly have for you?
      </div>
      <div className="container">
        <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[4rem]">
          {data.map((item) => (
            <div className="card">
              <div className="img">
                <img
                  src={item.icon}
                  className="easy-steps"
                  alt="customer-care"
                  loading="lazy"
                />
              </div>
              <div className="text">
                <p className="title">{item.title} </p>
                <p className="subtitle">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
