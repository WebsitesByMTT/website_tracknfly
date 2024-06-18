import React from "react";
import "./topFlightOffer.scss";
import card1Img from "../../assets/images/top-flight-card-1.webp";
import card2Img from "../../assets/images/top-flight-card-2.webp";
import card3Img from "../../assets/images/top-flight-card-3.webp";
import card4Img from "../../assets/images/top-flight-card-4.webp";
import card5Img from "../../assets/images/top-flight-card-5.webp";
import card6Img from "../../assets/images/top-flight-card-6.jpg";
import { Link, useNavigate } from "react-router-dom";

const TopFlightOffer = () => {
  const navigate = useNavigate()
  const handelNavigate = () => {
    navigate('/best-deals')
  }

  const data = {
    cards: [
      {
        "gridCols": 'col-span-12 md:col-span-6 ',
        "image": card1Img,
        "ariaLabel": "Book effortlessly with Trackn Fly",
        "text": "Book effortlessly with Trackn Fly and get 15 to 35% discounts"
      },
      {
        "gridCols": 'col-span-12 md:col-span-3 h-[200px]',
        "image": card2Img,
        "ariaLabel": "Book a Flight and get exclusive offers",
        "text": "Book a Flight and get exclusive offers"
      },
      {
        "gridCols": 'col-span-12 md:col-span-3 h-[200px]',
        "image": card3Img,
        "ariaLabel": "Have a huge discount by booking flights",
        "text": "Have a huge discount by booking flights"
      },
      {
        "gridCols": 'col-span-12 md:col-span-3 h-[230px]',
        "image": card4Img,
        "ariaLabel": "Plan a trip with our best travel packages",
        "text": "Plan a trip with our best travel packages"
      },
      {
        "gridCols": 'col-span-12 md:col-span-3 h-[200px]',
        "image": card5Img,
        "ariaLabel": "Get coupons and explore the world",
        "text": "Get coupons and explore the world"
      },
      {
        "gridCols": 'col-span-12 md:col-span-6',
        "image": card6Img,
        "ariaLabel": "Plan your next vacation now",
        "text": "Plan your next vacation now"
      }
    ]
  }

  return (
    <div className="topFlightOffer">
      <div className="Container">
        <div className="text">
          <h2 className="title">Book Top Flight with Flexibility</h2>
          <p className="desc">
            Are you looking for your next trip? then check out the top airline
            ticket deals. If you want to discover the vibrant city of New York
            or explore the beauty of Sydney there is everything for everyone.
            Here you can book and compare the cheapest airline and flight
            tickets. With our exclusive packages, find the perfect holiday
            packages and make unforgettable memories.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-5">
          {
            data?.cards?.map((item, ind) => (
              <Link
                to={'/best-deals'}
                key={ind}
                className={`relative rounded-2xl overflow-hidden ${item.gridCols} cursor-pointer group 
              h-[200px] md:h-[300px] lg:h-[400px]`}
              >
                <img
                  src={item.image}
                  alt={item.ariaLabel}
                  className="w-full h-full object-cover object-center rounded-2xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 px-4 flex items-center transform translate-y-full group-hover:translate-y-[55%] md:group-hover:translate-y-[60%] transition-transform duration-300 ease-in-out">
                  <p className="text-white text-start text-[2rem] md:text-[2.5rem] -translate-y-[40px] md:-translate-y-[100px]">
                    {item?.text}
                  </p>
                </div>
              </Link>
            ))
          }

        </div>
      </div>
    </div>
  );
};

export default TopFlightOffer;
