import React from "react";
import aboutTracknfly from "../../assets/images/aboutTrackenfly.png";
import { Link } from "react-router-dom";

const AboutTrackenFly = () => {
  return (
    <div className="">
      <div className="w-[95%] py-5 md:py-24 mx-auto">
        <div className="relative  rounded-[2rem]">
          <div
            className={`text-white p-12 rounded-2xl md:p-20 bg-cover bg-center`}
            style={{ backgroundImage: `url(${aboutTracknfly})` }}
          >
            <h5 className="font-bold text-[3rem]">About Trackn Fly</h5>
            <p className="text-[1.6rem] font-normal tracking-wide leading-relaxed">
              Today, we have been solving billions of queries across the world
              and helping large numbers of travelers{" "}
              <br className="lg:block hidden" />
              around the globe to make their trips more easy. Be it a query on
              holiday packages, flight and hotel booking{" "}
              <br className="lg:block hidden" />
              car rental, or anything regarding the website, we are here to
              assist you in the simplest way.{" "}
              <Link to={"/about-us"} className="text-red-500 cursor-pointer">
                Know more.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTrackenFly;
