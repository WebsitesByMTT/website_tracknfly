import React from "react";
import bestdealsbg from "../../assets/images/bestdeals.png";
import bestdealAboutIMG from "../../assets/images/best-deal-about.png";

import bestDealCardIMG from "../../assets/images/best-deal.png";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Helmet } from "react-helmet";
import AboutTrackenFly from "../../components/aboutTrackenFly/AboutTrackenFly";
import BeastDealsCrausal1 from "../../assets/images/BeastDealsCrausal1.png";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import FrquentlyAskedQuestions from "../../components/faqs/FrquentlyAskedQuestions";
import { Link } from "react-router-dom";

const BestDeals = () => {
  const data = [
    {
      id: 1,
      image: BeastDealsCrausal1,
      title: "Innsbruck get 20% off on pre booking",
      para: "Now book flight and get a free meal & save BIG bucks on our journey.",
    },
    {
      id: 2,
      image: BeastDealsCrausal1,
      title: "Innsbruck get 20% off on pre booking",
      para: "Now book flight and get a free meal & save BIG bucks on our journey.",
    },
    {
      id: 3,
      image: BeastDealsCrausal1,
      title: "Innsbruck get 20% off on pre booking",
      para: "Now book flight and get a free meal & save BIG bucks on our journey.",
    },
    {
      id: 4,
      image: BeastDealsCrausal1,
      title: "Innsbruck get 20% off on pre booking",
      para: "Now book flight and get a free meal & save BIG bucks on our journey.",
    },
    {
      id: 5,
      image: BeastDealsCrausal1,
      title: "Innsbruck get 20% off on pre booking",
      para: "Now book flight and get a free meal & save BIG bucks on our journey.",
    },
    {
      id: 6,
      image: BeastDealsCrausal1,
      title: "Innsbruck get 20% off on pre booking",
      para: "Now book flight and get a free meal & save BIG bucks on our journey.",
    },
  ];

  const frquentlyAskedQuestions = [
    {
      id: 1,
      question: "How do I find travel deals on Tracknfly?      ",
      answer:
        "On our best deals page, you will get all the latest discounts and offers on flight, hotels and car rentals.        ",
    },
    {
      id: 2,
      question: "How can I use Tracknfly to manage my travel bookings?        ",
      answer:
        "To manage your travel bookings, you need to sign up and add all your travel bookings like flights, hotels, and car rentals. Then enter the details including dates, times, and confirmation numbers. It will help you to keep everything organized. If there are any changes like the flight delay or the deals. We will notify you.         ",
    },
    {
      id: 3,
      question: "How do I find cheap airplane tickets?      ",
      answer:
        "For cheap airplane tickets, just visit our flight offers page and enter your destination and travel dates. There will be numerious option on flights tickets. Now you can compare the prices and book cheapest airplane tickets with Trackn Fly.        ",
    },
    {
      id: 4,
      question:
        "What things should we consider before buying an air ticket for a first time air travel?      ",
      answer:
        "While booking air tickets for the first time, you need to consider a few things like your destination and travel dates. Decide your budget as budget is the most important thing for traveling including additional costs like meals and baggage fees. Compare different airlines and flight options and find the best deal on it. Check baggage allowance and avoid unexpected fees and ensure that you have all necessary travel documents such as a valid passport and visa. We will help you to have the offers so that you can enjoy a hassle-free vacation.        ",
    },
    {
      id: 5,
      question:
        "Can I negotiate the price of an airplane ticket if I want to buy 300 tickets?      ",
      answer:
        "Yes, you can but it depends on your negotiating skills, airlines, and the circumstances.         ",
    },
  ];

  const bestFlightData = [
    {
      date: "Thu, 23 May",
      from: "Honolulu (HNL)",
      to: "Kahului (OGG)",
      discount: "upto 15%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "Atlanta (ATL) ",
      to: "Orlando (MCO)",
      discount: "upto 10%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "Las Vegas (LAS)",
      to: "Los Angeles (LAX)",
      discount: "upto 20%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "New York (JFK) ",
      to: "Los Angeles (LAX)",
      discount: "upto 30%",
      url: "",
    },
    {
      date: "Thu, 23 May",
      from: "Honolulu (HNL)",
      to: "Kahului (OGG)",
      discount: "upto 15%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "Atlanta (ATL) ",
      to: "Orlando (MCO)",
      discount: "upto 10%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "Las Vegas (LAS)",
      to: "Los Angeles (LAX)",
      discount: "upto 20%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "New York (JFK) ",
      to: "Los Angeles (LAX)",
      discount: "upto 30%",
      url: "",
    },
  ];
  return (
    <>
      <Helmet>
        <title>BEST DEALS - Air Tickets | Cars on rentals | Cheap Hotels</title>
        <meta
          name="description"
          content="Trackn Fly - With just a few clicks you can have the best deals on flights, cars on rentals, and cheap hotels with Trackn Fly. Now plan your trip with us and create memories."
        />
        <meta
          property="og:url"
          content="https://www.tracknfly.com/best-deals"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="BEST DEALS -  Air Tickets | Cars on rentals | Cheap Hotels."
        />
        <meta property="og:site_name" content="BEST DEALS" />
        <meta
          property="og:description"
          content="With just a few clicks you can have the best deals on flights, cars on rentals, and cheap hotels with Trackn Fly. Now plan your trip with us and create memories."
        />
        <meta
          property="og:image"
          content="https://i.im.ge/2024/04/30/ZPv6SY.Final-logo.jpeg"
        />
        <meta
          name="Keywords"
          content="Best deals, air flight deals, cheap hotels with Trackn Fly, Cars deals, Flights Booking, cheap deals, air flights deals, explore deals, great deals, offers"
        />
      </Helmet>
      <div
        className=" bg-cover bg-center px-[6rem] py-[10rem] overflow-hidden"
        style={{ backgroundImage: `url(${bestdealsbg})` }}
      >
        <div className=" flex flex-row">
          <div className="flex items-start justify-center flex-col gap-[4rem]">
            <div className="text-white font-bold text-[5rem]">
              Now plan your trip with <br className="md:hidden block" />
              us and create memories.
            </div>
            <button className="bg-[#2F80ED] text-white text-[1.4rem] py-4 px-5 rounded-xl hover:bg-blue-600 hover:scale-90 transition-all">
              Book Your Tickets Now
            </button>
          </div>
          <div className=" w-1/2  relative hidden sm:flex">
            <div className="p-[4rem]"></div>
            <Carousel
              opts={{
                align: "start",
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent>
                {data.map((item, idx) => (
                  <CarouselItem key={idx} className="basis-1/3 lg:basis-1/2">
                    <div
                      key={idx}
                      className=" bg-white p-[2rem] rounded-[2rem]"
                    >
                      <img src={item.image} alt="img" className="w-full" />
                      <div className="py-8 text-black font-bold text-[2.3rem] text-start ">
                        {item.title}
                      </div>
                      <div className="text-black text-opacity-50 text-[1.5rem] text-start">
                        {item.para}
                      </div>
                      <div className="flex items-center pt-8 justify-between">
                        <div className="text-black text-[1.3rem]">
                          EXPIRING SOON
                        </div>
                        <button className="bg-[#FB4A2A] text-white text-[1.4rem] py-1.5 px-5 rounded-full hover:bg-red-800 hover:scale-90 transition-all">
                          BOOK NOW
                        </button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>

      {/* Books Flights And Have The Best Deals Upto 10% to 40% Off */}
      <div className="px-[4rem] py-[6rem] flex flex-col gap-[4rem]">
        <div>
          <h2 className="text-black text-left tracking-wide font-semibold  text-[2.5rem]">
            Books Flights And Have The Best Deals Upto 10% to 40% Off
          </h2>
          <p className=" text-[1.6rem]">Within USA Flights</p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full "
        >
          <CarouselContent>
            {bestFlightData.map((item, idx) => (
              <CarouselItem
                key={idx}
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-[1rem] bg-[white]"
              >
                <div
                  className=" p-[2rem] flex flex-col items-start justify-center gap-[1rem] rounded-2xl "
                  key={idx}
                  style={{ boxShadow: "0px 4.43px 17.71px 0px #9E9E9E40" }}
                >
                  <div className=" flex flex-col gap-[1rem]">
                    <span className=" text-[gray] text-[1.6rem]">
                      {item.date}
                    </span>
                    <div className=" ml-3">
                      <h6 className=" font-[500] text-[2rem]">{item.from}</h6>
                      <svg
                        width="10"
                        height="55"
                        viewBox="0 0 10 55"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75992 7.50018L9.34185 0.00103831L0.681592 -0.00103831L4.25992 7.49982L5.75992 7.50018ZM0.99949 50.9991C0.99896 53.2082 2.78939 54.9995 4.99853 55.0001C7.20767 55.0006 8.99896 53.2102 8.99949 51.001C9.00002 48.7919 7.20959 47.0006 5.00045 47.0001C2.79131 46.9995 1.00002 48.79 0.99949 50.9991ZM4.26019 6.37483L4.25917 10.6248L5.75917 10.6252L5.76019 6.37519L4.26019 6.37483ZM4.25815 14.8748L4.25713 19.1248L5.75713 19.1252L5.75815 14.8752L4.25815 14.8748ZM4.25611 23.3748L4.25509 27.6249L5.75509 27.6252L5.75611 23.3752L4.25611 23.3748ZM4.25408 31.8749L4.25306 36.1249L5.75306 36.1252L5.75408 31.8752L4.25408 31.8749ZM4.25204 40.3749L4.25102 44.6249L5.75102 44.6252L5.75204 40.3752L4.25204 40.3749ZM4.25 48.8749L4.24949 50.9999L5.74949 51.0002L5.75 48.8752L4.25 48.8749Z"
                          fill="#FB4A2A"
                        />
                      </svg>

                      <h6 className=" font-[500] text-[2rem]">{item.to}</h6>
                    </div>
                    <span className="text-[gray] text-[1.6rem] font-normal capitalize">
                      {item.discount}
                    </span>
                  </div>

                  <a href={item.url}>
                    <button className=" bg-[#2659C3] text-white py-[1.2rem] px-[3rem] rounded-[3rem] text-[1.4rem]">
                      Book Now
                    </button>{" "}
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Bumper Deal On Your Hotel Bookings */}
      <div className="px-[4rem] py-[6rem] flex flex-col gap-[4rem]">
        <div>
          <h2 className="text-black text-left tracking-wide font-semibold  text-[2.5rem]">
            Bumper Deal On Your Hotel Bookings
          </h2>
          <p className=" text-[1.6rem]">Hotels in USA</p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full "
        >
          <CarouselContent>
            {bestFlightData.map((item, idx) => (
              <CarouselItem
                key={idx}
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-[1rem] bg-[white]"
              >
                <div
                  className=" p-[2rem] flex flex-col items-start justify-center gap-[1rem] rounded-2xl "
                  key={idx}
                  style={{ boxShadow: "0px 4.43px 17.71px 0px #9E9E9E40" }}
                >
                  <div className=" flex flex-col ">
                    <h6 className=" font-[500] text-[2rem]">London hotels</h6>
                    <p className=" text-[1.6rem] text-[gray] capitalize">
                      Flat 20%
                    </p>
                  </div>
                  <img
                    src={bestDealCardIMG}
                    alt="alt"
                    className=" w-full object-cover"
                  />

                  <a href={item.url} className=" mt-[1rem]">
                    <button className=" bg-[#2659C3] text-white py-[1.2rem] px-[3rem] rounded-[3rem] text-[1.4rem]">
                      Book Now
                    </button>{" "}
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Unlock Your Remarkable Savings On Your Car Rental Bookings */}
      <div className="px-[4rem] py-[6rem] flex flex-col gap-[4rem]">
        <div>
          <h2 className="text-black text-left tracking-wide font-semibold  text-[2.5rem]">
            Unlock Your Remarkable Savings On Your Car Rental Bookings{" "}
          </h2>
          <p className=" text-[1.6rem]">
            Book a car on rent at your Destination
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full "
        >
          <CarouselContent>
            {bestFlightData.map((item, idx) => (
              <CarouselItem
                key={idx}
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-[1rem] bg-[white]"
              >
                <div
                  className=" p-[2rem] flex flex-col items-start justify-center gap-[1rem] rounded-2xl "
                  key={idx}
                  style={{ boxShadow: "0px 4.43px 17.71px 0px #9E9E9E40" }}
                >
                  <div className=" flex flex-col ">
                    <h6 className=" font-[500] text-[2rem]">London hotels</h6>
                    <p className=" text-[1.6rem] text-[gray] capitalize">
                      Flat 20%
                    </p>
                  </div>
                  <img
                    src={bestDealCardIMG}
                    alt="alt"
                    className=" w-full object-cover"
                  />

                  <a href={item.url} className=" mt-[1rem]">
                    <button className=" bg-[#2659C3] text-white py-[1.2rem] px-[3rem] rounded-[3rem] text-[1.4rem]">
                      Book Now
                    </button>{" "}
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <AboutTrackenFly />

      <div className=" px-[4rem] py-[6rem] flex flex-col gap-[4rem]">
        <div className=" flex items-center justify-center flex-col">
          <h6 className="text-black text-left tracking-wide font-semibold  text-[2.5rem]">
            Trackn Fly Wallet
          </h6>
          <p className=" text-[1.6rem] text-center">
            Trackn Fly has a virtual wallet that allows users to earn and redeem
            it for flight, hotel, and car rental bookings. There is no limit on
            its money like how much money you can spend on your flight, hotel,
            and car rental booking, you can utilize 100% money to book.
          </p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <h6 className="text-black text-left tracking-wide font-semibold  text-[2.5rem]">
            Trackn Fly Exclusive Discounts
          </h6>
          <p className=" text-[1.6rem] text-center">
            At Trackn Fly there are several offers for flights, hotels, and car
            rentals. To save more money, you can also use a coupon code during
            your checkout to have significant discounts on your flight and hotel
            bookings. As a leading travel company, we update our offers from
            time to time. We also provide some attractive offer discounts to our
            existing and new users. As the deals change frequently, we also send
            notifications to our new best deals and offers. Also, you can have
            some cheapest holiday packages and save money for your next
            vacation.
          </p>
        </div>
      </div>

      <FrquentlyAskedQuestions data={frquentlyAskedQuestions} sidebar={false} />
      <div className="w-[95%] py-5 md:py-24 mx-auto">
        <div className="relative  rounded-[2rem]">
          <div
            className={`text-white p-12 rounded-2xl md:p-20 bg-cover bg-center`}
            style={{ backgroundImage: `url(${bestdealAboutIMG})` }}
          >
            <h5 className="font-bold text-[3rem]">
              Plan your trip with a travel expert
            </h5>
            <p className="text-[1.6rem] font-normal tracking-wide leading-relaxed">
              Nowadays, the travel industry is rapidly growing worldwide and
              choosing the best discount from the plethora of available online
              is the most important thing for all of us. But Trackn Fly helps
              users to organize their trip online, compare prices of various
              airlines, hotels, and car on rentals,{" "}
              <Link to={"/about-us"} className="text-red-500 cursor-pointer">
                know more...
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestDeals;
